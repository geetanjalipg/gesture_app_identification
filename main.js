prediction1 = "";
prediction2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);


function snapshot() {
    Webcam.snap(function (dataURI) {
        document.getElementById("result").innerHTML = "<img id= 'snapshot' src=" + dataURI + ">";
    });




}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GAv76pIhz/model.json', modelloaded);

function modelloaded() {
    console.log("model is loaded ");
}


function check() {
    img = document.getElementById("snapshot");

    classifier.classify(img, gotresults);

}
function gotresults(error, results) {
    if (error) {
        console.error(error);

    }
    else {
        console.log(results);
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        document.getElementById("emotion1").innerHTML = prediction1;
        

        if (prediction1 == "amazing") {
            document.getElementById("emoji1").innerHTML = "&#128076;;";
            
        }
        if (prediction1 == "nice") {
            document.getElementById("emoji1").innerHTML = "&#128077;";
        }
        if (prediction1 == "victory") {
            document.getElementById("emoji1").innerHTML = "&#9996;";
        }
        



    }
}



