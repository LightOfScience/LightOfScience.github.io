/* full screen intro - START */
let autoHeightIntro = function()
{`                          `0000000000000000
    let screenHeight = screen.height;
    let navHeight = document.getElementById('header').clientHeight;
    let introHeight = (screenHeight - navHeight);

    let intro = document.getElementById('intro');
    console.log(introHeight);
    intro.style.height = ((introHeight)+"px;");
}
/* full screen intro - END */

/* Hamber Menu Toggle Action -START */
let NavStatus = false;

let toggleNav = function()
{
    let NavMenu = document.querySelector(".navmenu");

    if (NavStatus === false)
    {
        NavMenu.style.visibility = "visible";
        NavMenu.style.height = "auto";
        NavMenu.style.opacity = "1";
        NavStatus = true;
    }
    else if (NavStatus === true)
    {
        NavMenu.style.visibility = "";
        NavMenu.style.height = "0";
        NavMenu.style.opacity = "";
        NavStatus = false;
    }
}
/* Hamber Menu Toggle Action -END */
let Visibility = false;

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



/* jssor slider javascript - start*/
jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: 1,
      $SlideWidth: 800,
      $ArrowNavigatorOptions: {
        $Class: $JssorArrowNavigator$
      },
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1000;

    function ScaleSlider() {
        var containerElement = jssor_1_slider.$Elmt.parentNode;
        var containerWidth = containerElement.clientWidth;

        if (containerWidth) {

            var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

            jssor_1_slider.$ScaleWidth(expectedWidth);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }

    ScaleSlider();

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});
/* jssor slider javascript - end*/