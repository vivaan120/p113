function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(30,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,50,50,400,300);
    
    stroke(0, 0, 0);
    fill(130, 178, 255);
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(0, 0, 0);
    fill(115, 255, 166);

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);
    
}

function take_snapshot(){
    save("image.png");
}