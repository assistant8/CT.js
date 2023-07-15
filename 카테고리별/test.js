function draw1(h) {
    if(h==0) {
        return;
    }
    console.log("!", h)
    draw1(h-1);
    console.log("?", h)

    for(let i=0; i<h; i++) {
        console.log("*")
    }
    console.log("\n")
}

draw1(5)