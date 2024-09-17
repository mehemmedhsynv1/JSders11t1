let color = ["red", "blue", "green", "yellow"];
color.splice(2, 0, "white");
color.pop();
color.unshift("purple");
color.shift();
for(let i = 0; i < color.length; i++){
    console.log(color[i]);
}