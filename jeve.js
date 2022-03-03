function startclassification(){
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
        r=Math.floor(Math.random()*255)-1;
        g=Math.floor(Math.random()*255)-1;
        b=Math.floor(Math.random()*255)-1;
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        img=document.getElementById("animal");
        if(results[0].label=="bark"){
            img.src="dog.jpg";
        }
        if(results[0].label=="roar"){
            img.src="lion.jpg";
        }
        if(results[0].label=="moo"){
            img.src="cow.jpg";
        }
        if(results[0].label=="meow"){
            img.src="cat.jpg";
        }
    }
}