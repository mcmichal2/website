// const sendButton = document.querySelector("#submit");
// sendButton.addEventListener("click", e => {
//   e.preventDefault();
// });
const menuList = document.querySelector(".menu-items");
const menuItems = menuList.querySelectorAll("a");
const menu = document.querySelector(".main-header>.container");
const burger = document.querySelector(".burger");
const burgerSpan = burger.querySelectorAll("span");
let offsets = [];
section = document.querySelectorAll("section");

// disabling active class adding  by scroll on mobiledevices

document.addEventListener("DOMContentLoaded", function() {
  const arrayFromSection = [...section];
  //   const offsets = [];
  for (el of arrayFromSection) {
    let value = el.offsetTop;
    offsets.push(value);
  }
  //   console.log(offsets);
});
if (window.innerWidth <= 800) {
  document.addEventListener("scroll", function() {
    if (
      (window.scrollY >= offsets[5] && window.scrollY <= offsets[6]) ||
      window.scrollY >= offsets[8]
    ) {
      burgerSpan.forEach(el => el.classList.add("blue"));
    } else {
      burgerSpan.forEach(el => el.classList.remove("blue"));
    }
  });
}

if (window.innerWidth > 800) {
  document.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });
}

for (menuItem of menuItems) {
  menuItem.addEventListener("click", function() {
    menuItems.forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
}

// burger-nav-button
burger.addEventListener("click", function() {
  const burgerItems = document.querySelectorAll(".burger-item");

  for (burgerItem of burgerItems) {
    burgerItem.classList.toggle("active");
  }
  menu.classList.toggle("active");
});
