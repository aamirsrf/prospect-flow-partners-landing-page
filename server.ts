import index from "./index.html";

Bun.serve({
  port: 3000,
  routes: {
    "/": index,
  },
  async fetch(req) {
    const url = new URL(req.url);
    const filePath = "." + url.pathname;
    const f = Bun.file(filePath);
    if (await f.exists()) {
      return new Response(f);
    }
    return new Response("Not Found", { status: 404 });
  },
  development: {
    hmr: true,
    console: true,
  },
});

console.log("Server running at http://localhost:3000");
