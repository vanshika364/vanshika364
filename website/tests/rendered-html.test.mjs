import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders Vanshika's portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Vanshika Bajaj \| Forward Deployed Engineer<\/title>/i);
  assert.match(html, /Forward Deployed Engineer/);
  assert.match(html, /Machine Learning Engineer/);
  assert.match(html, /Data Scientist/);
  assert.match(html, /Perficient/);
  assert.match(html, /Cornell University/);
  assert.match(html, /Ramdeobaba University/);
  assert.match(html, /Finance/);
  assert.match(html, /Manufacturing/);
  assert.match(html, /Healthcare/);
});

test("does not expose a resume download", async () => {
  const response = await render();
  const html = await response.text();

  assert.doesNotMatch(html, /Vanshika-Bajaj\.pdf/i);
  assert.doesNotMatch(html, /download[^>]*resume|resume[^>]*download/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
