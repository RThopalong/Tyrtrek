/* =====================================================================
   Tyrtrek Finding Kit — shared by the Field Capture app (/capture/)
   and both report builders (/app/ commercial, /residential/).

   A "finding" is one self-contained, portable vulnerability record:
   photos (embedded), four text fields (vulnerability / risk /
   mitigation / internal follow-up), optional category + priority.
   It travels as a single plain .json file.

   Everything here is non-destructive: crop, print width, caption and
   annotations are stored as editable layers on top of the photo and
   are only "baked" when the report is rendered.
   ===================================================================== */
(function(){
'use strict';

const TT = window.TT = window.TT || {};

/* ---------------- CONSTANTS ---------------- */
TT.SCHEMA = 'tyrtrek.finding';
TT.SCHEMA_VERSION = 1;
TT.PHOTO_MAX_EDGE = 2000;      // px — leaves crop headroom for ~4in @ 300dpi print
TT.PHOTO_QUALITY = 0.85;
TT.DEFAULT_PRINT_WIDTH_IN = 4;
TT.MIN_PRINT_WIDTH_IN = 1.5;
TT.MAX_PRINT_WIDTH_IN = 6.5;   // text column width of the report page
TT.PRINT_DPI = 300;

TT.TRACKS = {
  commercial: {
    label: 'Facility & Commercial',
    builder: '../app/',
    categories: ["Area","Perimeter","Doors","Windows","Parking","Landscaping","Lighting",
      "Alarm Systems","Cameras","Critical Infrastructure","Protected/Controlled Areas",
      "Deliveries","Guard Force","Emergency Plans","Screening Procedures"]
  },
  residential: {
    label: 'Residential',
    builder: '../residential/',
    categories: ["Neighborhood & Area Study","Perimeter & Property Boundary","Doors","Windows",
      "Garage & Vehicle Storage","Driveway, Parking & Approach","Landscaping & Exterior Concealment",
      "Exterior Lighting","Alarm & Monitored Security Systems","Cameras, Video Doorbells & Home Network Security",
      "Safe Room / Panic Room & Valuables Storage","Deliveries, Mail & Package Security",
      "Household Staff, Guests & Service Provider Screening","Family Emergency & Fire/Life Safety Planning",
      "Pool, Outdoor Amenities & Attractive Nuisance","Administrative & Documentation",
      "Enhanced / Estate-Level Considerations"]
  }
};

TT.PRIORITIES = ["Unrated","Low","Medium","High","Critical"];

TT.FIELDS = [
  { key:'vulnerability', label:'Vulnerability', hint:'What did you observe?' },
  { key:'risk',          label:'Risk',          hint:'What does it expose them to?' },
  { key:'mitigation',    label:'Mitigation',    hint:'What reduces the risk?' },
  { key:'followUp',      label:'Follow-up notes', hint:'Internal only — never printed in the report', internal:true }
];

TT.COLORS = [
  { name:'Red',    hex:'#e02424' },
  { name:'Yellow', hex:'#facc15' },
  { name:'Green',  hex:'#22a447' },
  { name:'Blue',   hex:'#1d5fd6' },
  { name:'Black',  hex:'#111111' },
  { name:'White',  hex:'#ffffff' }
];
const LIGHT_COLORS = ['#facc15','#ffffff'];
function isLight(hex){ return LIGHT_COLORS.includes((hex||'').toLowerCase()); }

const SIZE_MUL = { 1:0.6, 2:1, 3:1.6 };

/* ---------------- SMALL UTILITIES ---------------- */
TT.uuid = function(){
  if(window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
    const r = Math.random()*16|0; return (c==='x' ? r : (r&0x3|0x8)).toString(16);
  });
};
TT.esc = function(str){
  return String(str==null?'':str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
};
TT.debounce = function(fn, ms){
  let t; return function(...a){ clearTimeout(t); t = setTimeout(()=>fn.apply(this,a), ms); };
};
TT.clone = function(o){ return JSON.parse(JSON.stringify(o)); };
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }

TT.toast = function(msg, ms){
  injectStyles();
  let el = document.getElementById('tt-toast');
  if(!el){ el = document.createElement('div'); el.id = 'tt-toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=>el.classList.remove('show'), ms || 3200);
};

/* ---------------- ON-DEVICE STORAGE (IndexedDB) ----------------
   One database shared by every page on the site (same origin), so a
   finding captured in /capture/ can be pulled straight into a report
   builder on the same phone or iPad without moving any file. */
const DB_NAME = 'tyrtrek';
const DB_VERSION = 1;
let dbPromise = null;
TT.db = function(){
  if(dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject)=>{
    if(!('indexedDB' in window)){ reject(new Error('IndexedDB not available')); return; }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = ()=>{
      const db = req.result;
      if(!db.objectStoreNames.contains('findings')) db.createObjectStore('findings', { keyPath:'id' });
      if(!db.objectStoreNames.contains('drafts'))   db.createObjectStore('drafts',   { keyPath:'key' });
      if(!db.objectStoreNames.contains('settings')) db.createObjectStore('settings', { keyPath:'key' });
    };
    req.onsuccess = ()=>resolve(req.result);
    req.onerror = ()=>reject(req.error);
  });
  dbPromise.catch(()=>{ dbPromise = null; });
  return dbPromise;
};
function txDone(tx){ return new Promise((res,rej)=>{ tx.oncomplete=()=>res(); tx.onerror=()=>rej(tx.error); tx.onabort=()=>rej(tx.error); }); }
TT.dbPut = async function(store, value){
  const db = await TT.db(); const tx = db.transaction(store,'readwrite');
  tx.objectStore(store).put(value); return txDone(tx);
};
TT.dbGet = async function(store, key){
  const db = await TT.db();
  return new Promise((res,rej)=>{ const r = db.transaction(store).objectStore(store).get(key); r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error); });
};
TT.dbGetAll = async function(store){
  const db = await TT.db();
  return new Promise((res,rej)=>{ const r = db.transaction(store).objectStore(store).getAll(); r.onsuccess=()=>res(r.result||[]); r.onerror=()=>rej(r.error); });
};
TT.dbDelete = async function(store, key){
  const db = await TT.db(); const tx = db.transaction(store,'readwrite');
  tx.objectStore(store).delete(key); return txDone(tx);
};
/* Ask the browser not to evict this site's data under storage pressure. */
TT.requestPersistentStorage = async function(){
  try{ if(navigator.storage && navigator.storage.persist && !(await navigator.storage.persisted())) await navigator.storage.persist(); }catch(e){}
};

