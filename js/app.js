//creating variable for navigation list
const MyNav = document.querySelector("#navbar__list");

//creating variables to store all section data and global use
const mySections = document.querySelectorAll("section");

//empty variable to store list elements
let navItems = "";

//looping through sections using for loop and storing the values in upper empty variable
for (let item of mySections) {
  const sectionData = item.dataset.nav;
  const sectionIds = item.id;
  navItems += `<li><a class="menu__link" href="#${sectionIds}">${sectionData}</a></li>`;
}

//adding list items(li) to the (ul) tag
MyNav.innerHTML = navItems;

//getting the largest value that's less or equal to the top of viewport
const elementOffset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//'active' class remove function
const activeClassremover = (section) => {
  section.classList.remove("your-active-class");
};

//'active' class add function
const activeClassAdd = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};

//implementing the 'active' status in the section using for..of loop

function activeSection() {
  for (let items of mySections) {
    const elementsOffset = elementOffset(items);

    AddClasscondition = () => elementsOffset < 130 && elementsOffset >= -130;

    activeClassremover(items);
    activeClassAdd(AddClasscondition(), items);
  }
}

//adding the 'active' class scroll event listener
window.addEventListener("scroll", activeSection);

/* Jump to Top button */
const TopBtn = document.getElementById("myBtn");

//calling the function on user Scroll
window.onscroll = function () {
  scrollingFunction();
};

function scrollingFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    TopBtn.style.display = "block";
  } else {
    TopBtn.style.display = "none";
  }
}

// page go up when user click on button with smooth behavior
function topFunction() {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
}

// Scroll to sections
function scrollToAnchor() {
  MyNav.addEventListener("click", function (e) {
    e.preventDefault();
    const linkClick = document.querySelector(e.target.getAttribute("href"));
    linkClick.scrollIntoView({ behavior: "smooth" });
  });
}

// calling scroll function
scrollToAnchor();
