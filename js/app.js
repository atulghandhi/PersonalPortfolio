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
const navbarList = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll('section');
const sectionTitles = document.getElementsByClassName('section__title');
let containerCount = document.getElementsByClassName("landing__container").length;

let counter = 0;
for(const section of sectionsList) {
    const link = document.createElement('a');

    link.href = `#section${counter+1}`
    link.textContent = sectionTitles.item(counter).textContent;
    link.className = 'navBarItem';

    navbarList.appendChild(link);
    counter = counter+1;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Add class 'active' to section when near top of viewport
function checkIfSectionInView() {
    let isInViewport = function(elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top <= 50 &&
            bounding.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    for (let i = 1; i < containerCount + 1; i++) {
        let sectionInFullView = document.getElementById("section" + i);

        window.addEventListener(
            "scroll",
            function(event) {
                if (isInViewport(sectionInFullView)) {
                    sectionInFullView.classList.add("your-active-class");
                } else {
                    sectionInFullView.classList.remove("your-active-class");
                }
            },
            false
        );
    }
}
checkIfSectionInView();
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


