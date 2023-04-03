let color = 'Black'
let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');
let draw = false
let mouseX = 0 ;
let mouseY = 0 ;



document.querySelectorAll('.color').forEach((item)=>{
    item.addEventListener('click',changeColor)
})

screen.addEventListener('mousedown',mouseDown)
screen.addEventListener('mousemove',mouseMove)
screen.addEventListener('mouseup',mouseUp)

document.querySelector('.clear').addEventListener('click',clearScreen)

function changeColor(e){
    color = e.target.getAttribute('data-color');
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDown(p){
    draw = true
    mouseX = p.pageX - screen.offsetLeft; 
    mouseY = p.pagey - screen.offsetTop;
    
};
function mouseMove(p){
    if(draw){
        goDraw(p.pageX,p.pageY)
    }
   
};
function mouseUp(){
    draw = false
};

function goDraw(x,y){
    let posX = x - screen.offsetLeft;
    let posY = y- screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.moveTo(mouseX,mouseY);
    ctx.lineTo(posX,posY);
    ctx.closePath();
    ctx.strokeStyle = color;
    ctx.stroke()

    mouseX = posX
    mouseY = posY 
}
function clearScreen(){
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}