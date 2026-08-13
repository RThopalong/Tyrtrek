const COOKIE_NAME = "tyrtrek_auth";
const SESSION_HOURS = 12;

async function hmac(secret, message) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(message));
  return btoa(String.fromCharCode(...new Uint8Array(sig)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

async function makeToken(secret) {
  const expires = Date.now() + SESSION_HOURS * 60 * 60 * 1000;
  const sig = await hmac(secret, String(expires));
  return expires + "." + sig;
}

async function verifyToken(secret, token) {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const expires = parts[0];
  const sig = parts[1];
  if (Number(expires) < Date.now()) return false;
  const expectedSig = await hmac(secret, expires);
  return expectedSig === sig;
}

function loginPage(showError) {
  return "<!DOCTYPE html><html><head><title>Sign in</title>" +
    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">" +
    "<style>" +
    "body{font-family:system-ui,sans-serif;background:#1c1c1c;color:#eee;display:flex;height:100vh;align-items:center;justify-content:center;margin:0}" +
    "form{background:#2a2a2a;padding:2rem;border-radius:8px;width:280px}" +
    "input{width:100%;padding:.6rem;margin:.5rem 0 1rem;border-radius:4px;border:1px solid #444;background:#111;color:#eee;box-sizing:border-box}" +
    "button{width:100%;padding:.6rem;background:#c0703a;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:600}" +
    "p.error{color:#f88}" +
    "h1{font-size:1.1rem;margin-top:0}" +
    "</style></head><body>" +
    "<form method=\"POST\">" +
    "<h1>Enter password to continue</h1>" +
    (showError ? "<p class=\"error\">Incorrect password, try again.</p>" : "") +
    "<input type=\"password\" name=\"password\" autofocus required />" +
    "<button type=\"submit\">Unlock</button>" +
    "</form></body></html>";
}

export default async (request, context) => {
  const secret = Deno.env.get("AUTH_SECRET");
  const password = Deno.env.get("TOOL_PASSWORD");

  if (!secret || !password) {
    return new Response("Auth is misconfigured. Missing environment variables.", { status: 500 });
  }

  const cookieHeader = request.headers.get("cookie") || "";
  const match = cookieHeader.match(new RegExp(COOKIE_NAME + "=([^;]+)"));
  const token = match ? match[1] : null;

  if (await verifyToken(secret, token)) {
    return context.next();
  }

  if (request.method === "POST") {
    const form = await request.formData();
    const submitted = form.get("password");
    if (submitted === password) {
      const newToken = await makeToken(secret);
      const headers = new Headers({ Location: request.url });
      headers.append(
        "Set-Cookie",
        COOKIE_NAME + "=" + newToken + "; Path=/app; HttpOnly; Secure; SameSite=Lax; Max-Age=" + (SESSION_HOURS * 3600)
      );
      return new Response(null, { status: 302, headers });
    }
    return new Response(loginPage(true), {
      status: 401,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }

  return new Response(loginPage(false), {
    status: 401,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
};
