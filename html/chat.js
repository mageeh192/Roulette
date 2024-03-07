"use strict";

let sock;


function keyWasPressed(ev){
    if( ev.key === "Enter")
        sendIt();
}

function sendIt(){
    console.log("HEY!")

    //user input element
  //  let elem = document.getElementById("usertext");
  //  let txt = elem.value;
    console.log(result);
    sock.send(result);
    //elem.value="";

}

function gotMessage(event){
    let data = event.data;
    console.log(data);
    let cbox = document.getElementById("chatbox");
    cbox.value += "\n" + data;
}

function main(){
    sock = new WebSocket("ws://"+document.location.host+"/sock");
    sock.addEventListener("open", ()=>{ 
       // document.getElementById("sendbutton").disabled=0
        console.log("SOCK IS OPEN");
    });
    sock.addEventListener("message", gotMessage);

}

main();