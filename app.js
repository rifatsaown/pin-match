function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function displayPin() {
    const pin = getPin();
    document.getElementById("pin-display").value = pin;
}
document.getElementById("key-pad").addEventListener("click", function (event) {
    const keyClicked = event.target.innerText;
    const typedInput = document.getElementById("typed-number");
    if (isNaN(keyClicked)) {
        if (keyClicked == "C") {
            typedInput.value = "";
        }
        
    } else {
        const newInput = typedInput.value + keyClicked;
        typedInput.value = newInput;
    }
})

function pinMatch() {
    const typedPin= document.getElementById("typed-number").value;
    const pinRandom= document.getElementById("pin-display").value;
    if(typedPin == pinRandom){
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
    }
    else{
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "block";
    }
}