function solution(new_id) {
    let id = new_id;
    id = id.toLowerCase();
    const ban = "~!@#$%^&*()=+[{]}:?,<>/";
    for(let i=0; i<ban.length; i++) {
        const char = ban[i];
        id = id.replaceAll(char, "")
    }
    let dot = ".".repeat(10);
    for(let k=0; k<9; k++) {
        id = id.replaceAll(dot, ".");
        dot = dot.slice(0,-1);
    }
    if(id[0]===".") id=id.slice(1,id.length)
    if(id[id.length-1]===".") id=id.slice(0,id.length-1)
    if(id.length===0) id="a";
    if(id.length >= 16) {
        id=id.slice(0,15);
        if(id[id.length-1]===".") id=id.slice(0,id.length-1)
    }
    if(id.length===2) id+=(id[id.length-1].repeat(1))
    if(id.length===1) id+=(id[id.length-1].repeat(2))

    console.log(id)
    return id;
}