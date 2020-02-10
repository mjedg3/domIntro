const redSquare = document.getElementById("redSquare");
const button1 = document.getElementById("button1");
const D = document.getElementsByTagName("h1");
const word = document.getElementById("word");
const image = document.getElementById("image");
const button2 = document.getElementById("button2");
const inputBox = document.getElementById("inputBox");

button1.addEventListener("click", () => {
  D[1].style.color = "#21618C";
  D[3].style.color = "#21618C";
  word.textContent = "World";
});

for (i = 0; i < 4; i++) {
  D[i].style.color = "#cc0000";
}

button2.addEventListener("click", () => {
  redSquare.style.backgroundColor = inputBox.value;
});

image.addEventListener("mouseover", () => {
  image.src =
    "julius-drost-dS-q7-zkD9c-unsplash.jpg";
});
