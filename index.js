Bun.serve({
  port: 3000,
  hostname: "",
  fetch(req) {
    const url = new URL(req.url);
    let response;

    if (url.pathname === "/") {
      response = new Response(Bun.file("./src/HTML/index.html"));
    }

    if (url.pathname === "/download") {
      console.log("Starting Download page");
      response = new Response(Bun.file("./src/HTML/download.html"));
    }

    if (url.pathname === "/discord") {
      console.log("Discord Redirecting");
      response = Response.redirect("https://discord.gg/teaclient");
    }

    if (url.pathname.startsWith("/Assets/")) {
      response = new Response(Bun.file("./Src" + url.pathname), {});
    }

    if (url.pathname.startsWith("/CSS/")) {
      response = new Response(Bun.file("./Src" + url.pathname), {});
    }


    return response;
  },
});
