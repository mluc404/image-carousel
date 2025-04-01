import "./styles.css";

const btnForward = document.querySelector("#btnForward");
const btnBack = document.querySelector("#btnBackward");
const cat = document.querySelector("#cat");
const imgs = document.querySelectorAll("img");
const imgsArr = new Array(imgs);
const arr = [];
imgs.forEach((img) => arr.push(img));
const allCircles = document.querySelectorAll(".circle");
let currentTopImg = cat;

const moveNext = (arr) => {
  const indxTop = arr.findIndex(
    (img) => window.getComputedStyle(img).zIndex === "2"
  );
  imgs[indxTop].style.zIndex = 1;
  if (indxTop === arr.length - 1) {
    currentTopImg = imgs[0];
    currentTopImg.style.zIndex = 2;
  } else {
    currentTopImg = imgs[indxTop + 1];
    currentTopImg.style.zIndex = 2;
  }
  // Change coresponding circle color
  checkBtnColor(currentTopImg);
};

const moveBack = (arr) => {
  const indxTop = arr.findIndex(
    (img) => window.getComputedStyle(img).zIndex === "2"
  );
  imgs[indxTop].style.zIndex = 1;
  if (indxTop === 0) {
    currentTopImg = imgs[arr.length - 1];
    currentTopImg.style.zIndex = 2;
  } else {
    currentTopImg = imgs[indxTop - 1];
    currentTopImg.style.zIndex = 2;
  }
  // Change coresponding circle color
  checkBtnColor(currentTopImg);
};

btnForward.addEventListener("click", () => {
  moveNext(arr);
});

btnBack.addEventListener("click", () => {
  moveBack(arr);
});

const btnFunction = (allCircles) => {
  checkBtnColor(currentTopImg);

  allCircles.forEach((circle) => {
    circle.addEventListener("click", (e) => {
      arr.forEach((img) => {
        if (img.id === e.target.classList[1]) {
          img.style.zIndex = 2;
          currentTopImg = img;
        } else {
          img.style.zIndex = 1;
        }
      });
      checkBtnColor(currentTopImg);
    });
  });
};

const checkBtnColor = (currentTopImg) => {
  allCircles.forEach((circle) => {
    if (circle.classList[1] === currentTopImg.id) {
      circle.style.color = "orange";
    } else {
      circle.style.color = "black";
    }
  });
};

btnFunction(allCircles);