/* ---------------- FINDING MODEL ---------------- */
function emptyField(){ return { text:'', audio:[] }; }
TT.newFinding = function(opts){
  opts = opts || {};
  const now = new Date().toISOString();
  return {
    type: TT.SCHEMA, schemaVersion: TT.SCHEMA_VERSION,
    id: TT.uuid(), createdAt: now, updatedAt: now, exportedAt: null,
    track: opts.track || 'commercial',
    site: opts.site || '',
    category: opts.category || '',          // '' = unsorted
    priority: 'Unrated',
    fields: { vulnerability: emptyField(), risk: emptyField(), mitigation: emptyField(), followUp: emptyField() },
    photos: []
  };
};
TT.newPhoto = function(dataUrl, w, h){
  return {
    id: TT.uuid(), dataUrl, width: w||null, height: h||null,
    crop: null,                                   // {x,y,w,h} normalized to the full photo, or null = uncropped
    printWidthIn: TT.DEFAULT_PRINT_WIDTH_IN,
    caption: { enabled:false, text:'' },          // client-facing, prints under the photo
    annotations: []
  };
};
/* Accepts photos from older saved reports ({dataUrl, caption:"..."}) and fills any gaps. */
TT.normalizePhoto = function(p){
  if(!p || !p.dataUrl) return null;
  const out = TT.newPhoto(p.dataUrl, p.width, p.height);
  if(p.id) out.id = p.id;
  if(p.crop && p.crop.w > 0 && p.crop.h > 0) out.crop = { x:+p.crop.x||0, y:+p.crop.y||0, w:+p.crop.w, h:+p.crop.h };
  if(typeof p.printWidthIn === 'number') out.printWidthIn = clamp(p.printWidthIn, TT.MIN_PRINT_WIDTH_IN, TT.MAX_PRINT_WIDTH_IN);
  if(typeof p.caption === 'string') out.caption = { enabled: !!p.caption.trim(), text: p.caption };
  else if(p.caption && typeof p.caption === 'object') out.caption = { enabled: !!p.caption.enabled, text: p.caption.text||'' };
  if(Array.isArray(p.annotations)) out.annotations = p.annotations.filter(a=>a && a.type);
  return out;
};
function normalizeField(f){
  if(typeof f === 'string') return { text:f, audio:[] };
  f = f || {};
  return { text: f.text || '', audio: Array.isArray(f.audio) ? f.audio.filter(a=>a && a.dataUrl) : [] };
}
TT.normalizeFinding = function(obj){
  if(!obj || obj.type !== TT.SCHEMA) return null;
  const f = TT.newFinding({ track: obj.track, site: obj.site, category: obj.category });
  ['id','createdAt','updatedAt','exportedAt'].forEach(k=>{ if(obj[k]) f[k] = obj[k]; });
  if(TT.PRIORITIES.includes(obj.priority)) f.priority = obj.priority;
  const fields = obj.fields || {};
  TT.FIELDS.forEach(d=>{ f.fields[d.key] = normalizeField(fields[d.key]); });
  f.photos = (obj.photos||[]).map(TT.normalizePhoto).filter(Boolean);
  return f;
};
TT.findingHasContent = function(f){
  return f.photos.length || TT.FIELDS.some(d=>f.fields[d.key].text.trim() || f.fields[d.key].audio.length);
};
TT.pendingAudioCount = function(f){
  return TT.FIELDS.reduce((n,d)=>n + f.fields[d.key].audio.filter(a=>!a.transcribed).length, 0);
};
function fileToken(s){ return (s||'').trim().replace(/[\\/:*?"<>|]/g,'').replace(/&/g,'and').replace(/\s+/g,'-').slice(0,40); }
TT.findingFileName = function(f){
  const d = new Date(f.createdAt || Date.now());
  const pad = n=>String(n).padStart(2,'0');
  const stamp = `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
  return ['VA-Finding', fileToken(f.site)||'Site', fileToken(f.category)||'Unsorted', stamp, f.id.slice(0,6)].join('_') + '.json';
};
TT.findingToFile = function(f){
  const json = JSON.stringify(f);
  const name = TT.findingFileName(f);
  try{ return new File([json], name, { type:'application/json' }); }
  catch(e){ const b = new Blob([json], { type:'application/json' }); b.name = name; return b; }
};

/* Reads .json files: a single finding, an array of findings, or a bundle. */
TT.readFindingFiles = async function(fileList){
  const findings = [], errors = [];
  for(const file of Array.from(fileList||[])){
    try{
      const parsed = JSON.parse(await file.text());
      const list = Array.isArray(parsed) ? parsed : (parsed && Array.isArray(parsed.findings) ? parsed.findings : [parsed]);
      let ok = 0;
      list.forEach(item=>{ const f = TT.normalizeFinding(item); if(f){ findings.push(f); ok++; } });
      if(!ok) errors.push(file.name + ' is not a finding file');
    }catch(e){ errors.push(file.name + ' could not be read'); }
  }
  return { findings, errors };
};

/* ---------------- SEND / SAVE ----------------
   Uses the phone's share sheet when it can carry files: from there the
   user picks OneDrive (or Save to Files → OneDrive), Mail, or Messages.
   Falls back to a plain download everywhere else. */
TT.downloadBlob = function(blob, name){
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 4000);
};
TT.canShareFiles = function(){
  try{
    const probe = new File(['{}'], 'probe.json', { type:'application/json' });
    return !!(navigator.canShare && navigator.share && navigator.canShare({ files:[probe] }));
  }catch(e){ return false; }
};
TT.shareFindings = async function(findings, opts){
  opts = opts || {};
  const files = findings.map(TT.findingToFile);
  if(!opts.forceDownload && TT.canShareFiles() && navigator.canShare({ files })){
    try{
      await navigator.share({ files, title: files.length===1 ? files[0].name : `${files.length} VA findings` });
      return 'shared';
    }catch(e){
      if(e && e.name === 'AbortError') return 'cancelled';
      // fall through to download on any other failure
    }
  }
  for(let i=0;i<files.length;i++){
    TT.downloadBlob(files[i], files[i].name);
    if(files.length > 1) await new Promise(r=>setTimeout(r, 350));
  }
  return 'downloaded';
};

/* ---------------- IMAGES ---------------- */
function loadImageFromURL(url){
  return new Promise((res,rej)=>{ const img = new Image(); img.onload=()=>res(img); img.onerror=()=>rej(new Error('Image failed to load')); img.src = url; });
}
const imgCache = new Map();
TT.loadImage = function(dataUrl){
  if(!imgCache.has(dataUrl)){
    const p = loadImageFromURL(dataUrl);
    p.catch(()=>imgCache.delete(dataUrl));
    imgCache.set(dataUrl, p);
    if(imgCache.size > 80) imgCache.delete(imgCache.keys().next().value);
  }
  return imgCache.get(dataUrl);
};
/* Downscale a camera/library photo so the long edge is TT.PHOTO_MAX_EDGE.
   Browsers apply EXIF orientation when drawing, so portrait shots stay upright. */
TT.fileToPhoto = async function(file){
  const url = URL.createObjectURL(file);
  try{
    const img = await loadImageFromURL(url);
    const w0 = img.naturalWidth, h0 = img.naturalHeight;
    const s = Math.min(1, TT.PHOTO_MAX_EDGE / Math.max(w0, h0));
    const w = Math.round(w0*s), h = Math.round(h0*s);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#fff'; ctx.fillRect(0,0,w,h);
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, w, h);
    return TT.newPhoto(c.toDataURL('image/jpeg', TT.PHOTO_QUALITY), w, h);
  } finally { URL.revokeObjectURL(url); }
};
/* Make sure width/height are known (older photos may not carry them). */
TT.ensurePhotoSize = async function(p){
  if(p.width && p.height) return p;
  const img = await TT.loadImage(p.dataUrl);
  p.width = img.naturalWidth; p.height = img.naturalHeight;
  return p;
};

/* ---------------- RENDERING (crop + annotations) ---------------- */
function cropOf(p){ return p.crop || { x:0, y:0, w:1, h:1 }; }
function normBox(a){
  let { x, y, w, h } = a;
  if(w < 0){ x += w; w = -w; }
  if(h < 0){ y += h; h = -h; }
  return { x, y, w, h };
}
function roundRect(ctx, x, y, w, h, r){
  r = Math.min(r, w/2, h/2);
  ctx.beginPath();
  ctx.moveTo(x+r, y); ctx.arcTo(x+w, y, x+w, y+h, r); ctx.arcTo(x+w, y+h, x, y+h, r);
  ctx.arcTo(x, y+h, x, y, r); ctx.arcTo(x, y, x+w, y, r); ctx.closePath();
}
/* T maps normalized photo coords to the target surface:
   T.x(nx), T.y(ny) → px; T.u = size unit in px (short side of the crop). */
function drawAnnotation(ctx, a, T, img, W, H){
  const sw = Math.max(1.5, T.u * 0.012 * (SIZE_MUL[a.size||2]||1));
  const color = a.color || '#e02424';
  const halo = isLight(color) ? 'rgba(0,0,0,.55)' : (color==='#111111' ? 'rgba(255,255,255,.7)' : 'rgba(0,0,0,.4)');
  ctx.save();
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';

  const strokeTwice = (pathFn)=>{
    pathFn(); ctx.strokeStyle = halo; ctx.lineWidth = sw + Math.max(2, sw*0.5); ctx.stroke();
    pathFn(); ctx.strokeStyle = color; ctx.lineWidth = sw; ctx.stroke();
  };

  if(a.type === 'mask'){
    const b = normBox(a);
    const dx = T.x(b.x), dy = T.y(b.y), dw = T.x(b.x+b.w)-dx, dh = T.y(b.y+b.h)-dy;
    if(a.mode === 'box' || !img){
      ctx.fillStyle = '#000'; ctx.fillRect(dx, dy, dw, dh);
    } else {
      // Low-res resample then smooth upscale = heavy blur that works on every browser
      const block = Math.max(8, T.u * 0.07);
      const tw = Math.max(1, Math.ceil(Math.abs(dw)/block)), th = Math.max(1, Math.ceil(Math.abs(dh)/block));
      const tiny = document.createElement('canvas'); tiny.width = tw; tiny.height = th;
      const tctx = tiny.getContext('2d');
      tctx.imageSmoothingEnabled = true;
      tctx.drawImage(img, b.x*W, b.y*H, Math.max(1,b.w*W), Math.max(1,b.h*H), 0, 0, tw, th);
      ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(tiny, 0, 0, tw, th, dx, dy, dw, dh);
    }
  }
  else if(a.type === 'rect'){
    const b = normBox(a);
    strokeTwice(()=>{ ctx.beginPath(); ctx.rect(T.x(b.x), T.y(b.y), T.x(b.x+b.w)-T.x(b.x), T.y(b.y+b.h)-T.y(b.y)); });
  }
  else if(a.type === 'circle'){
    const b = normBox(a);
    const cx = T.x(b.x + b.w/2), cy = T.y(b.y + b.h/2);
    const rx = Math.max(1, (T.x(b.x+b.w)-T.x(b.x))/2), ry = Math.max(1, (T.y(b.y+b.h)-T.y(b.y))/2);
    strokeTwice(()=>{ ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI*2); });
  }
  else if(a.type === 'arrow'){
    const x1 = T.x(a.x1), y1 = T.y(a.y1), x2 = T.x(a.x2), y2 = T.y(a.y2);
    const ang = Math.atan2(y2-y1, x2-x1);
    const head = Math.max(sw*4, T.u*0.04);
    const bx = x2 - Math.cos(ang)*head*0.8, by = y2 - Math.sin(ang)*head*0.8;
    strokeTwice(()=>{ ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(bx,by); });
    const tri = ()=>{
      ctx.beginPath(); ctx.moveTo(x2,y2);
      ctx.lineTo(x2 - head*Math.cos(ang - 0.45), y2 - head*Math.sin(ang - 0.45));
      ctx.lineTo(x2 - head*Math.cos(ang + 0.45), y2 - head*Math.sin(ang + 0.45));
      ctx.closePath();
    };
    tri(); ctx.strokeStyle = halo; ctx.lineWidth = Math.max(2, sw*0.5); ctx.stroke();
    tri(); ctx.fillStyle = color; ctx.fill();
  }
  else if(a.type === 'freehand' && a.pts && a.pts.length){
    strokeTwice(()=>{
      ctx.beginPath(); ctx.moveTo(T.x(a.pts[0][0]), T.y(a.pts[0][1]));
      for(let i=1;i<a.pts.length;i++) ctx.lineTo(T.x(a.pts[i][0]), T.y(a.pts[i][1]));
      if(a.pts.length===1) ctx.lineTo(T.x(a.pts[0][0])+0.1, T.y(a.pts[0][1]));
    });
  }
  else if(a.type === 'marker'){
    const r = T.u * 0.042 * (a.scale||1);
    const cx = T.x(a.x), cy = T.y(a.y);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.fillStyle = color; ctx.fill();
    ctx.lineWidth = Math.max(1.5, r*0.16); ctx.strokeStyle = isLight(color) ? '#111' : '#fff'; ctx.stroke();
    ctx.fillStyle = isLight(color) ? '#111' : '#fff';
    ctx.font = `700 ${Math.round(r*1.15)}px -apple-system,Segoe UI,Roboto,Arial,sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(String(a.n||1), cx, cy + r*0.05);
  }
  else if(a.type === 'text'){
    const fs = T.u * 0.05 * (a.scale||1);
    ctx.font = `700 ${Math.round(fs)}px -apple-system,Segoe UI,Roboto,Arial,sans-serif`;
    const label = a.text || 'Label';
    const tw = ctx.measureText(label).width;
    const padX = fs*0.45, padY = fs*0.28;
    const bw = tw + padX*2, bh = fs + padY*2;
    const cx = T.x(a.x), cy = T.y(a.y);
    roundRect(ctx, cx - bw/2, cy - bh/2, bw, bh, fs*0.3);
    ctx.fillStyle = color; ctx.fill();
    ctx.lineWidth = Math.max(1, fs*0.06); ctx.strokeStyle = halo; ctx.stroke();
    ctx.fillStyle = isLight(color) ? '#111' : '#fff';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(label, cx, cy + fs*0.04);
    if(T.editor){ a._bw = bw; a._bh = bh; } // cached on-screen box for hit testing
  }
  ctx.restore();
}
/* Masks first so other marks always sit on top of them. */
function sortedForDraw(annos){
  return annos.filter(a=>a.type==='mask').concat(annos.filter(a=>a.type!=='mask'));
}

/* Render the photo exactly as it will print: cropped, masked, annotated. */
TT.renderPhotoCanvas = async function(p, outWidth){
  const img = await TT.loadImage(p.dataUrl);
  const W = img.naturalWidth, H = img.naturalHeight;
  const c = cropOf(p);
  const sx = c.x*W, sy = c.y*H, sw = Math.max(1, c.w*W), sh = Math.max(1, c.h*H);
  const outW = Math.max(1, Math.round(Math.min(outWidth || sw, sw)));
  const k = outW / sw;
  const outH = Math.max(1, Math.round(sh * k));
  const canvas = document.createElement('canvas'); canvas.width = outW; canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, outW, outH);
  const T = { x: nx => (nx*W - sx)*k, y: ny => (ny*H - sy)*k, u: Math.min(sw, sh)*k };
  sortedForDraw(p.annotations||[]).forEach(a=>drawAnnotation(ctx, a, T, img, W, H));
  return canvas;
};
TT.renderPhotoDataURL = async function(p, outWidth, quality){
  const c = await TT.renderPhotoCanvas(p, outWidth);
  return c.toDataURL('image/jpeg', quality || 0.9);
};
/* Print-resolution render for the report: printWidthIn × 300 dpi (capped at the crop's real pixels). */
TT.renderPhotoForPrint = function(p){
  return TT.renderPhotoDataURL(p, Math.round((p.printWidthIn || TT.DEFAULT_PRINT_WIDTH_IN) * TT.PRINT_DPI), 0.9);
};
const thumbCache = new Map();
TT.renderThumb = async function(p, size){
  const key = p.id + '|' + (size||320) + '|' + p.dataUrl.length + '|' + JSON.stringify([p.crop, p.annotations]);
  if(thumbCache.has(key)) return thumbCache.get(key);
  const url = await TT.renderPhotoDataURL(p, size || 320, 0.8);
  thumbCache.set(key, url);
  if(thumbCache.size > 120) thumbCache.delete(thumbCache.keys().next().value);
  return url;
};

/* ---------------- STYLES (editor, voice fields, toast) ---------------- */
let stylesInjected = false;
function injectStyles(){
  if(stylesInjected) return; stylesInjected = true;
  const css = `
  #tt-toast{position:fixed;left:50%;bottom:calc(24px + env(safe-area-inset-bottom));transform:translate(-50%,20px);background:#1c2430;color:#fff;
    padding:11px 16px;border-radius:8px;font:600 14px/1.35 -apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:min(92vw,440px);text-align:center;
    opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;z-index:10000;box-shadow:0 6px 24px rgba(0,0,0,.3);}
  #tt-toast.show{opacity:1;transform:translate(-50%,0);}

  .tt-vf{margin:0 0 16px;}
  .tt-vf-head{display:flex;align-items:baseline;gap:8px;margin:0 0 6px;flex-wrap:wrap;}
  .tt-vf-head .tt-vf-label{font-size:13px;font-weight:700;color:#1c2430;}
  .tt-vf-head .tt-vf-hint{font-size:11.5px;color:#4b5563;}
  .tt-vf textarea{width:100%;min-height:92px;font:16px/1.5 -apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:10px 12px;border:1px solid #d8d2c4;border-radius:6px;background:#fff;color:#1c2430;resize:vertical;box-sizing:border-box;}
  .tt-vf.internal textarea{background:#fff8e6;border-color:#e2c27a;}
  .tt-vf.internal .tt-vf-label::after{content:'INTERNAL';margin-left:8px;font-size:9.5px;letter-spacing:.1em;background:#b98a35;color:#fff;padding:2px 6px;border-radius:10px;vertical-align:2px;}
  .tt-vf-actions{display:flex;gap:8px;align-items:center;margin-top:8px;flex-wrap:wrap;}
  .tt-vbtn{display:inline-flex;align-items:center;gap:6px;border:1px solid #d8d2c4;background:#fff;color:#1c2430;border-radius:20px;padding:8px 14px;
    font:600 13px -apple-system,Segoe UI,Roboto,Arial,sans-serif;cursor:pointer;min-height:38px;}
  .tt-vbtn:hover{background:#f4f1ea;}
  .tt-vbtn.live{background:#a13c3c;color:#fff;border-color:#a13c3c;animation:ttpulse 1.2s infinite;}
  @keyframes ttpulse{0%,100%{box-shadow:0 0 0 0 rgba(161,60,60,.5);}50%{box-shadow:0 0 0 6px rgba(161,60,60,0);}}
  .tt-vf-status{font-size:12px;color:#4b5563;font-style:italic;}
  .tt-audio-list{margin-top:8px;display:flex;flex-direction:column;gap:6px;}
  .tt-audio{display:flex;align-items:center;gap:8px;background:#f6f3ec;border:1px solid #e4ded2;border-radius:6px;padding:6px 8px;flex-wrap:wrap;}
  .tt-audio audio{height:34px;max-width:100%;flex:1 1 180px;}
  .tt-audio .meta{font-size:11.5px;color:#4b5563;}
  .tt-audio .pend{font-size:10.5px;font-weight:700;letter-spacing:.06em;color:#fff;background:#b98a35;border-radius:10px;padding:2px 7px;}
  .tt-audio .done{font-size:10.5px;font-weight:700;letter-spacing:.06em;color:#fff;background:#5b7f5e;border-radius:10px;padding:2px 7px;}
  .tt-audio button{border:none;background:none;color:#2f4858;font:600 12px -apple-system,Segoe UI,Roboto,Arial,sans-serif;cursor:pointer;padding:4px 6px;}
  .tt-audio button.del{color:#a13c3c;}

  .tt-ed{position:fixed;inset:0;z-index:9000;background:#14191f;color:#eef2f4;display:flex;flex-direction:column;
    font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:env(safe-area-inset-top) 0 env(safe-area-inset-bottom);}
  .tt-ed-top{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;background:#1d252e;}
  .tt-ed-top .ttl{font-weight:700;font-size:15px;}
  .tt-ed button{font-family:inherit;}
  .tt-ed-btn{border:1px solid rgba(255,255,255,.25);background:transparent;color:#fff;border-radius:6px;padding:9px 14px;font-weight:700;font-size:14px;cursor:pointer;min-height:40px;}
  .tt-ed-btn.primary{background:#c17a4f;border-color:#c17a4f;}
  .tt-ed-btn:disabled{opacity:.35;}
  .tt-ed-stage{flex:1;position:relative;min-height:0;}
  .tt-ed-stage canvas{position:absolute;inset:0;width:100%;height:100%;touch-action:none;display:block;}
  .tt-ed-tools,.tt-ed-opts{display:flex;gap:6px;padding:8px 10px;overflow-x:auto;background:#1d252e;align-items:center;-webkit-overflow-scrolling:touch;}
  .tt-ed-opts{background:#232d37;min-height:54px;flex-wrap:nowrap;}
  .tt-tool{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:2px;min-width:56px;padding:6px 6px;border-radius:8px;border:1px solid transparent;
    background:transparent;color:#c7d2d8;font-size:11px;font-weight:600;cursor:pointer;}
  .tt-tool .ic{font-size:19px;line-height:1.1;}
  .tt-tool.on{background:#2f4858;border-color:#c17a4f;color:#fff;}
  .tt-sw{flex:0 0 auto;width:34px;height:34px;border-radius:50%;border:2px solid rgba(255,255,255,.35);cursor:pointer;}
  .tt-sw.on{outline:3px solid #c17a4f;outline-offset:2px;}
  .tt-seg{display:inline-flex;border:1px solid rgba(255,255,255,.3);border-radius:6px;overflow:hidden;flex:0 0 auto;}
  .tt-seg button{background:transparent;border:none;color:#c7d2d8;padding:8px 11px;font-weight:600;font-size:12.5px;cursor:pointer;}
  .tt-seg button.on{background:#c17a4f;color:#fff;}
  .tt-sep{width:1px;align-self:stretch;background:rgba(255,255,255,.15);flex:0 0 auto;margin:0 4px;}
  .tt-ed-opts input[type=text]{flex:1 1 160px;min-width:140px;font-size:16px;padding:8px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.3);background:#14191f;color:#fff;}
  .tt-ed-note{font-size:12px;color:#9fb4bf;flex:0 0 auto;white-space:nowrap;}
  .tt-ed-layout{background:#f4f1ea;color:#1c2430;padding:14px 14px 16px;max-height:52vh;overflow:auto;}
  .tt-ed-layout h4{margin:0 0 8px;font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:#8a5a3b;}
  .tt-ed-layout label{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600;margin:12px 0 6px;}
  .tt-ed-layout input[type=range]{width:100%;}
  .tt-ed-layout input[type=text]{width:100%;font-size:16px;padding:9px 10px;border:1px solid #d8d2c4;border-radius:6px;box-sizing:border-box;}
  .tt-prev-page{background:#faf8f4;border:1px solid #d8d2c4;box-shadow:0 2px 10px rgba(0,0,0,.12);padding:10px;margin-top:10px;}
  .tt-prev-page p{margin:0 0 6px;color:#2a2f36;}
  .tt-prev-page .lbl{font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#8a5a3b;}
  .tt-prev-page img{display:block;border:1px solid #e4ded2;}
  .tt-prev-page figcaption{font-weight:600;border-left:3px solid #8a5a3b;padding-left:5px;margin-top:4px;}
  .tt-ed-layout .small-btn{border:1px solid #d8d2c4;background:#fff;border-radius:6px;padding:8px 12px;font-weight:600;font-size:13px;cursor:pointer;margin-top:12px;}
  `;
  const s = document.createElement('style'); s.id = 'tt-kit-styles'; s.textContent = css;
  document.head.appendChild(s);
}
TT.injectStyles = injectStyles;

/* =====================================================================
   VOICE FIELDS
   Dictate (live speech-to-text) → falls back to recording an audio memo
   when there's no connection or the browser can't transcribe. Audio is
   stored inside the finding, so nothing is lost; play it back later and
   transcribe at the desk. The phone keyboard's own mic key is a third
   path and works offline on most current phones.
   ===================================================================== */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeVoice = null;
function stopActiveVoice(){ if(activeVoice){ const v = activeVoice; activeVoice = null; v.stop(); } }
TT.stopVoice = stopActiveVoice;

function pickAudioMime(){
  if(!window.MediaRecorder) return null;
  const opts = ['audio/mp4','audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus'];
  for(const m of opts){ try{ if(MediaRecorder.isTypeSupported(m)) return m; }catch(e){} }
  return '';
}
function blobToDataURL(blob){
  return new Promise((res,rej)=>{ const r = new FileReader(); r.onload=()=>res(r.result); r.onerror=rej; r.readAsDataURL(blob); });
}
function fmtDur(s){ s = Math.round(s||0); return Math.floor(s/60) + ':' + String(s%60).padStart(2,'0'); }
function fmtTime(iso){ try{ return new Date(iso).toLocaleString([], { month:'short', day:'numeric', hour:'numeric', minute:'2-digit' }); }catch(e){ return ''; } }
TT.fmtTime = fmtTime;

/* opts: { label, hint, internal, placeholder, get(): {text,audio}, onChange(field), rows } */
TT.mountVoiceField = function(el, opts){
  injectStyles();
  const field = opts.get();
  el.classList.add('tt-vf');
  if(opts.internal) el.classList.add('internal');
  el.innerHTML = `
    <div class="tt-vf-head"><span class="tt-vf-label">${TT.esc(opts.label)}</span>${opts.hint?`<span class="tt-vf-hint">${TT.esc(opts.hint)}</span>`:''}</div>
    <textarea placeholder="${TT.esc(opts.placeholder||'Type, tap Dictate, or use your keyboard mic')}"></textarea>
    <div class="tt-vf-actions">
      <button type="button" class="tt-vbtn" data-act="dictate">🎤 Dictate</button>
      <button type="button" class="tt-vbtn" data-act="record">⏺ Audio memo</button>
      <span class="tt-vf-status"></span>
    </div>
    <div class="tt-audio-list"></div>`;
  const ta = el.querySelector('textarea');
  const bDict = el.querySelector('[data-act=dictate]');
  const bRec = el.querySelector('[data-act=record]');
  const status = el.querySelector('.tt-vf-status');
  const list = el.querySelector('.tt-audio-list');
  ta.value = field.text || '';
  if(opts.rows) ta.style.minHeight = (opts.rows*24+20)+'px';
  const changed = ()=>{ opts.onChange && opts.onChange(opts.get()); };
  ta.addEventListener('input', ()=>{ opts.get().text = ta.value; changed(); });

  function appendText(t){
    t = (t||'').trim(); if(!t) return;
    const cur = ta.value;
    const sep = !cur ? '' : (/[\s]$/.test(cur) ? '' : ' ');
    if(!cur || /[.!?]\s*$/.test(cur)) t = t.charAt(0).toUpperCase() + t.slice(1);
    ta.value = cur + sep + t;
    opts.get().text = ta.value; changed();
  }

  function renderAudio(){
    const f = opts.get();
    list.innerHTML = (f.audio||[]).map((a,i)=>`
      <div class="tt-audio">
        <span class="${a.transcribed?'done':'pend'}">${a.transcribed?'TRANSCRIBED':'TO TRANSCRIBE'}</span>
        <audio controls preload="none" src="${a.dataUrl}"></audio>
        <span class="meta">${fmtDur(a.durationSec)} · ${TT.esc(fmtTime(a.recordedAt))}</span>
        <button type="button" data-i="${i}" data-a="toggle">${a.transcribed?'Mark pending':'Mark transcribed'}</button>
        <button type="button" class="del" data-i="${i}" data-a="del">Delete</button>
      </div>`).join('');
  }
  list.addEventListener('click', e=>{
    const b = e.target.closest('button[data-a]'); if(!b) return;
    const f = opts.get(); const i = +b.dataset.i;
    if(b.dataset.a === 'toggle'){ f.audio[i].transcribed = !f.audio[i].transcribed; }
    else if(b.dataset.a === 'del'){ if(!confirm('Delete this audio memo?')) return; f.audio.splice(i,1); }
    renderAudio(); changed();
  });
  renderAudio();

  /* ---- live dictation ---- */
  let rec = null;
  const dictator = {
    stop(){ if(rec){ try{ rec.stop(); }catch(e){} } }
  };
  function setIdle(){
    bDict.classList.remove('live'); bDict.textContent = '🎤 Dictate';
    if(activeVoice === dictator) activeVoice = null;
    rec = null;
  }
  function startDictation(){
    if(!SR){ status.textContent = 'Live dictation isn’t available in this browser — recording an audio memo instead.'; startRecording(); return; }
    if(!navigator.onLine){ status.textContent = 'Offline — recording an audio memo to transcribe later.'; startRecording(); return; }
    stopActiveVoice();
    rec = new SR();
    rec.lang = navigator.language || 'en-US';
    rec.continuous = true; rec.interimResults = true;
    let failedOver = false;
    rec.onresult = (e)=>{
      let interim = '';
      for(let i=e.resultIndex;i<e.results.length;i++){
        const r = e.results[i];
        if(r.isFinal) appendText(r[0].transcript); else interim += r[0].transcript;
      }
      status.textContent = interim ? '“' + interim.trim() + '…”' : 'Listening…';
    };
    rec.onerror = (e)=>{
      if(e.error === 'network' || e.error === 'service-not-allowed' || e.error === 'language-not-supported'){
        failedOver = true; setIdle();
        status.textContent = 'Couldn’t reach speech service — recording an audio memo instead.';
        startRecording();
      } else if(e.error === 'not-allowed'){
        status.textContent = 'Microphone permission was denied.';
      } else if(e.error !== 'no-speech' && e.error !== 'aborted'){
        status.textContent = 'Dictation stopped (' + e.error + ').';
      }
    };
    rec.onend = ()=>{ if(!failedOver){ if(/Listening|…”$/.test(status.textContent)) status.textContent = ''; } setIdle(); };
    try{
      rec.start();
      activeVoice = dictator;
      bDict.classList.add('live'); bDict.textContent = '■ Stop';
      status.textContent = 'Listening…';
    }catch(err){ setIdle(); status.textContent = 'Recording an audio memo instead.'; startRecording(); }
  }
  bDict.addEventListener('click', ()=>{ if(rec){ dictator.stop(); } else { startDictation(); } });

  /* ---- audio memo ---- */
  let mr = null, chunks = [], t0 = 0, timer = null, stream = null;
  const recorder = { stop(){ if(mr && mr.state !== 'inactive') mr.stop(); } };
  async function startRecording(){
    if(mr) return;
    const mime = pickAudioMime();
    if(mime === null || !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
      status.textContent = 'This browser can’t record audio. Use your keyboard’s mic key to dictate.'; return;
    }
    stopActiveVoice();
    try{ stream = await navigator.mediaDevices.getUserMedia({ audio:true }); }
    catch(e){ status.textContent = 'Microphone permission was denied.'; return; }
    chunks = [];
    try{ mr = mime ? new MediaRecorder(stream, { mimeType:mime }) : new MediaRecorder(stream); }
    catch(e){ mr = new MediaRecorder(stream); }
    mr.ondataavailable = e=>{ if(e.data && e.data.size) chunks.push(e.data); };
    mr.onstop = async ()=>{
      clearInterval(timer);
      stream.getTracks().forEach(t=>t.stop());
      const dur = (Date.now() - t0)/1000;
      const type = mr.mimeType || mime || 'audio/webm';
      mr = null;
      bRec.classList.remove('live'); bRec.textContent = '⏺ Audio memo';
      if(activeVoice === recorder) activeVoice = null;
      if(!chunks.length || dur < 0.6){ status.textContent = ''; return; }
      const dataUrl = await blobToDataURL(new Blob(chunks, { type }));
      opts.get().audio.push({ id: TT.uuid(), mime: type, dataUrl, durationSec: Math.round(dur*10)/10, recordedAt: new Date().toISOString(), transcribed:false });
      status.textContent = 'Audio memo saved — transcribe it later.';
      renderAudio(); changed();
    };
    mr.start(1000);
    t0 = Date.now();
    activeVoice = recorder;
    bRec.classList.add('live');
    const tick = ()=>{ bRec.textContent = '■ Stop ' + fmtDur((Date.now()-t0)/1000); };
    tick(); timer = setInterval(tick, 500);
    status.textContent = 'Recording…';
  }
  bRec.addEventListener('click', ()=>{ if(mr){ recorder.stop(); } else { startRecording(); } });

  return { textarea: ta, refresh(){ ta.value = opts.get().text || ''; renderAudio(); } };
};

/* =====================================================================
   PHOTO EDITOR — crop, print width, caption, annotations.
   TT.openPhotoEditor(photo, { sampleText, onSave(updatedPhoto) })
   Works on a copy; nothing changes unless the user taps Save.
   ===================================================================== */
const TOOLS = [
  { id:'move',     ic:'✋', label:'Select' },
  { id:'crop',     ic:'⛶',  label:'Crop' },
  { id:'circle',   ic:'◯',  label:'Circle' },
  { id:'arrow',    ic:'➚',  label:'Arrow' },
  { id:'rect',     ic:'▭',  label:'Box' },
  { id:'text',     ic:'T',  label:'Label' },
  { id:'marker',   ic:'①',  label:'Number' },
  { id:'freehand', ic:'✎',  label:'Draw' },
  { id:'mask',     ic:'▦',  label:'Mask' },
  { id:'layout',   ic:'⤢',  label:'Size & caption' }
];

TT.openPhotoEditor = async function(photo, opts){
  opts = opts || {};
  injectStyles();
  stopActiveVoice();
  const p = TT.clone(photo);
  await TT.ensurePhotoSize(p);
  let img = await TT.loadImage(p.dataUrl);
  let W = img.naturalWidth, H = img.naturalHeight;

  const st = { tool:'move', color:'#e02424', size:2, maskMode:'blur', aspect:'free', sel:null, hist:[], dirty:false };

  const root = document.createElement('div');
  root.className = 'tt-ed';
  root.innerHTML = `
    <div class="tt-ed-top">
      <button class="tt-ed-btn" data-k="cancel">Cancel</button>
      <span class="ttl">Edit photo</span>
      <button class="tt-ed-btn primary" data-k="save">Save</button>
    </div>
    <div class="tt-ed-stage"><canvas></canvas></div>
    <div class="tt-ed-opts"></div>
    <div class="tt-ed-layout" hidden></div>
    <div class="tt-ed-tools">${TOOLS.map(t=>`<button class="tt-tool" data-tool="${t.id}"><span class="ic">${t.ic}</span>${t.label}</button>`).join('')}</div>`;
  document.body.appendChild(root);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  const stage = root.querySelector('.tt-ed-stage');
  const canvas = stage.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const optsBar = root.querySelector('.tt-ed-opts');
  const layoutPanel = root.querySelector('.tt-ed-layout');

  /* ---- geometry ---- */
  let dpr = 1, cw = 0, ch = 0, view = null; // view: {vx,vy,vw,vh (image px), s, ox, oy}
  function crop(){ return p.crop || { x:0, y:0, w:1, h:1 }; }
  function computeView(){
    const full = st.tool === 'crop';
    const c = crop();
    const vx = full ? 0 : c.x*W, vy = full ? 0 : c.y*H, vw = full ? W : c.w*W, vh = full ? H : c.h*H;
    const pad = 14;
    const s = Math.min((cw - pad*2)/vw, (ch - pad*2)/vh);
    view = { vx, vy, vw, vh, s, ox: (cw - vw*s)/2, oy: (ch - vh*s)/2 };
  }
  const sx = nx => (nx*W - view.vx)*view.s + view.ox;
  const sy = ny => (ny*H - view.vy)*view.s + view.oy;
  const nxOf = px => ((px - view.ox)/view.s + view.vx)/W;
  const nyOf = py => ((py - view.oy)/view.s + view.vy)/H;
  function unitPx(){ const c = crop(); return Math.min(c.w*W, c.h*H) * view.s; }

  function resize(){
    const r = stage.getBoundingClientRect();
    dpr = window.devicePixelRatio || 1;
    cw = Math.max(50, r.width); ch = Math.max(50, r.height);
    canvas.width = Math.round(cw*dpr); canvas.height = Math.round(ch*dpr);
    draw();
  }

  /* ---- drawing ---- */
  function draw(){
    computeView();
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,cw,ch);
    ctx.drawImage(img, view.vx, view.vy, view.vw, view.vh, view.ox, view.oy, view.vw*view.s, view.vh*view.s);
    const T = { x:sx, y:sy, u:unitPx(), editor:true };
    ctx.save();
    ctx.beginPath(); ctx.rect(view.ox, view.oy, view.vw*view.s, view.vh*view.s); ctx.clip();
    sortedForDraw(p.annotations).forEach(a=>drawAnnotation(ctx, a, T, img, W, H));
    ctx.restore();
    if(st.tool === 'crop') drawCropOverlay();
    const a = selected();
    if(a && st.tool !== 'crop') drawSelection(a);
  }
  function drawCropOverlay(){
    const c = crop();
    const x = sx(c.x), y = sy(c.y), w = sx(c.x+c.w)-x, h = sy(c.y+c.h)-y;
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,.55)';
    ctx.beginPath(); ctx.rect(view.ox, view.oy, view.vw*view.s, view.vh*view.s); ctx.rect(x, y, w, h); ctx.fill('evenodd');
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.strokeRect(x, y, w, h);
    ctx.strokeStyle = 'rgba(255,255,255,.4)'; ctx.lineWidth = 1;
    for(let i=1;i<3;i++){
      ctx.beginPath(); ctx.moveTo(x + w*i/3, y); ctx.lineTo(x + w*i/3, y+h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y + h*i/3); ctx.lineTo(x+w, y + h*i/3); ctx.stroke();
    }
    ctx.fillStyle = '#fff';
    cropHandles().forEach(hd=>{ ctx.fillRect(hd.x-9, hd.y-9, 18, 18); });
    ctx.restore();
  }
  function cropHandles(){
    const c = crop();
    return [
      { k:'nw', x:sx(c.x), y:sy(c.y) }, { k:'ne', x:sx(c.x+c.w), y:sy(c.y) },
      { k:'sw', x:sx(c.x), y:sy(c.y+c.h) }, { k:'se', x:sx(c.x+c.w), y:sy(c.y+c.h) }
    ];
  }
  function annoHandles(a){
    if(['rect','circle','mask'].includes(a.type)){
      const b = normBox(a);
      return [
        { k:'nw', x:sx(b.x), y:sy(b.y) }, { k:'ne', x:sx(b.x+b.w), y:sy(b.y) },
        { k:'sw', x:sx(b.x), y:sy(b.y+b.h) }, { k:'se', x:sx(b.x+b.w), y:sy(b.y+b.h) }
      ];
    }
    if(a.type === 'arrow') return [ { k:'p1', x:sx(a.x1), y:sy(a.y1) }, { k:'p2', x:sx(a.x2), y:sy(a.y2) } ];
    return [];
  }
  function annoBounds(a){
    if(['rect','circle','mask'].includes(a.type)){ const b = normBox(a); return { x:sx(b.x), y:sy(b.y), w:sx(b.x+b.w)-sx(b.x), h:sy(b.y+b.h)-sy(b.y) }; }
    if(a.type === 'arrow'){ const xs=[sx(a.x1),sx(a.x2)], ys=[sy(a.y1),sy(a.y2)]; return { x:Math.min(...xs), y:Math.min(...ys), w:Math.abs(xs[0]-xs[1]), h:Math.abs(ys[0]-ys[1]) }; }
    if(a.type === 'marker'){ const r = unitPx()*0.042*(a.scale||1); return { x:sx(a.x)-r, y:sy(a.y)-r, w:r*2, h:r*2 }; }
    if(a.type === 'text'){ const bw = a._bw||60, bh = a._bh||24; return { x:sx(a.x)-bw/2, y:sy(a.y)-bh/2, w:bw, h:bh }; }
    if(a.type === 'freehand' && a.pts.length){ const xs=a.pts.map(q=>sx(q[0])), ys=a.pts.map(q=>sy(q[1])); const x=Math.min(...xs), y=Math.min(...ys); return { x, y, w:Math.max(...xs)-x, h:Math.max(...ys)-y }; }
    return { x:0, y:0, w:0, h:0 };
  }
  function drawSelection(a){
    const b = annoBounds(a);
    ctx.save();
    ctx.setLineDash([6,4]); ctx.strokeStyle = '#fff'; ctx.lineWidth = 1.5;
    ctx.strokeRect(b.x-6, b.y-6, b.w+12, b.h+12);
    ctx.setLineDash([]);
    annoHandles(a).forEach(hd=>{
      ctx.beginPath(); ctx.arc(hd.x, hd.y, 10, 0, Math.PI*2);
      ctx.fillStyle = '#fff'; ctx.fill(); ctx.strokeStyle = '#c17a4f'; ctx.lineWidth = 3; ctx.stroke();
    });
    ctx.restore();
  }

  /* ---- hit testing (screen px) ---- */
  function distSeg(px,py,x1,y1,x2,y2){
    const dx=x2-x1, dy=y2-y1, L=dx*dx+dy*dy;
    let t = L ? ((px-x1)*dx+(py-y1)*dy)/L : 0; t = clamp(t,0,1);
    return Math.hypot(px-(x1+t*dx), py-(y1+t*dy));
  }
  function hitAnno(a, px, py){
    const tol = 16;
    if(a.type === 'mask'){ const b = annoBounds(a); return px>=b.x-tol && px<=b.x+b.w+tol && py>=b.y-tol && py<=b.y+b.h+tol; }
    if(a.type === 'rect'){
      const b = annoBounds(a);
      const inOuter = px>=b.x-tol && px<=b.x+b.w+tol && py>=b.y-tol && py<=b.y+b.h+tol;
      const inInner = px>b.x+tol && px<b.x+b.w-tol && py>b.y+tol && py<b.y+b.h-tol;
      return inOuter && !inInner;
    }
    if(a.type === 'circle'){
      const b = annoBounds(a); const rx = Math.max(1,b.w/2), ry = Math.max(1,b.h/2);
      const d = Math.hypot((px-(b.x+rx))/rx, (py-(b.y+ry))/ry);
      return Math.abs(d-1) * Math.min(rx,ry) < tol;
    }
    if(a.type === 'arrow') return distSeg(px,py,sx(a.x1),sy(a.y1),sx(a.x2),sy(a.y2)) < tol;
    if(a.type === 'freehand'){
      for(let i=1;i<a.pts.length;i++) if(distSeg(px,py,sx(a.pts[i-1][0]),sy(a.pts[i-1][1]),sx(a.pts[i][0]),sy(a.pts[i][1])) < tol) return true;
      return a.pts.length===1 && Math.hypot(px-sx(a.pts[0][0]), py-sy(a.pts[0][1])) < tol;
    }
    const b = annoBounds(a);
    return px>=b.x-tol/2 && px<=b.x+b.w+tol/2 && py>=b.y-tol/2 && py<=b.y+b.h+tol/2;
  }
  function topHit(px,py){
    const order = sortedForDraw(p.annotations);
    for(let i=order.length-1;i>=0;i--) if(hitAnno(order[i],px,py)) return order[i];
    return null;
  }
  function selected(){ return p.annotations.find(a=>a.id===st.sel) || null; }

  /* ---- history ---- */
  function snap(){ return JSON.stringify({ crop:p.crop, annotations:p.annotations.map(a=>{ const c = Object.assign({}, a); delete c._bw; delete c._bh; return c; }) }); }
  function pushHist(before){ if(before !== snap()){ st.hist.push(before); if(st.hist.length>60) st.hist.shift(); st.dirty = true; renderOpts(); } }
  function undo(){
    const prev = st.hist.pop(); if(!prev) return;
    const o = JSON.parse(prev); p.crop = o.crop; p.annotations = o.annotations;
    if(!selected()) st.sel = null;
    draw(); renderOpts();
  }

  /* ---- pointer interaction ---- */
  let drag = null;
  function pt(e){ const r = canvas.getBoundingClientRect(); return { x:e.clientX - r.left, y:e.clientY - r.top }; }
  function inImage(nx,ny){ return nx>=0 && nx<=1 && ny>=0 && ny<=1; }
  function nextMarkerN(){ return p.annotations.filter(a=>a.type==='marker').reduce((m,a)=>Math.max(m, a.n||0), 0) + 1; }

  canvas.addEventListener('pointerdown', e=>{
    if(!view) return;
    e.preventDefault();
    canvas.setPointerCapture(e.pointerId);
    const P = pt(e);
    const before = snap();
    const nx = clamp(nxOf(P.x),0,1), ny = clamp(nyOf(P.y),0,1);

    if(st.tool === 'crop'){
      const hd = cropHandles().find(h=>Math.hypot(h.x-P.x, h.y-P.y) < 26);
      if(hd){ drag = { kind:'crop-corner', k:hd.k, before }; return; }
      const a = topHit(P.x,P.y);
      if(a){ drag = { kind:'move', a, lx:nx, ly:ny, before }; return; }
      const c = crop();
      if(nx>=c.x && nx<=c.x+c.w && ny>=c.y && ny<=c.y+c.h){ drag = { kind:'crop-move', lx:nx, ly:ny, before }; return; }
      p.crop = { x:nx, y:ny, w:0.0001, h:0.0001 };
      drag = { kind:'crop-corner', k:'se', fresh:true, ax:nx, ay:ny, before };
      return;
    }

    const sel = selected();
    if(sel){
      const hd = annoHandles(sel).find(h=>Math.hypot(h.x-P.x, h.y-P.y) < 24);
      if(hd){ drag = { kind:'handle', a:sel, k:hd.k, before }; return; }
    }
    const hit = topHit(P.x,P.y);
    if(hit){ st.sel = hit.id; drag = { kind:'move', a:hit, lx:nx, ly:ny, before }; renderOpts(); draw(); return; }

    if(!inImage(nxOf(P.x), nyOf(P.y)) || st.tool === 'move' || st.tool === 'layout'){ st.sel = null; renderOpts(); draw(); return; }

    const base = { id: TT.uuid(), color: st.color, size: st.size };
    let a = null;
    if(st.tool === 'circle' || st.tool === 'rect') a = Object.assign(base, { type:st.tool, x:nx, y:ny, w:0, h:0 });
    else if(st.tool === 'mask') a = Object.assign(base, { type:'mask', mode:st.maskMode, x:nx, y:ny, w:0, h:0 });
    else if(st.tool === 'arrow') a = Object.assign(base, { type:'arrow', x1:nx, y1:ny, x2:nx, y2:ny });
    else if(st.tool === 'freehand') a = Object.assign(base, { type:'freehand', pts:[[nx,ny]] });
    else if(st.tool === 'marker') a = Object.assign(base, { type:'marker', x:nx, y:ny, n:nextMarkerN(), scale:1 });
    else if(st.tool === 'text') a = Object.assign(base, { type:'text', x:nx, y:ny, text:'Label', scale:1 });
    if(!a) return;
    p.annotations.push(a);
    st.sel = a.id;
    drag = { kind:'create', a, sx0:P.x, sy0:P.y, before };
    draw();
  });

  canvas.addEventListener('pointermove', e=>{
    if(!drag) return;
    const P = pt(e);
    const nx = nxOf(P.x), ny = nyOf(P.y);
    const cnx = clamp(nx,0,1), cny = clamp(ny,0,1);
    const a = drag.a;

    if(drag.kind === 'crop-corner'){
      const c = Object.assign({}, crop());
      let x1 = c.x, y1 = c.y, x2 = c.x+c.w, y2 = c.y+c.h;
      if(drag.fresh){ x1 = drag.ax; y1 = drag.ay; x2 = cnx; y2 = cny; }
      else {
        if(drag.k.includes('n')) y1 = cny; if(drag.k.includes('s')) y2 = cny;
        if(drag.k.includes('w')) x1 = cnx; if(drag.k.includes('e')) x2 = cnx;
      }
      let nc = { x:Math.min(x1,x2), y:Math.min(y1,y2), w:Math.abs(x2-x1), h:Math.abs(y2-y1) };
      if(st.aspect !== 'free'){
        const r = st.aspect === 'square' ? 1 : 4/3;          // width / height in pixels
        const wpx = nc.w*W, hpx = nc.h*H;
        if(wpx/hpx > r) nc.w = (hpx*r)/W; else nc.h = (wpx/r)/H;
        if(x2 < x1 || (!drag.fresh && drag.k.includes('w'))) nc.x = Math.max(x1,x2) - nc.w;
        if(y2 < y1 || (!drag.fresh && drag.k.includes('n'))) nc.y = Math.max(y1,y2) - nc.h;
      }
      p.crop = nc;
    }
    else if(drag.kind === 'crop-move'){
      const c = crop();
      const dx = nx - drag.lx, dy = ny - drag.ly;
      p.crop = { x:clamp(c.x+dx, 0, 1-c.w), y:clamp(c.y+dy, 0, 1-c.h), w:c.w, h:c.h };
      drag.lx = nx; drag.ly = ny;
    }
    else if(drag.kind === 'move'){
      const dx = nx - drag.lx, dy = ny - drag.ly;
      if(['rect','circle','mask','marker','text'].includes(a.type)){ a.x += dx; a.y += dy; }
      else if(a.type === 'arrow'){ a.x1 += dx; a.y1 += dy; a.x2 += dx; a.y2 += dy; }
      else if(a.type === 'freehand'){ a.pts.forEach(q=>{ q[0]+=dx; q[1]+=dy; }); }
      drag.lx = nx; drag.ly = ny;
    }
    else if(drag.kind === 'handle'){
      if(a.type === 'arrow'){ if(drag.k==='p1'){ a.x1 = cnx; a.y1 = cny; } else { a.x2 = cnx; a.y2 = cny; } }
      else {
        const b = normBox(a);
        let x1=b.x, y1=b.y, x2=b.x+b.w, y2=b.y+b.h;
        if(drag.k.includes('n')) y1 = cny; if(drag.k.includes('s')) y2 = cny;
        if(drag.k.includes('w')) x1 = cnx; if(drag.k.includes('e')) x2 = cnx;
        a.x = x1; a.y = y1; a.w = x2-x1; a.h = y2-y1;
      }
    }
    else if(drag.kind === 'create'){
      if(['rect','circle','mask'].includes(a.type)){ a.w = cnx - a.x; a.h = cny - a.y; }
      else if(a.type === 'arrow'){ a.x2 = cnx; a.y2 = cny; }
      else if(a.type === 'freehand'){ const last = a.pts[a.pts.length-1]; if(Math.hypot(sx(last[0])-P.x, sy(last[1])-P.y) > 3) a.pts.push([cnx,cny]); }
      else if(a.type === 'marker' || a.type === 'text'){ a.x = cnx; a.y = cny; }
    }
    draw();
  });

  function endDrag(e){
    if(!drag) return;
    const d = drag; drag = null;
    if(d.kind === 'create'){
      const a = d.a; const P = e ? pt(e) : { x:d.sx0, y:d.sy0 };
      const tap = Math.hypot(P.x - d.sx0, P.y - d.sy0) < 10;
      const c = crop(); const u = Math.min(c.w*W, c.h*H);
      if(tap && ['rect','circle','mask'].includes(a.type)){
        const half = 0.14 * u;
        a.x -= half/W; a.y -= half/H; a.w = 2*half/W; a.h = 2*half/H;
      }
      if(tap && a.type === 'arrow'){
        // tapped: point at the tap from the upper-left
        const len = 0.22 * u;
        a.x1 = a.x2 - len/W; a.y1 = a.y2 - len/H;
      }
      if(['rect','circle','mask'].includes(a.type)) Object.assign(a, normBox(a));
    }
    if(d.kind === 'handle' && d.a.type !== 'arrow') Object.assign(d.a, normBox(d.a));
    if(d.kind === 'crop-corner' || d.kind === 'crop-move'){
      const c = crop();
      if(c.w < 0.04 || c.h < 0.04){ p.crop = JSON.parse(d.before).crop; }
      else if(c.x < 0.002 && c.y < 0.002 && c.w > 0.996 && c.h > 0.996){ p.crop = null; }
    }
    pushHist(d.before);
    draw(); renderOpts();
    if(d.kind === 'create' && d.a.type === 'text'){ const inp = optsBar.querySelector('input[data-k=label]'); if(inp){ inp.focus(); inp.select(); } }
  }
  canvas.addEventListener('pointerup', endDrag);
  canvas.addEventListener('pointercancel', ()=>endDrag(null));

  /* ---- option bar (contextual) ---- */
  function colorSwatches(active){
    return TT.COLORS.map(c=>`<button class="tt-sw ${c.hex===active?'on':''}" data-color="${c.hex}" title="${c.name}" aria-label="${c.name}" style="background:${c.hex}"></button>`).join('');
  }
  function sizeSeg(active){
    return `<div class="tt-seg" role="group" aria-label="Line weight">${[1,2,3].map(n=>`<button data-size="${n}" class="${active===n?'on':''}">${['Thin','Med','Thick'][n-1]}</button>`).join('')}</div>`;
  }
  function renderOpts(){
    const a = selected();
    let h = `<button class="tt-ed-btn" data-k="undo" ${st.hist.length?'':'disabled'}>↶ Undo</button><span class="tt-sep"></span>`;
    if(st.tool === 'crop'){
      h += `<div class="tt-seg">${[['free','Free'],['square','Square'],['43','4:3']].map(([k,l])=>`<button data-aspect="${k}" class="${st.aspect===k?'on':''}">${l}</button>`).join('')}</div>
            <button class="tt-ed-btn" data-k="resetcrop">Reset</button>
            <span class="tt-ed-note">${outsideCount() ? outsideCount()+' mark(s) outside the frame — drag them in' : 'Drag corners · drag inside to move'}</span>`;
    } else if(a){
      if(a.type === 'mask'){
        h += `<div class="tt-seg">${[['blur','Blur'],['box','Black box']].map(([k,l])=>`<button data-mask="${k}" class="${a.mode===k?'on':''}">${l}</button>`).join('')}</div>`;
      } else {
        h += colorSwatches(a.color);
        if(['rect','circle','arrow','freehand'].includes(a.type)) h += `<span class="tt-sep"></span>` + sizeSeg(a.size||2);
        if(a.type === 'marker' || a.type === 'text') h += `<span class="tt-sep"></span><div class="tt-seg"><button data-scale="-1">A−</button><button data-scale="1">A+</button></div>`;
        if(a.type === 'marker') h += `<div class="tt-seg"><button data-num="-1">#−</button><button data-num="1">#+</button></div>`;
        if(a.type === 'text') h += `<input type="text" data-k="label" value="${TT.esc(a.text)}" maxlength="60" placeholder="Label text">`;
      }
      h += `<span class="tt-sep"></span><button class="tt-ed-btn" data-k="del">🗑 Delete</button>`;
    } else if(st.tool === 'mask'){
      h += `<div class="tt-seg">${[['blur','Blur'],['box','Black box']].map(([k,l])=>`<button data-mask="${k}" class="${st.maskMode===k?'on':''}">${l}</button>`).join('')}</div>
            <span class="tt-ed-note">Drag over faces, plates, or anything that shouldn’t print</span>`;
    } else if(st.tool === 'move' || st.tool === 'layout'){
      h += `<span class="tt-ed-note">${p.annotations.length ? 'Tap a mark to select, drag to move' : 'Pick a tool below to mark up the photo'}</span>`;
    } else {
      h += colorSwatches(st.color);
      if(['rect','circle','arrow','freehand'].includes(st.tool)) h += `<span class="tt-sep"></span>` + sizeSeg(st.size);
      h += `<span class="tt-ed-note">${{circle:'Drag to draw · tap for a quick circle',rect:'Drag to draw a box',arrow:'Drag from tail to tip · tap to point',text:'Tap to place a label',marker:'Tap to drop the next number',freehand:'Draw with your finger'}[st.tool]||''}</span>`;
    }
    optsBar.innerHTML = h;
    const inp = optsBar.querySelector('input[data-k=label]');
    if(inp){
      inp.addEventListener('focus', ()=>{ inp._before = snap(); });
      inp.addEventListener('input', ()=>{ const s = selected(); if(s){ s.text = inp.value; draw(); } });
      inp.addEventListener('change', ()=>{ pushHist(inp._before || snap()); });
    }
    root.querySelectorAll('.tt-tool').forEach(b=>b.classList.toggle('on', b.dataset.tool === st.tool));
  }
  function outsideCount(){
    const c = crop();
    return p.annotations.filter(a=>{
      const pts = a.type==='arrow' ? [[a.x1,a.y1],[a.x2,a.y2]] : a.type==='freehand' ? a.pts : ['marker','text'].includes(a.type) ? [[a.x,a.y]] : (()=>{ const b=normBox(a); return [[b.x+b.w/2,b.y+b.h/2]]; })();
      return pts.every(q=>q[0]<c.x||q[0]>c.x+c.w||q[1]<c.y||q[1]>c.y+c.h);
    }).length;
  }

  optsBar.addEventListener('click', e=>{
    const b = e.target.closest('button'); if(!b) return;
    const a = selected();
    const before = snap();
    if(b.dataset.k === 'undo'){ undo(); return; }
    if(b.dataset.k === 'del' && a){ p.annotations = p.annotations.filter(x=>x.id!==a.id); st.sel = null; }
    if(b.dataset.k === 'resetcrop'){ p.crop = null; }
    if(b.dataset.aspect){ st.aspect = b.dataset.aspect; applyAspect(); }
    if(b.dataset.color){ st.color = b.dataset.color; if(a) a.color = b.dataset.color; }
    if(b.dataset.size){ const n = +b.dataset.size; st.size = n; if(a) a.size = n; }
    if(b.dataset.mask){ if(a && a.type==='mask') a.mode = b.dataset.mask; else st.maskMode = b.dataset.mask; }
    if(b.dataset.scale && a){ a.scale = clamp((a.scale||1) + (+b.dataset.scale)*0.2, 0.5, 3); }
    if(b.dataset.num && a){ a.n = Math.max(1, (a.n||1) + (+b.dataset.num)); }
    pushHist(before); draw(); renderOpts();
  });
  function applyAspect(){
    if(st.aspect === 'free') return;
    const r = st.aspect === 'square' ? 1 : 4/3;
    const c = crop();
    let wpx = c.w*W, hpx = c.h*H;
    if(wpx/hpx > r) wpx = hpx*r; else hpx = wpx/r;
    const cx = c.x + c.w/2, cy = c.y + c.h/2;
    const nw = wpx/W, nh = hpx/H;
    p.crop = { x:clamp(cx-nw/2,0,1-nw), y:clamp(cy-nh/2,0,1-nh), w:nw, h:nh };
  }

  /* ---- tools ---- */
  root.querySelector('.tt-ed-tools').addEventListener('click', e=>{
    const b = e.target.closest('.tt-tool'); if(!b) return;
    st.tool = b.dataset.tool;
    st.sel = null;
    layoutPanel.hidden = st.tool !== 'layout';
    if(st.tool === 'layout') renderLayout();
    renderOpts();
    requestAnimationFrame(resize);
  });

  /* ---- size & caption panel ---- */
  async function renderLayout(){
    const w = p.printWidthIn || TT.DEFAULT_PRINT_WIDTH_IN;
    layoutPanel.innerHTML = `
      <h4>Print size</h4>
      <label>Width on the page: <span data-k="wval">${w.toFixed(2)}″</span></label>
      <input type="range" min="${TT.MIN_PRINT_WIDTH_IN}" max="${TT.MAX_PRINT_WIDTH_IN}" step="0.25" value="${w}" data-k="width">
      <div class="tt-prev-page" data-k="prev"></div>
      <h4 style="margin-top:16px">Caption</h4>
      <label><input type="checkbox" data-k="capon" ${p.caption.enabled?'checked':''} style="width:20px;height:20px"> Add a caption under this photo</label>
      <input type="text" data-k="captext" value="${TT.esc(p.caption.text)}" placeholder="e.g. Rear door — missing strike plate" ${p.caption.enabled?'':'hidden'}>
      <p style="font-size:12px;color:#4b5563;margin:6px 0 0">Captions print in the client report. Leave off when the finding text already covers this photo.</p>
      ${p.annotations.some(a=>a.type==='mask') ? `<h4 style="margin-top:16px">Masks</h4>
      <p style="font-size:12px;color:#4b5563;margin:0">Masks always print blurred/blacked out. The finding file still holds the original pixels so you can adjust them later — make them permanent if the file itself must not carry what’s underneath.</p>
      <button class="small-btn" data-k="flatten">Make masks permanent</button>` : ''}`;
    const range = layoutPanel.querySelector('[data-k=width]');
    range.addEventListener('input', ()=>{ p.printWidthIn = +range.value; layoutPanel.querySelector('[data-k=wval]').textContent = (+range.value).toFixed(2)+'″'; st.dirty = true; updatePreview(); });
    const capOn = layoutPanel.querySelector('[data-k=capon]'), capText = layoutPanel.querySelector('[data-k=captext]');
    capOn.addEventListener('change', ()=>{ p.caption.enabled = capOn.checked; capText.hidden = !capOn.checked; if(capOn.checked) capText.focus(); st.dirty = true; updatePreview(); });
    capText.addEventListener('input', ()=>{ p.caption.text = capText.value; st.dirty = true; updatePreview(); });
    const fl = layoutPanel.querySelector('[data-k=flatten]');
    if(fl) fl.addEventListener('click', flattenMasks);
    updatePreview();
  }
  let prevUrl = null, prevKey = '';
  async function updatePreview(){
    const box = layoutPanel.querySelector('[data-k=prev]'); if(!box) return;
    const colW = box.clientWidth - 20 || 280;
    const pxPerIn = colW / TT.MAX_PRINT_WIDTH_IN;    // preview of the 6.5″ text column
    const fs = 13.5 * pxPerIn / 96;                   // report body text at the same scale
    const key = snap();
    if(key !== prevKey){ prevUrl = await TT.renderPhotoDataURL(p, 600, 0.8); prevKey = key; }
    const sample = (opts.sampleText || 'Finding text appears here in the report at this scale, so you can judge whether the photo reads well next to it.').slice(0, 320);
    box.innerHTML = `
      <p class="lbl" style="font-size:${fs*0.78}px">Vulnerability</p>
      <p style="font-size:${fs}px;line-height:1.6">${TT.esc(sample)}</p>
      <figure style="margin:6px 0 0"><img src="${prevUrl}" style="width:${(p.printWidthIn*pxPerIn).toFixed(1)}px">
      ${p.caption.enabled && p.caption.text ? `<figcaption style="font-size:${fs*0.93}px">${TT.esc(p.caption.text)}</figcaption>` : ''}</figure>
      <p style="font-size:${fs*0.8}px;color:#4b5563;margin-top:6px">Preview of the report page column (6.5″ wide)</p>`;
  }
  async function flattenMasks(){
    if(!confirm('Burn the masks into the photo? This can’t be undone after you save.')) return;
    const keep = p.annotations.filter(a=>a.type!=='mask');
    const masksOnly = Object.assign({}, p, { crop:null, annotations:p.annotations.filter(a=>a.type==='mask') });
    // blur strength follows the current crop so it matches what was on screen
    const c = crop(); const u = Math.min(c.w*W, c.h*H);
    const canvasFull = document.createElement('canvas'); canvasFull.width = W; canvasFull.height = H;
    const fctx = canvasFull.getContext('2d'); fctx.drawImage(img, 0, 0);
    const T = { x:nx=>nx*W, y:ny=>ny*H, u };
    masksOnly.annotations.forEach(a=>drawAnnotation(fctx, a, T, img, W, H));
    p.dataUrl = canvasFull.toDataURL('image/jpeg', 0.9);
    p.annotations = keep;
    img = await TT.loadImage(p.dataUrl); W = img.naturalWidth; H = img.naturalHeight;
    st.hist = []; st.dirty = true; st.sel = null;
    draw(); renderOpts(); renderLayout();
    TT.toast('Masks are now part of the photo');
  }

  /* ---- keyboard (desktop) ---- */
  function onKey(e){
    if(e.target && e.target.tagName === 'INPUT') return;
    if((e.key === 'Delete' || e.key === 'Backspace') && selected()){ const before = snap(); p.annotations = p.annotations.filter(x=>x.id!==st.sel); st.sel = null; pushHist(before); draw(); renderOpts(); e.preventDefault(); }
    if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'z'){ undo(); e.preventDefault(); }
    if(e.key === 'Escape'){ st.sel = null; draw(); renderOpts(); }
  }
  document.addEventListener('keydown', onKey);

  /* ---- close ---- */
  const ro = new ResizeObserver(()=>resize());
  ro.observe(stage);
  function close(){
    ro.disconnect();
    document.removeEventListener('keydown', onKey);
    document.body.style.overflow = prevOverflow;
    root.remove();
  }
  root.querySelector('[data-k=cancel]').addEventListener('click', ()=>{
    if(st.dirty && !confirm('Discard your changes to this photo?')) return;
    close(); opts.onCancel && opts.onCancel();
  });
  root.querySelector('[data-k=save]').addEventListener('click', ()=>{
    p.annotations.forEach(a=>{ delete a._bw; delete a._bh; });
    close(); opts.onSave && opts.onSave(p);
  });

  if(opts.startTool){ st.tool = opts.startTool; layoutPanel.hidden = st.tool !== 'layout'; if(st.tool==='layout') renderLayout(); }
  renderOpts();
  requestAnimationFrame(resize);
};

})();
