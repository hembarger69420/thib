function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

    

function draw() {
    image(video, 200, 130, 230, 250);
    fill("red");
    stroke("red");
    circle(60, 60, 80);
    circle(560, 60, 80);
    circle(560, 420, 80);
    circle(60, 420, 80);
    rect(30, 30, 500, 55);
    rect(30, 400, 500, 55);
    rect(30, 30, 55, 430);
    rect(550, 30, 55, 430);
}

function take_snapshot(){
    save('Alex_img.png');
}

