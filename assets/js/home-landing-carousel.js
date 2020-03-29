var headerHeight = document.getElementById("header").scrollHeight;
var screenHeight = window.innerHeight;
var homeLandingCarouselHeight = screenHeight - headerHeight;
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile == false)
{
    document.getElementById("home-landing-carousel-wrapper").setAttribute("style", "height:"+homeLandingCarouselHeight+"px;");
}

// Control

var img = 0;
var move;
var screenWidth = document.documentElement.clientWidth;
var slider = document.getElementById("home-landing-carousel-img-container");
var leftBtn = document.getElementById("move-left");
var rightBtn = document.getElementById("move-right");

function slideLeft()
{
    img = img - 1;
    if (img == -1) { img = 2; }
    var move = img * screenWidth;
    slider.setAttribute("style", "transform:translateX(-"+move+"px);");
    imgIndexColor(img);
}
function slideRight()
{
    img = img + 1;
    if (img == 3) { img = 0; }
    var move = img * screenWidth;
    slider.setAttribute("style", "transform:translateX(-"+move+"px);");
    imgIndexColor(img);
}

function imgIndexColor(img)
{
    if (img == 0) 
    {
        document.getElementById("img-selector-btn-1").setAttribute("style", "color:white;")
        document.getElementById("img-selector-btn-2").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
        document.getElementById("img-selector-btn-3").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
    }
    if (img == 1) 
    {
        document.getElementById("img-selector-btn-1").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
        document.getElementById("img-selector-btn-2").setAttribute("style", "color:white;")
        document.getElementById("img-selector-btn-3").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
    }
    if (img == 2) 
    {
        document.getElementById("img-selector-btn-1").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
        document.getElementById("img-selector-btn-2").setAttribute("style", "color:rgba(255, 255, 255, 0.2);")
        document.getElementById("img-selector-btn-3").setAttribute("style", "color:white;")
    }
}

leftBtn.addEventListener("click", slideLeft)
rightBtn.addEventListener("click", slideRight)

console.log("carousel ran successfully");

