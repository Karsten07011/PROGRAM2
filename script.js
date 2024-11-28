let guess = Math.floor(Math.random() * 10) + 1;
console.log(guess);

function guessNumber() {
    let number = parseInt(document.getElementById("number").value);
    let result = document.getElementById("result");
    if (number < guess) {
        result.textContent = "te laag!";
    } else if (number > guess) {
        result.textContent = "te hoog!";
    } else {
        result.textContent = "je hebt het nummer geraden!";
        document.getElementById("number").disabled = true;
        document.querySelector("button").disabled = true;
    }
}
