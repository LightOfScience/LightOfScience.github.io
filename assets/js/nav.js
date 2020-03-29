//// Sticky - start
var navYOffset = document.getElementById("nav-bar").offsetTop;
document.getElementById("header").setAttribute("style", "top:-" + navYOffset + "px;");
////// Sticky - end


///// menu button -start

var menuBtn = document.getElementById("menu-icon");
var navMenu = document.getElementById("nav-wrapper");
let status = 0;
function toggleNavMenuVisibility(){
    if(status === 0)
    {
        navMenu.classList.remove('nav-menu-hide');
        navMenu.classList.add('nav-menu-show');
        status = 1;
    }
    else{
        navMenu.classList.remove('nav-menu-show');
        navMenu.classList.add('nav-menu-hide');
        status = 0;
    }
}
menuBtn.addEventListener("click",toggleNavMenuVisibility);