Bun.serve({
  port: 3000,
  fetch(req) {

    // Home page
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response(Bun.file("./Src/HTML/index.html"), {
        headers: {
          "Content-Type": "text/html, charset=UTF-8",
        },
      });
    } else if (url.pathname.startsWith("/CSS/")) {
      return new Response(Bun.file("./Src" + url.pathname), {
        headers: {
          "Content-Type": "text/css",
        },
      });
    } else {
      return new Response("Not Found", { status: 404 });
    }

  },
});
