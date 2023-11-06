const NAMES = ["Susan Smith", "Anna Johnson", "Peter Jones", "Bill Anderson"];
const JOBS = ["WEB DEVELOPER", "WEB DESIGNER", "INTERN", "THE BOSS"];
const PRAs = [
  "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
];
const IMAGES = [
  "images/Susan Smith4.jpg",
  "images/Anna Johnson.jpg",
  "images/Peter Jones.jpg",
  "images/Bill Anderson.jpg",
];

function Random() {
  return Math.floor(Math.random() * 4);
}

let img = document.getElementsByTagName("img")[0];
let nameperson = document.getElementsByTagName("h4")[0];
let pra = document.getElementsByTagName("p")[0];
let btn = document.getElementsByTagName("button")[0];
let job = document.getElementsByClassName("job")[0];
let left = document.getElementById("left");
let right = document.getElementById("right");

function Changes(num) {
  img.src = IMAGES[num];
  nameperson.innerHTML = NAMES[num];
  pra.innerHTML = PRAs[num];
  job.innerHTML = JOBS[num];
}

let num = NAMES.indexOf(`${nameperson.innerText}`);

btn.addEventListener("click", () => {
  num = Random();
  Changes(num);
});

left.addEventListener("click", () => {
  num = NAMES.indexOf(`${nameperson.innerText}`) - 1;
  if (num === -1) {
    num = 3;
  }
  Changes(num);
});

right.addEventListener("click", () => {
  num = NAMES.indexOf(`${nameperson.innerText}`) + 1;
  if (num === 4) {
    num = 0;
  }
  Changes(num);
});
