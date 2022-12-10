function preload(){

}

function setup()
{
    canvas = createCanvas(500,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide;
}
function draw(){
    image(video,0,0,500,300)
    rect(30, 20, 55, 55, 10, 10, 10, 10);
    rect(45, 75, 20,200);
    rect(30,230 , 55, 55, 10, 10, 10, 10);
    rect(409, 70, 20,200);
    rect(390,230 , 55, 55, 10, 10, 10, 10);
    rect(390, 20, 55, 55, 10, 10, 10, 10);
    rect(85, 30,305, 20);
    rect(85, 250,305, 20);

}
function take_snapshot()
{
    save('myImage.png');
}