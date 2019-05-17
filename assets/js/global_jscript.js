/* ALL VARIABLES - START */

let NavVisibility = false; //used in navigation visibility function; see toggleVisibility()

/* ALL VARIABLES - END */


/* Hamber Menu Toggle Action -START */
function hamIconOpen() 
{
    document.getElementById('ham-menu-open').classList.add('hide'); 
    document.getElementById('ham-menu-open').classList.remove('show');
    document.getElementById('ham-menu-close').classList.remove('hide'); 
    document.getElementById('ham-menu-close').classList.add('show');
    NavVisibility = true;
    document.getElementById('navmenu').classList.add('nav-expand');
    document.getElementById('navmenu').classList.remove('nav-contract');
};

function hamIconClose() { 
    document.getElementById('ham-menu-close').classList.add('hide');
    document.getElementById('ham-menu-close').classList.remove('show');
    document.getElementById('ham-menu-open').classList.remove('hide'); 
    document.getElementById('ham-menu-open').classList.add('show');
    NavVisibility = false;
    document.getElementById('navmenu').classList.add('nav-contract');
    document.getElementById('navmenu').classList.remove('nav-expand');
};
/* Hamber Menu Toggle Action -END */


/* Navigation Menu Visibility - START */

function NavExpand()
{
    document.getElementById('navmenu').classList.add('expand');
    document.getElementById('navmenu').classList.remove('contract');
};

/* Navigation Menu Visibility - END */



let Visibiilty = false;
let toggleVisibility = function()
{
    let element = document.querySelector(".toggle-visibility");
    let elementToggler = document.querySelector(".visibility-toggler");

    if (Visibility === false)
    {
        element.style.visibility = "visible";
        element.style.opacity = "1";
        element.classList.add('slideInRight');
        elementToggler.innerHTML = 'Hide Description';
        Visibility = true;
        
    }
    else if (Visibility === true)
    {
        element.classList.remove('slideInRight');
        element.style.opacity = "0";
        element.style.visibility = "hidden";
        elementToggler.innerHTML = 'Show Description';
        Visibility = false;
    }
}
/* Toggle Visibility */

/* full screen intro - START */
let autoHeightIntro = function()
{
    let screenHeight = window.innerHeight;
    let navHeight = document.getElementById('header').clientHeight;
    let introHeight = (screenHeight - navHeight);

    let intro = document.getElementById('intro');

    intro.style.height = introHeight+"px";
}
/* full screen intro - END */

/* Scroll sticky - START*/
/* Scroll sticky - END*/




/* Scroll to Top Javascript */
$(function(){
 
$(document).on( 'scroll', function(){

if ($(window).scrollTop() > 100) {
$('.scroll-top-wrapper').addClass('show');
} else {
$('.scroll-top-wrapper').removeClass('show');
}
});
 
$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
element = $('body');
offset = element.offset();
offsetTop = offset.top;
$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}
/* Scroll to Top Javascript */