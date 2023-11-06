let counter = document.getElementById("number");
let btnDec = document.getElementsByClassName("dec")[0];
let btnRes = document.getElementsByClassName("res")[0];
let btnInc = document.getElementsByClassName("inc")[0];

btnDec.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) - 1;
  ChangeNumColor();
});
btnRes.addEventListener("click", () => {
  counter.innerText = 0;
  ChangeNumColor();
});
btnInc.addEventListener("click", () => {
  counter.innerText = parseInt(counter.innerText) + 1;
  ChangeNumColor();
});

function ChangeNumColor() {
  if (parseInt(counter.innerText) === 0) {
    counter.style.color = "black";
  } else if (parseInt(counter.innerText) > 0) {
    counter.style.color = "green";
  } else {
    counter.style.color = "red";
  }
}
