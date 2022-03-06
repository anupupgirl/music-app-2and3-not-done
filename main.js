leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

song1 = "";
song2 = "";

function preload() {
  song1 = loadSound("music.mp3");
  song2 = loadSound("Magic! - Rude.mp3");
}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  posenet = ml5.poseNet(video, modleLoaded);
  posenet.on("pose", gotPoses);
}

function draw() {
  image(video, 0, 0, 600, 500);
}

function modleLoaded() {
  console.log("it works");
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log(
      "rightWristX = " + rightWristX + " rightWristY = " + rightWristY
    );
  }
}
