window.addEventListener("DOMContentLoaded", () => {
  // checkPage();
  NavbarFixed();
  document
    .getElementById("navbar-toggler-button")
    .addEventListener("click", () => {
      openSideNav();
    });
});


function NavbarFixed() {
  const navbar = document.getElementById("header-menu");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      console.log('scrolled')
      navbar.classList.add("navbar-fixed-top");
      document.getElementById("header-logo").style.width = "70px";
    } else {
      navbar.classList.remove("navbar-fixed-top");
      document.getElementById("header-logo").style.width = "130px";
    }
  });
}

function openSideNav() {
  document
    .getElementById("navbar-toggler-button")
    .children[0].classList.add("toggler-drop-shadow");
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeSideNav() {
  document
    .getElementById("navbar-toggler-button")
    .children[0].classList.remove("toggler-drop-shadow");
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

// SIDEBAR DROPDOWN
window.addEventListener("DOMContentLoaded", () => {
  const dropdownContent = document.getElementById("sidebar-dropdown-content");
  const dropdownbtn = document.getElementById("sidebar-dropdown-btn");
  // console.log(dropdownbtn.children)
  const openDropdown = document.createElement("i");
  openDropdown.classList.add("fa", "fa-angle-double-down");

  const closeDropdown = document.createElement("i");
  closeDropdown.classList.add("fa", "fa-times");

  dropdownbtn.addEventListener("click", () => {
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      dropdownbtn.replaceChild(openDropdown, dropdownbtn.children[0]);
    } else {
      dropdownContent.style.display = "block";
      dropdownbtn.replaceChild(closeDropdown, dropdownbtn.children[0]);
    }
  });

  dropdownContent.style.display = "none";
});
// SIDEBAR DROPDOWN

function checkPage() {
  const currentUrl = window.location.href;
  const lowercaseUrl = currentUrl.toLowerCase();

  if (lowercaseUrl.includes("index.php")) {
    return changeStyle("Home");
  } else if (lowercaseUrl.includes("about.php")) {
    return changeStyle("About");
  } else if (lowercaseUrl.includes("contact.php")) {
    return changeStyle("Contact");
  }
  // else if (lowercaseUrl.includes("mountvilla")) {
  //   // Handle the case when "mountvilla" is present in the URL
  //   const indexAfterMountvilla = lowercaseUrl.indexOf("mountvilla") + "mountvilla".length;
  //   if (indexAfterMountvilla >= lowercaseUrl.length || !/[a-z]/.test(lowercaseUrl[indexAfterMountvilla])) {
  //     // No letters after "mountvilla", set the style for the home page
  //     return changeStyle('Home');
  //   }
  // }

  // If none of the specific cases are matched, set the style for the home page
  // return changeStyle('Home');
}

function changeStyle(name) {
  const navElements = document.querySelectorAll(".nav-hyperlink");

  navElements.forEach((element) => {
    // console.log(element.children[0].textContent)
    if (element.children[0].textContent == name) {
      // console.log(name)
      // Add or remove a class to control the styles
      element.classList.add("active-link");
    } else {
      // Remove the class from other elements
      element.classList.remove("active-link");
    }
  });
}

$(document).ready(function () {
  $(".testimonials").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more responsive settings as needed
    ],
  });
});
