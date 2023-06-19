window.onload = function(){
 var canvas;
 var ctx;
 var delay = 100; 
 var xcoord = 0;
 var ycoord = 0;

 init();

function init(){
    canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height= 600;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);

     ctx = canvas.getContext("2d");
    refreshCanvas();
   // ctx.fillstyle = "#FF0000";
   // ctx.fillRect(30,30 , 100,50);
}
function refreshCanvas(){
    xcoord += 5;
    ycoord += 5;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillstyle = "#ff0000";
    ctx.fillRect(xcoord , ycoord , 100, 50);
    setTimeout(refreshCanvas,delay);
}

   
}