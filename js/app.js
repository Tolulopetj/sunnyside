
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const hamburgerOpen = document.querySelector(".hamburger_icon");
const hamburgerClose = document.querySelector(".icon_menu_close");
const menu = document.querySelector('.mobile-menu');
const hamburgerDiv = document.querySelector(".hamburger_div");

// hamburgerDiv.classList.remove('display')
hamburgerClose.classList.add("display");
menu.classList.add("display");


hamburgerOpen.addEventListener("click", function() {
    menu.classList.remove("display");
    hamburgerOpen.classList.add("display");
    hamburgerClose.classList.remove("display");

})
hamburgerClose.addEventListener("click", function() {
    menu.classList.add("display");
    hamburgerOpen.classList.remove("display");
    hamburgerClose.classList.add("display")
})