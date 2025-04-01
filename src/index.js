import "./styles.css";

console.log("testing");

let btnForward = document.querySelector("#btnForward");
let dog = document.querySelector("#dog");
let fish = document.querySelector("#fish");
let cat = document.querySelector("#cat");

let imgs = document.querySelectorAll("img");
const imgsArr = new Array(imgs);
console.log(imgs);
console.log(imgsArr);
let arr = [];
imgs.forEach((img) => arr.push(img));

const moveNext = (arr) => {
  let indxTop = arr.findIndex(
    (img) => window.getComputedStyle(img).zIndex === "2"
  );
  console.log(indxTop);

  imgs[indxTop].style.zIndex = 1;

  if (indxTop === 2) {
    imgs[0].style.zIndex = 2;
  } else {
    imgs[indxTop + 1].style.zIndex = 2;
  }
};

const moveBack = (arr) => {
  let indxTop = arr.findIndex(
    (img) => window.getComputedStyle(img).zIndex === "2"
  );
  console.log(indxTop);
  imgs[indxTop].style.zIndex = 1;

  if (indxTop === 0) {
    imgs[2].style.zIndex = 2;
  } else {
    imgs[indxTop - 1].style.zIndex = 2;
  }
};

let clickCount = 0;

btnForward.addEventListener("click", () => {
  moveNext(arr);
  //   console.log(imgs[clickCount]);
  //   const imgToTop = imgs[clickCount];
  //   imgToTop.style.zIndex = 2;
  //   imgs.forEach((img) => {
  //     if (img !== imgs[clickCount]) img.style.zIndex = 1;
  //   });
  //   clickCount++;
  //   if (clickCount === 3) clickCount = 0;
});

const btnBack = document.querySelector("#btnBackward");
let clickCountBack = 2 - 1;
btnBack.addEventListener("click", () => {
  moveBack(arr);
  //   console.log(imgs[clickCountBack]);
  //   const imgToTop = imgs[clickCountBack];
  //   imgToTop.style.zIndex = 2;
  //   imgs.forEach((img) => {
  //     if (img !== imgs[clickCountBack]) img.style.zIndex = 1;
  //   });
  //   clickCountBack--;
  //   if (clickCountBack === -1) clickCountBack = 2;
});
