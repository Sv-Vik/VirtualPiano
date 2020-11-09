/*function PressKey(element) {
    console.log("The '" + element.key+"'is pressed.")
}*/


document.addEventListener("keypress", function PressKey(element) {
    if (element.code == "KeyA" || element.code == "KeyS" || element.code == "KeyD" || element.code == "KeyF"
        || element.code == "KeyG" || element.code == "KeyH" || element.code == "KeyJ"
        || element.code == "KeyW" || element.code == "KeyE" || element.code == "KeyT"
        || element.code == "KeyY" || element.code == "KeyU" ) {
        console.log("The '" + element.key+"'is pressed.");
        let audio = new Audio("media/" + element.key + ".mp3");
        audio.play();
    }
    else {
        console.log("Wrong key is pressed!");
    }

});