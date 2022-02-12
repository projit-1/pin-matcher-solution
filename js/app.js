function getPin() {
    const pin = Math.round(Math.random() * 100000)
    const pinString = pin + "";
    if (pinString.length == 5) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById("type-numbers");

    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = " ";
        }
    } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }

});

function varifyPin() {
    const pin = document.getElementById("display-pin").value;
    const typeNumbers = document.getElementById("type-numbers").value;

    const notifySuccess = document.getElementById("notify-success");
    const notifyfail = document.getElementById("notify-fail");
    if (pin == typeNumbers) {
        notifySuccess.style.display = "block";
        notifyfail.style.display = "none";
    } else {
        notifyfail.style.display = "block";
        notifySuccess.style.display = "none";
    }
}

