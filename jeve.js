https://teachablemachine.withgoogle.com/models/DZbUxZBd6/
function Start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/DZbUxZBd6/model.json",modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}