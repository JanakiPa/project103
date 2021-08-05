Webcam.set({width: 290, height:300, image_format:'png', png_quality:90});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("image").innerHTML='<img id="img" src="'+data_uri+'">'
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/TOGHnj6qQ/');
model.json;