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
    }
}
 
function draw(){}

function modelLoaded(){}
