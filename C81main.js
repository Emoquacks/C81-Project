var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,50,0,2*Math.PI);
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
    var mouse_x=e.clientX;
    var mouse_y=e.clientY;
    console.log("X="+mouse_x)
    console.log("Y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=1.5;
    ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
}