function startclassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ZDEviALai/model.json",modelloaded);
    classifier.classify(gotResults);
}

function modelloaded(){
    console.log("modal is loaded");

}
function gotResults(error,results){ 
    if (error){
        console.error(error);
    }
    else{

   
    console.log(results);
    
    r=Math.floor(Math.random()*255)+1;
    g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("voice").innerHTML="Detected voice is of-"+results[0].label;
    document.getElementById("voice").style.color="rgb("+r+","+g+","+b+")";

    img=document.getElementById("image");
    if(results[0].label=="Barking"){
        img.src="dog.gif";
        
    }
    else if(results[0].label=="Meowing"){
        img.src="cat-cartoon.gif";
        
    }
    else if(results[0].label=="Roar"){
        img.src="lion.png";}
        else if(results[0].label=="Mooing"){
            img.src="cow.png";}
    else{
        img.src="listen.gif";
    }}}