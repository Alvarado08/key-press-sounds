function playSound(e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!sound) return; //? Stops the function from running altogether
    sound.currentTime = 0; //? Rewind to start
    sound.play();
    key.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== "transform") return; //? Skip if not a transform
    this.classList.remove("playing"); //? "this" is what is getting called against something. in this case, the event listener
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);