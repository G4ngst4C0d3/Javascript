let tela = document.getElementById("tela")

let ctx = tela.getContext("2d")

let circle = {

    x : 250,
    y : 350,
    raio : 100,
    inicio : 0,
     fim : 2 * Math.PI,
}


function drawCircle(c){
    ctx.beginPath();
    ctx.strokeStyle = "red";
    
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);
    
    ctx.fill();
    ctx.strokeStyle();
}





setInterval(function(){
    if(circle.fim , 2 * Math.PI){
        circle.fim += 0.7;
        circle.x += 3;
    }
    
    drawCircle(circle)
}, 50);