const result = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

function colorpicker(){
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    result.textContent = body.style.background;
}

color1.addEventListener("input", colorpicker);
color2.addEventListener("input", colorpicker);
