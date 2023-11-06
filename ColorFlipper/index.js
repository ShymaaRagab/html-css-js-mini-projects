let simpleColor = ["red", "blue", "palevioletred", "pink", "green", "purple"];
let hexColor = [
  "#dd0f0f",
  "#66c9f7",
  "#66c9f7",
  "#b02bc4",
  "#f0dd5c",
  "#ed2020",
];
let defaultcolor = "#f1f5f8";
simpleTitle = "Color Flipper || SIMPLE";
hexTitle = "Color Flipper || HEX";

let simpleButton = document.getElementById("simple");
let hexButton = document.getElementById("hex");
let pageTitle = document.getElementsByTagName("title")[0];
let changeColorButton = document.getElementsByTagName("button")[0];
let background = document.getElementById("background");

simpleButton.onclick = () => {
  pageTitle.innerText = simpleTitle;
  ChangeColor(defaultcolor);
};
hexButton.onclick = () => {
  pageTitle.innerText = hexTitle;
  ChangeColor(defaultcolor);
};

changeColorButton.addEventListener("click", () => {
  let randomInt = Math.floor(Math.random() * 6);
  console.log(randomInt);
  if (pageTitle.innerText == hexTitle) {
    ChangeColor(hexColor[randomInt]);
  } else {
    ChangeColor(simpleColor[randomInt]);
  }
});

function ChangeColor(color) {
  background.innerText = `Background Color: ${color}`;
  document.body.style = `background-color: ${color}`;
  changeColorButton.style = `background-color: ${color}`;
}
