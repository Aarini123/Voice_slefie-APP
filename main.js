var SpeechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult= function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();
    }
}

function speak(){
    var synth= window.speechSynthesis;
    var text_box="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(text_box);
synth.speak(utterThis);
Webcam.attach(camera);
 setTimeout(function(){
     take_snapshot();
     save()
 },5000);
}

camera= document.getElementById("camera");
Webcam.set({
    width:360,
    height:360,
    image_format:'jpeg',
    jpeg_quality:99
});

function take_snapshot(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML='<img id="selfie_1" src="'+data+'">';
    });
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_1").src;
    link.href=image;
    link.click();
}