const body = document.querySelector("body");
const navbar = document.querySelector(".navbar"),
      menu_bar = document.getElementById("menu-bar");
const search_icon = document.getElementById("search-icon"),
      search_form = document.getElementById("search-form"),
      close_search = document.getElementById("close");

menu_bar.addEventListener("click", () => {
  navbar.classList.toggle("active");
  if(menu_bar.classList.contains("fa-bars")) {
    menu_bar.classList.remove("fa-bars");
    menu_bar.classList.add("fa-times");
  }
  else {
    menu_bar.classList.remove("fa-times");
    menu_bar.classList.add("fa-bars");
  }
});
let section = document.querySelectorAll("section"),
    navLinks = document.querySelectorAll("header .navbar a");
window.addEventListener("scroll", () => {
  menu_bar.classList.remove("fa-times");
  menu_bar.classList.add("fa-bars");
  navbar.classList.remove("active");

  section.forEach(sec => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 100;
    let secId = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header .navbar a[href*="+secId+"]").classList.add("active");
      });
    };
  });
});
search_icon.addEventListener("click", () => {
  search_form.classList.toggle("active");
  body.classList.toggle("searchFormAppear");
});
close_search.onclick = function () {
  search_icon.click();
};
// swipper slide
var swiper = new Swiper(".pannel-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// loader
window.addEventListener("load", () => {
  setInterval(() => {
    document.querySelector(".loader-container").classList.add("fade-out");
  }, 3000);
});