document.addEventListener("mousemove", (ev) => {
    document.body.style.setProperty("--mousex", ev.clientX+"px");
    document.body.style.setProperty("--mousey", ev.clientY+"px"); 
});