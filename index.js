import { type, Serve } from "bun";
import { readFileSync } from "fs";

Bun.serve({
  port: 3000,
  hostname: "",
  fetch(req) {
    const url = new URL(req.url);
    let response;


    // 404 page
    response = new Response(Bun.file("./src/HTML/404.html"));

    if (url.pathname === "/") {
      console.log("Starting Index page");
      response = new Response(Bun.file("./src/HTML/index.html"));
    }

    if (url.pathname === "/download") {
      console.log("Starting Download page");
      response = new Response(Bun.file("./src/HTML/download.html"));
    }

    
    
    
    // --------------------------------

    // Packs
    if (url.pathname === "/packs/PVPRed" ) {
      console.log("Packing PVPRed");
      response = Response(Bun.file("./Src/Assets/Packs/TeaClientPVPRed.zip"))
    }

    // Social links
    if (url.pathname === "/discord") {
      console.log("Discord Redirecting");
      response = Response.redirect("https://discord.gg/teaclient");
    }

    // --------------------------------

    // Required files for html
    if (url.pathname.startsWith("/Assets/")) {
      response = new Response(Bun.file("./Src" + url.pathname), {});
    }

    if (url.pathname.startsWith("/CSS/")) {
      response = new Response(Bun.file("./Src" + url.pathname), {});
    }

    if (url.pathname.startsWith("/JS/")) {
      response = new Response(Bun.file("./Src" + url.pathname), {});
    }

    // Returning Response
    return response;
  },
});
