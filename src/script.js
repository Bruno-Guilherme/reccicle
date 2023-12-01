const menuBtn = document.querySelector(".menu");
const menu = document.querySelector("nav");

menuBtn.addEventListener("click", (e) => {
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});


const aside = document.querySelector("aside");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

aside.addEventListener("click", (e) => {
  modal.style.width = "45%";
  modal.style.height = "90%"
  aside.style.display = "none";
});

close.addEventListener("click", (e) => {
  modal.style.width = "0";
  aside.style.display = "flex";
});