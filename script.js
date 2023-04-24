const burgerMenu = document.getElementById("burger");
const mainSite = document.getElementById("mainsite");

// Sidebar Menu Toggle
burgerMenu.addEventListener("click", () => {
  if (mainSite.classList.contains("active")) {
    burgerMenu.classList.remove("active");
    mainSite.classList.remove("active");
  } else {
    burgerMenu.classList.add("active");
    mainSite.classList.add("active");
  }
});

// pages changing
const menuLinks = document.querySelectorAll(".menu-list a");
const submenuItems = document.querySelectorAll(".submenu-item");

menuLinks.forEach((menuItem) => {
  menuItem.addEventListener("click", function (e) {
    let url = menuItem.getAttribute("data-url");

    document.querySelector("#main_page_frame").setAttribute("src", url);

    menuLinks.forEach((item) => {
      item.classList.remove("active");
    });

    // remove active state from submenu items
    submenuItems.forEach((item) => {
      item.classList.remove("active");
    });

    menuItem.classList.add("active");
  });
});

// try {
//     // seach bar code
//     var searchIcon = document.querySelector(".search-icon");
//     var searchBox = document.querySelector(".search-box");
//     var closeIcon = document.querySelector(".close-icon");
//     var searchInput = document.querySelector('.search-input input[type="text"]');
//
//     searchIcon.addEventListener("click", function () {
//       searchBox.classList.add("active");
//       closeIcon.classList.add("active");
//       searchIcon.classList.add("small_screen_hide");
//       searchInput.focus();
//     });
//
//     closeIcon.addEventListener("click", function () {
//       searchBox.classList.remove("active");
//       closeIcon.classList.remove("active");
//       searchIcon.classList.remove("small_screen_hide");
//     });
// } catch (error) {
//     // this will happen when main document is loaded, search icon is only on sub pages..
// }

