
function reset() {
    res.value = ""
}

function addDigit() {
    if (res.value == "0") {
        res.value = ""
    }
    res.value += event.target.innerText
}
function calc() {
    x = eval(res.value)
    console.log(x)
    res.value = eval(res.value)
}
function removecharcter() {
    res.value = res.value.slice(0, -1);
}