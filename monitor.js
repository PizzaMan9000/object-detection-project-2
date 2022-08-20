monitor = "";
status = false;

function preload() {

    monitor = LoadImage("monitor.jpg");
}

function setup() {

    canvas = createCanvas(500, 600);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {

    console.log("Model has been loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {

        console.log(error);
    } else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 500, 600);
}