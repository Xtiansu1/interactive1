const sechand = document.querySelector("[data-second]");


function setlock(){
    console.log("shesh")
    const currentDate = new (Date)
    const seconds = currentDate.getSeconds() /60;
    const minutes = currentDate.getMinutes() + seconds/60;
    const hour = currentDate.getHours();
    console.log(seconds)
    setRotation(sechand, seconds);
    setRotation(minutesHand, minutes);
    setRotation(hourhand, hour);
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation * 360);
}


setInterval(setlock, 1000)