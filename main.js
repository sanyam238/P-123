difference = 0;
leftWristX = 0;
rightWristX = 0;
nose_x = 0;
nose_y = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(650,550);
    
    canvas = createCanvas(540,510);
    canvas.position(800,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);

   
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("left wrist X =  "+leftWristX+" right wrist X = "+rightWristX);

        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose x = "+nose_x+" Nose y = "+nose_y);

        difference = floor(leftWristX-rightWristX);
        console.log("difference = "+difference);
    }
    else{
        console.error(error);
    }
}
 
function draw(){
    background("#C3C8CA");
    textSize(difference);
    fill("blue");
    text("Sanyam is the best",nose_x,nose_y);
}

function modelLoaded(){
console.log("model loaded!")
}
