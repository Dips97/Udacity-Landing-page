/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

//defining global variables
const navigation = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
//building dynamic navigation funtion
function navBuild() {
  let nav = " ";

  for (let section of sections) {
    const sectionID = section.id;
    const sectionNavData = section.dataset.nav;

    nav += `<li><a class="menu__link" href="#${sectionID}">${sectionNavData}</a></li>`;
  }

  //appending the navigation element
  navigation.innerHTML = nav;
}

// Add class 'active' to section when near top of viewport
//getting the largest value that's less or equal to the element
const elementOffset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//removing the 'active' class
const activeClassremover = (section) => {
  section.classList.remove("your-active-class");
};

//adding the 'active' class
const activeClassAdd = (conditional, section) => {
  if (conditional) {
    section.classList.add("your-active-class");
  }
};

//implementing the 'active' status in the section

function activeSection() {
  for (let items of sections) {
    const elementsOffset = elementOffset(items);

    AddClasscondition = () => elementsOffset < 130 && elementsOffset >= -130;

    activeClassremover(items);
    activeClassAdd(AddClasscondition(), items);
  }
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor() {
  navigation.addEventListener("click", function (e) {
    const linkClick = document.querySelector('#'+ e.target.dataset.nav);
    linkClick.scrollIntoView();
  });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
navBuild();

// Scroll to section on link click
scrollToAnchor();

// Set sections as active
//adding the 'active' class scroll event listener
window.addEventListener("scroll", activeSection);
