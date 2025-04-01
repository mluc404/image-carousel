import "./styles.css";

console.log("testing");

let btn = document.querySelector("button");
let dog = document.querySelector("#dog");
let fish = document.querySelector("#fish");
let cat = document.querySelector("#cat");
let imgs = document.querySelectorAll("img");
console.log(imgs);
btn.addEventListener("click", () => {
  imgs.forEach((img) => {
    let currentZ = parseInt(window.getComputedStyle(img).zIndex);
    console.log(currentZ);

    if (currentZ === 3) {
      img.style.zIndex = 1;
    } else if (currentZ === 2) {
      img.style.zIndex = 3;
    } else if (currentZ === 1) {
      img.style.zIndex = 2;
    }
  });
});
