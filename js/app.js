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

/* Back to Top button */
//Getting the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollIntoView({ behavior: "smooth" });
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor() {
  MyNav.addEventListener("click", function (e) {
    e.preventDefault();
    const linkClick = document.querySelector(e.target.getAttribute("href"));
    linkClick.scrollIntoView({ behavior: "smooth" });
  });
}

// Scroll to section on link click with smooth behaviour
scrollToAnchor();
