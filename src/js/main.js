document.write("<br>Farid Aliyev <br>");
debugger
document.write("FrontEnd Development <br>")
debugger
document.write("Garage Academy © 2023 <br>")
debugger

document.getElementById("Hello").innerHTML = "Hallo";
document.getElementById("World").innerHTML = "Welt";
document.getElementById("empty").innerHTML = "HTML bos ola biler amma JS doludu 😎"

function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculateResult() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Həsabat səhvdir!";
    }
}
