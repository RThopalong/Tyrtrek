/* =====================================================================
   Tyrtrek Assessment Write-up engine
   Shared by /assess/facility/ and /assess/residential/. Each page sets
   window.TT_ASSESS = { track, subject, title, builder } and loads its
   library parts (window.TT_LIBS) before this file.

   Flow: Area → Vulnerability → Risk → Mitigation → Review & save.
   Each choice narrows the next list. Saved write-ups are standard
   Tyrtrek findings (shared/finding-kit.js), so they appear in Field
   Capture and import straight into the report builders.
   ===================================================================== */
(function(){
'use strict';
const CFG = window.TT_ASSESS;
const $ = id => document.getElementById(id);
const esc = s => String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const toast = m => (window.TT && TT.toast) ? TT.toast(m) : alert(m);
function lsGet(k, d){ try{ const v = localStorage.getItem(k); return v==null ? d : JSON.parse(v); }catch(e){ return d; } }
function lsSet(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
const KEY = 'tt.assess.' + CFG.track + '.';

/* ---------------- LIBRARY ---------------- */
const LIB = { areas: [], risks: {}, vulns: {}, groups: [] };
(function buildLib(){
  const parts = (window.TT_LIBS || []).filter(p => p.track === CFG.track);
  parts.forEach((p, pi) => {
    const group = p.group || 'Assessment areas';
    if(!LIB.groups.includes(group)) LIB.groups.push(group);
    Object.keys(p.risks || {}).forEach(id => { if(!LIB.risks[id]) LIB.risks[id] = Object.assign({ id }, p.risks[id]); });
    (p.areas || []).forEach(a => {
      let area = LIB.areas.find(x => x.id === a.id);
      if(!area){ area = { id:a.id, name:a.name, category:a.category || a.name, blurb:a.blurb || '', group, subs:[] }; LIB.areas.push(area); }
      (a.subs || []).forEach(s => {
        let sub = area.subs.find(x => x.name === s.name);
        if(!sub){ sub = { name:s.name, vulns:[] }; area.subs.push(sub); }
        (s.vulns || []).forEach(v => {
          if(LIB.vulns[v.id]) return;
          const vv = Object.assign({ risks:[], mits:[] }, v, { areaId: area.id, sub: sub.name });
          sub.vulns.push(vv); LIB.vulns[v.id] = vv;
        });
      });
    });
  });
  LIB.count = Object.keys(LIB.vulns).length;
})();

/* "{subject}" → "the Facility" / "the household"; capitalized at a sentence start. */
function subj(t){
  if(!t) return '';
  const s = CFG.subject, S = s.charAt(0).toUpperCase() + s.slice(1);
  return String(t).replace(/(^|[.!?:]\s+)\{subject\}/g, (m, p) => p + S).replace(/\{subject\}/g, s);
}

/* ---------------- SEARCH ---------------- */
function norm(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9 ]+/g,' '); }
Object.values(LIB.vulns).forEach(v => {
  const area = LIB.areas.find(a => a.id === v.areaId);
  v._title = norm(v.title); v._hay = norm([v.title, v.sub, area && area.name, v.text, v.risk].join(' '));
});
function search(q, areaId){
  const toks = norm(q).split(/\s+/).filter(t => t.length > 1);
  if(!toks.length) return [];
  const out = [];
  Object.values(LIB.vulns).forEach(v => {
    if(areaId && v.areaId !== areaId) return;
    if(!toks.every(t => v._hay.includes(t))) return;
    let score = 0;
    toks.forEach(t => { if(v._title.includes(t)) score += 3; if(norm(v.sub).includes(t)) score += 2; });
    out.push({ v, score });
  });
  out.sort((a,b) => b.score - a.score);
  return out.slice(0, 40).map(x => x.v);
}
function hl(text, q){
  const toks = norm(q).split(/\s+/).filter(t => t.length > 1);
  let h = esc(text);
  toks.forEach(t => { h = h.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
  return h;
}

/* ---------------- RECENTS ---------------- */
function recents(){ return lsGet(KEY+'recent', []).filter(id => LIB.vulns[id]); }
function pushRecent(id){ if(!id) return; const r = recents().filter(x => x !== id); r.unshift(id); lsSet(KEY+'recent', r.slice(0, 12)); }

/* ---------------- STATE ---------------- */
let settings = lsGet(KEY+'settings', { site:'' });
let W = null;   // the write-up being built
function newWork(){
  return { step:'area', areaId:null, subFilter:'', vulnId:null, customVuln:'', riskSel:[], riskCustom:[], mitSel:[], mitCustom:[],
    text:{ vulnerability:'', risk:'', mitigation:'' }, detail:'', followUp:'', priority:'Unrated', photos:[], editingId:null, edited:{} };
}
const STEPS = [
  { id:'area', label:'Area' }, { id:'vuln', label:'Vulnerability' }, { id:'risk', label:'Risk' },
  { id:'mit', label:'Mitigation' }, { id:'review', label:'Review' }
];

/* ---------------- RENDER: SHELL ---------------- */
const root = $('app');
function screen(html){ root.innerHTML = html; window.scrollTo(0,0); }
function stepper(){
  const idx = STEPS.findIndex(s => s.id === W.step);
  return `<nav class="stepper">${STEPS.map((s,i) => `<button class="st ${i===idx?'on':''} ${i<idx?'done':''}" data-go="${s.id}" ${i>idx && !canGo(s.id)?'disabled':''}><span>${i+1}</span><em>${s.label}</em></button>`).join('')}</nav>`;
}
function canGo(step){
  if(step==='area') return true;
  if(step==='vuln') return !!W.areaId;
  if(step==='risk'||step==='mit') return !!(W.vulnId || W.customVuln.trim());
  if(step==='review') return !!(W.vulnId || W.customVuln.trim());
  return false;
}
function bar(title, back){
  return `<header class="bar"><button class="back" data-act="${back||'home'}" aria-label="Back">‹</button>
    <div class="bt"><div class="eyebrow">${esc(CFG.title)}</div><h1>${esc(title)}</h1></div></header>`;
}
function bindCommon(){
  root.querySelectorAll('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go));
  root.querySelectorAll('[data-act="home"]').forEach(b => b.onclick = () => { if(!W || !dirty() || confirm('Leave this write-up? It has not been saved.')) showHome(); });
}
function dirty(){ return W && (W.vulnId || W.customVuln.trim() || W.photos.length || W.editingId); }
function go(step){ if(!canGo(step)) return; W.step = step; if(step==='review') composeIfNeeded(); renderStep(); }
function renderStep(){ ({ area:renderArea, vuln:renderVuln, risk:renderRisk, mit:renderMit, review:renderReview })[W.step](); }

/* ---------------- HOME ---------------- */
async function showHome(){
  W = null;
  let list = [];
  try{ list = (await TT.dbGetAll('findings')).map(TT.normalizeFinding).filter(f => f && f.track === CFG.track); }catch(e){}
  list.sort((a,b) => (b.updatedAt||'').localeCompare(a.updatedAt||''));
  const sites = [...new Set(list.map(f => f.site).filter(Boolean))];
  screen(`
  <header class="bar home"><a class="back" href="../../" aria-label="Tyrtrek home">‹</a>
    <div class="bt"><div class="eyebrow">Tyrtrek Security</div><h1>${esc(CFG.title)}</h1></div></header>
  <main>
    <div class="card">
      <label class="f" for="site">Assessment / site name</label>
      <input type="text" id="site" list="sitelist" value="${esc(settings.site)}" placeholder="${CFG.track==='residential'?'e.g. Smith Residence':'e.g. County Courthouse'}" autocomplete="off">
      <datalist id="sitelist">${sites.map(s=>`<option value="${esc(s)}">`).join('')}</datalist>
      <p class="tiny">Every write-up is tagged with this name so the report builder can pull the right ones.</p>
    </div>
    <button class="big" id="btnNew"><span>＋</span> New write-up</button>
    <p class="libnote">${LIB.count} common vulnerabilities across ${LIB.areas.length} areas · ${Object.keys(LIB.risks).length} risk types</p>

    <div class="list-head"><h2>Write-ups</h2><div class="seg small" id="scope"><button data-s="site" class="${settings.scope!=='all'?'on':''}">This site</button><button data-s="all" class="${settings.scope==='all'?'on':''}">All</button></div></div>
    <div id="flist"></div>
    <div class="send-row" id="sendRow"></div>
    <a class="builder-link" href="${CFG.builder}">Open the report builder →</a>
    <p class="note">Write-ups are saved on this device and appear in <a href="../../capture/">Field Capture</a>, where you can add more photos. The report builder imports them from “From this device’s capture library,” or you can send them as files to another device.</p>
  </main>`);
  $('site').addEventListener('input', () => { settings.site = $('site').value.trim(); lsSet(KEY+'settings', settings); renderList(list); });
  $('btnNew').onclick = () => startNew();
  $('scope').onclick = e => { const b = e.target.closest('button'); if(!b) return; settings.scope = b.dataset.s; lsSet(KEY+'settings', settings); $('scope').querySelectorAll('button').forEach(x=>x.classList.toggle('on', x===b)); renderList(list); };
  renderList(list);
}
function renderList(all){
  const list = settings.scope === 'all' || !settings.site ? all : all.filter(f => (f.site||'') === settings.site);
  const el = $('flist'); if(!el) return;
  if(!list.length){ el.innerHTML = `<div class="empty">${all.length ? 'No write-ups for this site yet.' : 'No write-ups yet. Tap “New write-up” to start.'}</div>`; $('sendRow').innerHTML=''; return; }
  const byCat = {};
  list.forEach(f => { (byCat[f.category || 'Unsorted'] = byCat[f.category || 'Unsorted'] || []).push(f); });
  el.innerHTML = Object.keys(byCat).map(cat => `<div class="grp">${esc(cat)} <span>${byCat[cat].length}</span></div>` + byCat[cat].map(f => `
    <div class="fitem" data-id="${f.id}">
      <div class="fthumb" ${f.photos.length?`data-thumb="${f.id}"`:''}>${f.photos.length?'':'✎'}</div>
      <div class="fbody">
        <div class="fsnip">${esc(f.fields.vulnerability.text.split('\n')[0] || '(no description)')}</div>
        <div class="fmeta"><span class="pill ${f.priority}">${f.priority==='Unrated'?'Unrated':f.priority}</span>${f.site?`<span>${esc(f.site)}</span>`:''}<span>${TT.fmtTime ? TT.fmtTime(f.updatedAt) : ''}</span>${f.photos.length?`<span>📷 ${f.photos.length}</span>`:''}</div>
      </div></div>`).join('')).join('');
  el.querySelectorAll('.fitem').forEach(it => it.onclick = () => openExisting(all.find(f => f.id === it.dataset.id)));
  el.querySelectorAll('[data-thumb]').forEach(async t => { const f = all.find(x => x.id === t.dataset.thumb); try{ const u = await TT.renderThumb(f.photos[0], 160); t.innerHTML = `<img src="${u}" alt="">`; }catch(e){} });
  $('sendRow').innerHTML = `<button class="btn primary" id="btnSendAll">Send ${list.length} write-up${list.length===1?'':'s'}…</button><button class="btn" id="btnCopyAll">Copy as text</button>`;
  $('btnSendAll').onclick = async () => { const r = await TT.shareFindings(list); if(r==='shared'||r==='downloaded'){ const now = new Date().toISOString(); for(const f of list){ f.exportedAt = now; await TT.dbPut('findings', f); } toast(r==='shared'?'Sent.':'Saved as files.'); } };
  $('btnCopyAll').onclick = () => copyText(list.map(f => findingText(f)).join('\n\n— — —\n\n'));
}
function findingText(f){
  return [`[${f.category || 'Unsorted'}]${f.priority!=='Unrated' ? ' Priority: ' + f.priority : ''}`, '',
    'VULNERABILITY', f.fields.vulnerability.text, '', 'RISK', f.fields.risk.text, '', 'MITIGATION', f.fields.mitigation.text].join('\n');
}
async function copyText(t){ try{ await navigator.clipboard.writeText(t); toast('Copied.'); }catch(e){ toast('Could not copy on this device.'); } }

/* ---------------- STEP 1: AREA ---------------- */
function startNew(){ W = newWork(); renderArea(); }
function renderArea(){
  W.step = 'area';
  const rec = recents().slice(0, 6).map(id => LIB.vulns[id]);
  screen(`${bar('Choose the area')}${stepper()}
  <main>
    <div class="searchbox"><input type="search" id="q" placeholder="Search all ${LIB.count} vulnerabilities…" autocomplete="off" enterkeyhint="search"></div>
    <div id="results"></div>
    <div id="browse">
      ${rec.length ? `<div class="grp">Recently used</div><div class="chips">${rec.map(v => `<button class="chip" data-v="${v.id}">${esc(v.title)}</button>`).join('')}</div>` : ''}
      ${LIB.groups.map(g => `<div class="grp">${esc(g)}</div><div class="areas">${LIB.areas.filter(a => a.group === g).map(a => {
        const n = a.subs.reduce((m,s)=>m+s.vulns.length,0);
        return `<button class="area" data-a="${a.id}"><b>${esc(a.name)}</b><small>${esc(a.blurb)}</small><i>${n}</i></button>`; }).join('')}</div>`).join('')}
      <button class="linkish" id="btnSkip">My finding doesn’t fit an area — write it from scratch</button>
    </div>
  </main>`);
  bindCommon();
  root.querySelectorAll('.area').forEach(b => b.onclick = () => { W.areaId = b.dataset.a; W.subFilter = ''; renderVuln(); });
  root.querySelectorAll('.chip[data-v]').forEach(b => b.onclick = () => pickVuln(b.dataset.v));
  $('btnSkip').onclick = () => { W.areaId = null; W.vulnId = null; W.step = 'vuln'; renderCustomVuln(); };
  const q = $('q');
  q.addEventListener('input', () => renderResults(q.value, null));
}
function renderResults(q, areaId){
  const box = $('results'), browse = $('browse');
  if(!q.trim()){ box.innerHTML = ''; browse.classList.remove('hidden'); return; }
  browse.classList.add('hidden');
  const r = search(q, areaId);
  box.innerHTML = r.length ? `<div class="grp">${r.length}${r.length===40?'+':''} match${r.length===1?'':'es'}</div>` + r.map(v => {
    const a = LIB.areas.find(x => x.id === v.areaId);
    return `<button class="vrow" data-v="${v.id}"><span class="crumb">${esc(a.name)} › ${esc(v.sub)}</span><b>${hl(v.title, q)}</b><small>${hl(subj(v.text), q)}</small></button>`;
  }).join('') : `<div class="empty">No match. Try fewer words, or <button class="linkish inline" id="btnWriteQ">write it as your own</button>.</div>`;
  box.querySelectorAll('.vrow').forEach(b => b.onclick = () => pickVuln(b.dataset.v));
  const wq = $('btnWriteQ'); if(wq) wq.onclick = () => { W.customVuln = q.trim(); W.vulnId = null; renderCustomVuln(); };
}

/* ---------------- STEP 2: VULNERABILITY ---------------- */
function renderVuln(){
  if(!W.areaId){ renderCustomVuln(); return; }
  W.step = 'vuln';
  const area = LIB.areas.find(a => a.id === W.areaId);
  const subs = area.subs;
  const shown = W.subFilter ? subs.filter(s => s.name === W.subFilter) : subs;
  const used = new Set(recents());
  screen(`${bar(area.name, 'area')}${stepper()}
  <main>
    <div class="searchbox"><input type="search" id="q" placeholder="Search ${esc(area.name)}…" autocomplete="off"></div>
    <div class="chips scroll" id="subchips"><button class="chip ${!W.subFilter?'on':''}" data-sub="">All</button>${subs.map(s => `<button class="chip ${W.subFilter===s.name?'on':''}" data-sub="${esc(s.name)}">${esc(s.name)} <i>${s.vulns.length}</i></button>`).join('')}</div>
    <div id="results"></div>
    <div id="browse">
      <button class="vrow own" id="btnOwn"><b>＋ Write my own vulnerability</b><small>Start with a blank description for this area.</small></button>
      ${shown.map(s => `<details class="subgrp" ${shown.length<=3 || W.subFilter ? 'open' : ''}><summary>${esc(s.name)} <span>${s.vulns.length}</span></summary>
        ${s.vulns.map(v => `<button class="vrow" data-v="${v.id}">${used.has(v.id)?'<span class="star">Used before</span>':''}<b>${esc(v.title)}</b><small>${esc(subj(v.text))}</small></button>`).join('')}
      </details>`).join('')}
    </div>
  </main>`);
  bindCommon();
  root.querySelector('[data-act="area"]').onclick = () => renderArea();
  $('subchips').querySelectorAll('.chip').forEach(b => b.onclick = () => { W.subFilter = b.dataset.sub; renderVuln(); });
  root.querySelectorAll('.vrow[data-v]').forEach(b => b.onclick = () => pickVuln(b.dataset.v));
  $('btnOwn').onclick = () => { W.vulnId = null; renderCustomVuln(); };
  const q = $('q'); q.addEventListener('input', () => renderResults(q.value, W.areaId));
}
function pickVuln(id){
  const v = LIB.vulns[id]; if(!v) return;
  if(W.vulnId !== id){
    W.vulnId = id; W.areaId = v.areaId; W.customVuln = '';
    // Pre-select the condition-specific risk; the user narrows from there.
    W.riskSel = ['__specific']; W.riskCustom = []; W.mitSel = []; W.mitCustom = []; W.edited = {};
  }
  renderRisk();
}
function renderCustomVuln(){
  W.step = 'vuln';
  const area = LIB.areas.find(a => a.id === W.areaId);
  screen(`${bar(area ? area.name : 'Your own finding', area ? 'vuln-back' : 'area')}${stepper()}
  <main>
    <div class="card">
      ${area ? '' : `<label class="f" for="areaSel">Area</label><select id="areaSel"><option value="">Choose an area…</option>${LIB.areas.map(a=>`<option value="${a.id}" ${W.areaId===a.id?'selected':''}>${esc(a.name)}</option>`).join('')}</select>`}
      <label class="f" for="cv">Describe what you observed</label>
      <textarea id="cv" rows="5" placeholder="Type, or tap the keyboard microphone to dictate.">${esc(W.customVuln)}</textarea>
      <p class="tiny">Write it as a finding: what the condition is and where.</p>
    </div>
    <button class="big" id="btnNext">Next: choose risks</button>
  </main>`);
  bindCommon();
  const back = root.querySelector('[data-act="vuln-back"]'); if(back) back.onclick = () => { W.customVuln = $('cv').value; renderVuln(); };
  const ar = root.querySelector('[data-act="area"]'); if(ar) ar.onclick = () => { W.customVuln = $('cv').value; renderArea(); };
  const sel = $('areaSel'); if(sel) sel.onchange = () => { W.areaId = sel.value || null; };
  $('btnNext').onclick = () => {
    W.customVuln = $('cv').value.trim();
    if(!W.customVuln){ toast('Describe the vulnerability first.'); return; }
    if(!W.areaId){ toast('Choose an area so the finding lands in the right report section.'); return; }
    W.vulnId = null; W.riskSel = []; W.edited = {};
    renderRisk();
  };
}

/* ---------------- STEP 3: RISK ---------------- */
function areaRiskRank(areaId){
  // Risk types used most often in this area, for custom findings and "more risks".
  const c = {};
  const area = LIB.areas.find(a => a.id === areaId);
  if(area) area.subs.forEach(s => s.vulns.forEach(v => v.risks.forEach(r => c[r] = (c[r]||0) + 1)));
  return Object.keys(LIB.risks).sort((a,b) => (c[b]||0) - (c[a]||0));
}
function renderRisk(){
  W.step = 'risk';
  const v = LIB.vulns[W.vulnId];
  const related = v ? v.risks.filter(r => LIB.risks[r]) : areaRiskRank(W.areaId).slice(0, 5);
  const more = Object.keys(LIB.risks).filter(r => !related.includes(r)).sort((a,b) => LIB.risks[a].title.localeCompare(LIB.risks[b].title));
  const row = (id, title, text, tag) => `<label class="opt ${W.riskSel.includes(id)?'on':''}"><input type="checkbox" data-r="${id}" ${W.riskSel.includes(id)?'checked':''}>
    <span><b>${esc(title)}</b>${tag?`<em>${tag}</em>`:''}<small>${esc(subj(text))}</small></span></label>`;
  screen(`${bar('What risk does it pose?', 'vuln')}${stepper()}
  <main>
    ${chosenCard()}
    <p class="lead">Pick every risk that applies. They combine into the Risk section.</p>
    ${v ? `<div class="grp">For this condition</div>${row('__specific', 'Risk from this condition', v.risk, '')}` : ''}
    <div class="grp">${v ? 'Related risks' : 'Common risks in this area'}</div>
    ${related.map(id => row(id, LIB.risks[id].title, LIB.risks[id].text)).join('')}
    <details class="subgrp"><summary>More risk types <span>${more.length}</span></summary>${more.map(id => row(id, LIB.risks[id].title, LIB.risks[id].text)).join('')}</details>
    ${W.riskCustom.map((t,i) => `<div class="custom"><textarea data-rc="${i}" rows="2">${esc(t)}</textarea><button class="x" data-rcx="${i}" aria-label="Remove">×</button></div>`).join('')}
    <button class="linkish" id="btnAddRisk">＋ Add my own risk statement</button>
    <button class="big" id="btnNext">Next: mitigation (${W.riskSel.length + W.riskCustom.filter(t=>t.trim()).length})</button>
  </main>`);
  bindCommon();
  root.querySelector('[data-act="vuln"]').onclick = () => renderVuln();
  root.querySelectorAll('input[data-r]').forEach(cb => cb.onchange = () => {
    const id = cb.dataset.r;
    W.riskSel = cb.checked ? W.riskSel.concat(id) : W.riskSel.filter(x => x !== id);
    cb.closest('.opt').classList.toggle('on', cb.checked); W.edited.risk = false; updateNext();
  });
  root.querySelectorAll('[data-rc]').forEach(t => t.oninput = () => { W.riskCustom[+t.dataset.rc] = t.value; W.edited.risk = false; });
  root.querySelectorAll('[data-rcx]').forEach(b => b.onclick = () => { W.riskCustom.splice(+b.dataset.rcx, 1); renderRisk(); });
  $('btnAddRisk').onclick = () => { W.riskCustom.push(''); renderRisk(); const t = root.querySelector(`[data-rc="${W.riskCustom.length-1}"]`); if(t) t.focus(); };
  $('btnNext').onclick = () => {
    if(!W.riskSel.length && !W.riskCustom.some(t=>t.trim())){ if(!confirm('No risk selected. Continue anyway?')) return; }
    renderMit();
  };
  function updateNext(){ $('btnNext').textContent = `Next: mitigation (${W.riskSel.length + W.riskCustom.filter(t=>t.trim()).length})`; }
}
function chosenCard(){
  const v = LIB.vulns[W.vulnId];
  const area = LIB.areas.find(a => a.id === W.areaId);
  const text = v ? subj(v.text) : W.customVuln;
  return `<div class="chosen"><div class="crumb">${esc(area ? area.name : '')}${v ? ' › ' + esc(v.sub) : ''}</div><b>${esc(v ? v.title : 'Your finding')}</b><small>${esc(text)}</small></div>`;
}

/* ---------------- STEP 4: MITIGATION ----------------
   Suggestions come from both the vulnerability and every selected risk.
   An option suggested by both ranks first. */
function mitOptions(){
  const v = LIB.vulns[W.vulnId];
  const map = new Map();
  const add = (text, src, weight) => {
    const t = subj(text), k = norm(t);
    if(!map.has(k)) map.set(k, { id: 'm' + map.size, text: t, srcs: [], score: 0 });
    const o = map.get(k); if(!o.srcs.includes(src)) o.srcs.push(src); o.score += weight;
  };
  if(v) v.mits.forEach((m, i) => add(m, 'This condition', 10 - i*0.1));
  W.riskSel.filter(r => r !== '__specific').forEach(r => { const R = LIB.risks[r]; if(R) (R.mits||[]).forEach((m,i) => add(m, R.title, 3 - i*0.1)); });
  return [...map.values()].sort((a,b) => b.score - a.score);
}
function renderMit(){
  W.step = 'mit';
  const opts = mitOptions();
  // keep selections stable by text across re-renders
  const selTexts = new Set(W.mitSel);
  if(!W.mitSel.length && LIB.vulns[W.vulnId]) LIB.vulns[W.vulnId].mits.slice(0,2).forEach(m => selTexts.add(subj(m)));
  W.mitSel = [...selTexts].filter(t => opts.some(o => o.text === t));
  const primary = opts.filter(o => o.srcs.includes('This condition'));
  const rest = opts.filter(o => !o.srcs.includes('This condition'));
  const row = o => `<label class="opt ${W.mitSel.includes(o.text)?'on':''}"><input type="checkbox" data-m="${esc(o.text)}" ${W.mitSel.includes(o.text)?'checked':''}>
    <span>${esc(o.text)}<em class="src">${o.srcs.map(esc).join(' · ')}</em></span></label>`;
  screen(`${bar('How can it be reduced?', 'risk')}${stepper()}
  <main>
    ${chosenCard()}
    <p class="lead">Options are drawn from the vulnerability and the risks you picked. Choose the ones to recommend.</p>
    ${primary.length ? `<div class="grp">For this condition</div>${primary.map(row).join('')}` : ''}
    ${rest.length ? `<div class="grp">From the selected risks</div>${rest.slice(0, 8).map(row).join('')}${rest.length > 8 ? `<details class="subgrp"><summary>More options <span>${rest.length-8}</span></summary>${rest.slice(8).map(row).join('')}</details>` : ''}` : ''}
    ${!opts.length ? '<div class="empty">No library suggestions for a custom finding without risks. Add your own below.</div>' : ''}
    ${W.mitCustom.map((t,i) => `<div class="custom"><textarea data-mc="${i}" rows="2">${esc(t)}</textarea><button class="x" data-mcx="${i}" aria-label="Remove">×</button></div>`).join('')}
    <button class="linkish" id="btnAddMit">＋ Add my own mitigation</button>
    <button class="big" id="btnNext">Review write-up</button>
  </main>`);
  bindCommon();
  root.querySelector('[data-act="risk"]').onclick = () => renderRisk();
  root.querySelectorAll('input[data-m]').forEach(cb => cb.onchange = () => {
    const t = cb.dataset.m;
    W.mitSel = cb.checked ? W.mitSel.concat(t) : W.mitSel.filter(x => x !== t);
    cb.closest('.opt').classList.toggle('on', cb.checked); W.edited.mitigation = false;
  });
  root.querySelectorAll('[data-mc]').forEach(t => t.oninput = () => { W.mitCustom[+t.dataset.mc] = t.value; W.edited.mitigation = false; });
  root.querySelectorAll('[data-mcx]').forEach(b => b.onclick = () => { W.mitCustom.splice(+b.dataset.mcx, 1); renderMit(); });
  $('btnAddMit').onclick = () => { W.mitCustom.push(''); renderMit(); const t = root.querySelector(`[data-mc="${W.mitCustom.length-1}"]`); if(t) t.focus(); };
  $('btnNext').onclick = () => { W.step = 'review'; composeIfNeeded(); renderReview(); };
}

/* ---------------- COMPOSE ---------------- */
function composeVuln(){
  const v = LIB.vulns[W.vulnId];
  let t = v ? subj(v.text) : W.customVuln;
  if(W.detail.trim()) t += (t ? ' ' : '') + W.detail.trim().replace(/([^.!?])$/, '$1.');
  return t;
}
function composeRisk(){
  const v = LIB.vulns[W.vulnId];
  const parts = [];
  W.riskSel.forEach(id => {
    if(id === '__specific'){ if(v) parts.push(subj(v.risk)); }
    else if(LIB.risks[id]) parts.push(subj(LIB.risks[id].text));
  });
  W.riskCustom.filter(t => t.trim()).forEach(t => parts.push(t.trim()));
  return parts.join(' ');
}
function composeMit(){
  const items = W.mitSel.concat(W.mitCustom.filter(t => t.trim()).map(t => t.trim()));
  if(!items.length) return '';
  if(items.length === 1) return items[0];
  return items.map(t => '• ' + t).join('\n');
}
function composeIfNeeded(){
  if(!W.edited.vulnerability) W.text.vulnerability = composeVuln();
  if(!W.edited.risk) W.text.risk = composeRisk();
  if(!W.edited.mitigation) W.text.mitigation = composeMit();
}

/* ---------------- STEP 5: REVIEW ---------------- */
function renderReview(){
  W.step = 'review';
  const area = LIB.areas.find(a => a.id === W.areaId);
  const pri = ['Unrated','Low','Medium','High','Critical'];
  screen(`${bar(W.editingId ? 'Edit write-up' : 'Review & save', W.editingId ? 'home' : 'mit')}${W.editingId ? '' : stepper()}
  <main>
    <div class="card meta">
      <div class="crumb">${esc(area ? area.name : 'Unsorted')}${area && area.category !== area.name ? ' · report section: ' + esc(area.category) : ''}</div>
      <label class="f" for="detail">Where / specifics <span class="opt-l">added to the vulnerability</span></label>
      <input type="text" id="detail" value="${esc(W.detail)}" placeholder="e.g. Observed at the east loading dock door." autocomplete="off">
    </div>
    ${['vulnerability','risk','mitigation'].map(k => `
      <div class="card box">
        <div class="boxhead"><label class="f" for="t_${k}">${k.charAt(0).toUpperCase()+k.slice(1)}</label>
          ${W.edited[k] && !W.editingId ? `<button class="mini" data-reset="${k}">Rebuild from picks</button>` : ''}</div>
        <textarea id="t_${k}" rows="${k==='vulnerability'?4:6}">${esc(W.text[k])}</textarea>
      </div>`).join('')}
    <div class="card">
      <label class="f">Priority</label>
      <div class="seg pri" id="pri">${pri.map(p => `<button data-p="${p}" class="${W.priority===p?'on':''} ${p}">${p==='Unrated'?'—':p}</button>`).join('')}</div>
      <label class="f" style="margin-top:14px">Photos</label>
      <div class="photos" id="photos">${W.photos.map((p,i) => `<div class="ph" data-i="${i}"><img data-pi="${i}" alt=""><button class="x" data-px="${i}" aria-label="Remove photo">×</button></div>`).join('')}
        <button class="addph" id="btnCam">📷<small>Camera</small></button><button class="addph" id="btnLib">🖼<small>Library</small></button></div>
      <input type="file" id="fCam" accept="image/*" capture="environment" class="hidden"><input type="file" id="fLib" accept="image/*" multiple class="hidden">
      <p class="tiny">To mark up a photo, save here and open the write-up in Field Capture, or mark it up first in Photo Markup and send it to Field Capture.</p>
      <label class="f" for="fu" style="margin-top:14px">Internal follow-up notes <span class="opt-l">never printed in the report</span></label>
      <textarea id="fu" rows="2">${esc(W.followUp)}</textarea>
    </div>
    <div class="row2">
      <button class="btn" id="btnCopy">Copy text</button>
      ${W.editingId ? '<button class="btn danger" id="btnDel">Delete</button>' : '<button class="btn" id="btnStartOver">Start over</button>'}
    </div>
    <button class="big" id="btnSave">${W.editingId ? 'Save changes' : 'Save write-up'}</button>
    ${W.editingId ? '' : '<button class="linkish" id="btnSaveNext">Save and start another in this area</button>'}
  </main>`);
  bindCommon();
  const back = root.querySelector('[data-act="mit"]'); if(back) back.onclick = () => { readReview(); renderMit(); };
  $('detail').oninput = () => { W.detail = $('detail').value; if(!W.edited.vulnerability){ W.text.vulnerability = composeVuln(); $('t_vulnerability').value = W.text.vulnerability; grow($('t_vulnerability')); } };
  const grow = t => { t.style.height = 'auto'; t.style.height = (t.scrollHeight + 2) + 'px'; };
  ['vulnerability','risk','mitigation'].forEach(k => { const t = $('t_'+k); grow(t); t.oninput = () => { W.text[k] = t.value; W.edited[k] = true; grow(t); }; });
  root.querySelectorAll('[data-reset]').forEach(b => b.onclick = () => { W.edited[b.dataset.reset] = false; composeIfNeeded(); renderReview(); });
  $('pri').onclick = e => { const b = e.target.closest('button'); if(!b) return; W.priority = b.dataset.p; $('pri').querySelectorAll('button').forEach(x => x.classList.toggle('on', x===b)); };
  $('fu').oninput = () => { W.followUp = $('fu').value; };
  $('btnCam').onclick = () => $('fCam').click(); $('btnLib').onclick = () => $('fLib').click();
  const addFiles = async e => {
    const files = [...(e.target.files||[])]; e.target.value = '';
    for(const f of files){ try{ W.photos.push(await TT.fileToPhoto(f)); }catch(err){ toast('Could not read one of those photos.'); } }
    readReview(); renderReview();
  };
  $('fCam').onchange = addFiles; $('fLib').onchange = addFiles;
  root.querySelectorAll('img[data-pi]').forEach(async im => { try{ im.src = await TT.renderThumb(W.photos[+im.dataset.pi], 200); }catch(e){} });
  root.querySelectorAll('[data-px]').forEach(b => b.onclick = () => { readReview(); W.photos.splice(+b.dataset.px, 1); renderReview(); });
  $('btnCopy').onclick = () => { readReview(); copyText(['VULNERABILITY', W.text.vulnerability, '', 'RISK', W.text.risk, '', 'MITIGATION', W.text.mitigation].join('\n')); };
  const so = $('btnStartOver'); if(so) so.onclick = () => { if(confirm('Discard this write-up and start over?')) startNew(); };
  const del = $('btnDel'); if(del) del.onclick = async () => { if(!confirm('Delete this write-up from this device? Copies already sent or imported into a report are not affected.')) return; await TT.dbDelete('findings', W.editingId); toast('Deleted.'); showHome(); };
  $('btnSave').onclick = () => saveWork(false);
  const sn = $('btnSaveNext'); if(sn) sn.onclick = () => saveWork(true);
}
function readReview(){
  ['vulnerability','risk','mitigation'].forEach(k => { const t = $('t_'+k); if(t) W.text[k] = t.value; });
  const d = $('detail'); if(d) W.detail = d.value; const fu = $('fu'); if(fu) W.followUp = fu.value;
}
async function saveWork(another){
  readReview();
  if(!W.text.vulnerability.trim()){ toast('The vulnerability box is empty.'); return; }
  const area = LIB.areas.find(a => a.id === W.areaId);
  let f;
  if(W.editingId){ f = TT.normalizeFinding(await TT.dbGet('findings', W.editingId)) || TT.newFinding({ track: CFG.track }); }
  else f = TT.newFinding({ track: CFG.track, site: settings.site, category: area ? area.category : '' });
  if(!W.editingId){ f.site = settings.site; f.category = area ? area.category : ''; }
  f.fields.vulnerability.text = W.text.vulnerability.trim();
  f.fields.risk.text = W.text.risk.trim();
  f.fields.mitigation.text = W.text.mitigation.trim();
  f.fields.followUp.text = W.followUp.trim();
  f.priority = W.priority;
  f.photos = W.photos;
  f.updatedAt = new Date().toISOString();
  f.libRef = { vulnId: W.vulnId, risks: W.riskSel.filter(r => r !== '__specific') };   // kept for reference; ignored by other tools
  try{ await TT.dbPut('findings', f); }catch(e){ toast('Could not save on this device. Copy the text so it is not lost.'); return; }
  pushRecent(W.vulnId);
  toast(W.editingId ? 'Changes saved.' : 'Write-up saved.');
  if(another){ const a = W.areaId; W = newWork(); W.areaId = a; renderVuln(); }
  else showHome();
}
function openExisting(f){
  if(!f) return;
  W = newWork();
  W.editingId = f.id; W.step = 'review';
  const area = LIB.areas.find(a => a.category === f.category);
  W.areaId = area ? area.id : null;
  W.vulnId = f.libRef && LIB.vulns[f.libRef.vulnId] ? f.libRef.vulnId : null;
  W.text = { vulnerability: f.fields.vulnerability.text, risk: f.fields.risk.text, mitigation: f.fields.mitigation.text };
  W.edited = { vulnerability:true, risk:true, mitigation:true };
  W.followUp = f.fields.followUp.text; W.priority = f.priority; W.photos = f.photos;
  renderReview();
}

/* ---------------- START ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  if(!window.TT || !TT.newFinding){ root.innerHTML = '<main><div class="empty">The shared Tyrtrek tools did not load. Connect once and reload.</div></main>'; return; }
  if(!LIB.count){ root.innerHTML = '<main><div class="empty">The vulnerability library did not load. Connect once and reload.</div></main>'; return; }
  TT.requestPersistentStorage && TT.requestPersistentStorage();
  showHome();
  if('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(()=>{}));
});
})();
