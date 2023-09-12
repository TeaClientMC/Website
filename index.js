Bun.serve({
  port: 3000,
  hostname: '',
  fetch(req) {

    const url = new URL(req.url);
    let response;
    
    if (url.pathname === "/") {
        console.log('Starting Home page');
        response = new Response(Bun.file("./Src/HTML/index.html"), {
            headers: {
                "Content-Type": "text/html, charset=UTF-8",
            },
        });
    } else if (url.pathname === "/download") {
        console.log('Starting Download page');
        response = new Response(Bun.file("./src/HTML/download.html"), {
            headers: {
                "Content-Type": "text/html, charset=UTF-8",
            },
        });
    } else if (url.pathname === "/discord") {
        console.log('Discord Redirecting');
        response = Response.redirect("https://discord.gg/teaclient");
    } else if (url.pathname.startsWith("/CSS/")) {
        response = new Response(Bun.file("./Src" + url.pathname), {
            headers: {
                "Content-Type": "text/css",
            },
        });
    }
    
    return response;
    





  },
});





function htmlSuupport() {
    if (url.pathname === "/") {
        console.log('Starting Home page');
        response = new Response(Bun.file("./Src/HTML/index.html"), {
            headers: {
                "Content-Type": "text/html, charset=UTF-8",
            },
        });
 }




 return response;
}