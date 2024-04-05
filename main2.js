noseX = 0;
noseY = 0;
leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;
sizeOfText = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,150);

    canvas = createCanvas(750,500);
    canvas.position(440,150);

    poseNet = ml5.poseNet(video,modelLoading);
    poseNet.on('pose',gotposes);
}

function draw(){
    background("#5196e3");
    document.getElementById("fontSize").innerHTML = difference + "px";
    fill("#00ff0a");
    text('Nidith',noseX,noseY);
    textSize(difference)
}

function modelLoading(){
    console.log("PoseNet Is Initialized!");
}

function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        difference = floor(leftWrist_x - rightWrist_x);

        console.log("leftWrist_x = "+ leftWrist_x + " rightWrist_x = "+ rightWrist_x);
        console.log('noseX = ' + noseX + ', noseY = ' + noseY);
    }
}