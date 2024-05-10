window.addEventListener("DOMContentLoaded", () => {
  // checkPage();
  // console.log(window.innerWidth)
  changeHeaderValue();
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
      navbar.classList.add("navbar-fixed");
    } else {
      navbar.classList.remove("navbar-fixed");
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

// HEADER DYNAMIC CONTENT
const dynamicContents = ["service-1", "service-2", "service-3", "service-4"];

function changeHeaderValue() {
  let i = 0;
  const headerSpan = document.getElementById("header-dynamic-content");

  setInterval(() => {
    setTimeout(() => {
      i = (i + 1) % dynamicContents.length;
      headerSpan.textContent = dynamicContents[i];
      headerSpan.classList.add("span-animation");
    }, 700); // Adjust the timing to match your animation duration
    headerSpan.classList.remove("span-animation");
  }, 1500);
}
// HEADER DYNAMIC CONTENT

$(document).ready(function () {
  $(".testimonials").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
      // Add more responsive settings as needed
    ],
  });
});
