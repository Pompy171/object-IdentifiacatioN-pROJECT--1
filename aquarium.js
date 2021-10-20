status=false;
img="";

function preload(){
    img=loadImage("aquarium.jpg");
}

function setup(){
    canvas=createCanvas(630,420);
    canvas.center();

    object_detector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}


function draw(){
    image(img,0,0,630,420);
}


function modelLoaded(){
    console.log("MODEL LOADED");

    status=true;
    object_detector.detect(img,gotResult);
    
}

function gotResult(error,results){

    if (error==true){
        console.error(error);
    }

    else{
        console.log(results);
    }
}

function back(){
    window.location="index.html";
}
