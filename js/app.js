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
// Start Global Variables
const scrollBtn = document.getElementsByClassName("backToTop")[0];
const navBar = document.querySelector('.navbar__menu')
const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');
const header = document.querySelector('.page__header');
// End Global Variables


// Start build the nav
function buildNav(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navList.appendChild(navButton);
        scrollBehavior(navButton, section);
    });
    navBar.appendChild(navList);
}
buildNav();

//End build the nav
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
          event.preventDefault();
          window.scrollTo({
              top: section.offsetTop,
              behavior:"smooth"
          });
      });
    }
    function activeSection (){
        const navActive = document.querySelectorAll(".menu__link")
        sections.forEach((section, i)=>{
        const sectionBond = section.getBoundingClientRect();
            if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
                section.classList.add("your-active-class");
                navActive[i].classList.add("active_button");
            } else{
                section.classList.remove("your-active-class");
                navActive[i].classList.remove("active_button");
            }
        })
    }
    // Start of Toggle the NavBar According to User Scroll Activity
    function toggleNavBar(){
        let userScroll;
        header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
        window.clearTimeout( userScroll );
        userScroll = setTimeout(function() {
            header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
        }, 6000);
    }    
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
// End of Toggle the NavBar According to User Scroll Activity


//Start of the Scroll Event to execute the functions of activeSection and toggleNavBar 
window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})
//End of the Scroll Event to execute the functions of activeSection and toggleNavBar 


// Start of GO UP Button
const goUpButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});
// End of GO UP Button
// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
