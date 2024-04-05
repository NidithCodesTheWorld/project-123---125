leftWristX = "";
rightWristX = "";

function setup(){

    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(100, 150)

    canvas = createCanvas(500, 500);
    canvas.position(690, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses)

}

function modelLoaded(){

console.log("poseNet is initialized...");

}

function getPoses(results){

if(results.length > 0){

console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
sizeOfText = floor(leftWristX - rightWristX);

console.log("leftWristX = " + leftWristX)

document.getElementById("fontSize").innerHTML = sizeOfText + "px";

console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX);

}

}

function draw(){

background('#6C91C2');
textSize(sizeOfText);
fill("#FFE787");
text("Nidith", 50, 400);

}
