import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/vi") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Vietnamese portfolio route", async () => {
  const response = await render("/vi");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Mình là Kieu Ninh/);
  assert.match(html, /Featured Work/);
  assert.match(html, /CORE CAPABILITIES/);
  assert.match(html, /Làm việc với mình sẽ như thế nào/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/);
});

test("redirects the root route to the English default locale", async () => {
  const response = await render("/");
  assert.equal(response.status, 307);
  assert.equal(new URL(response.headers.get("location")).pathname, "/en");
});

test("server-renders the English portfolio route", async () => {
  const response = await render("/en");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /I’m Kieu Ninh/);
  assert.match(html, /Featured Work/);
  assert.match(html, /CORE CAPABILITIES/);
  assert.match(html, /What It&#x27;s Like Working With Me/);
});
