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
let section = document.querySelectorAll("section");
let sectionWithId = [];
for (sec of section) {
  if (sec.hasAttribute("id")) {
    sectionWithId.push(sec);
  }
}

const options = {
  threshold: .4,
}
function checkHeight(entries) {
 
  entries.forEach(entry => {
    if(entry.isIntersecting){
    let visibleSection = entry.target.getAttribute("data-index");
    console.log(visibleSection)
    for (menuItem of menuItems) {
     
      menuItem.classList.remove("active");
      menuItems[visibleSection].classList.add("active");
    }}
  })
};





let observer = new IntersectionObserver(checkHeight, options);
sectionWithId.forEach(el => { observer.observe(el) });

// disabling active class adding  by scroll on mobiledevices

document.addEventListener("DOMContentLoaded", function () {
  const arrayFromSection = [...section];
  //   const offsets = [];
  for (el of arrayFromSection) {
    let value = el.offsetTop;
    offsets.push(value);
  }
  //   console.log(offsets);
});
if (window.innerWidth <= 800) {
  document.addEventListener("scroll", function () {
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
  document.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
      menu.classList.add("active");
    } else {
      menu.classList.remove("active");
    }
  });
}

/*add active class to menu by click */
// for (menuItem of menuItems) {
//   if(menuItem.classList.contains("facebook-icon")||menuItem.classList.contains("twitter-icon")){
//     menuItem.classList.remove("active");
//   }else{
//    menuItem.addEventListener("click", function() {
//     menuItems.forEach(el => el.classList.remove("active"));
//     this.classList.add("active");
//   });
// }
// }






// burger-nav-button
burger.addEventListener("click", function () {
  const burgerItems = document.querySelectorAll(".burger-item");

  for (burgerItem of burgerItems) {
    burgerItem.classList.toggle("active");
  }
  menu.classList.toggle("active");
});
