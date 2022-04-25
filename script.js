html {
    const canvas =
    document.getElementById("lienzo");
    const ctx = canvas.getContext("2d");
    canvas.clientWidth = document.body.offsetHeight
    
    const w = canvas.width;
    const h = canvas.height;
    
    ctx.fillStyle = "#000";
    ctx.fillReact(0, 0, w, h);

}

