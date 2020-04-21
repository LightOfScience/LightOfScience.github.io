const news_slide = document.getElementById("front-page-news-container");
const btn_left = document.getElementById("news-left-btn");
const btn_right = document.getElementById("news-right-btn");

var scrlX = news_slide.scrollWidth / 3;
btn_left.onclick = () => {news_slide.scrollBy({left:-scrlX, behavior:"smooth" });}
btn_right.onclick = () => {news_slide.scrollBy({left:scrlX, behavior:"smooth" });}

var tmpVar = scrlX;
setInterval(() => {
    if(news_slide.scrollLeft == 0){
        tmpVar = scrlX;
    }
    else if(news_slide.scrollLeft == news_slide.scrollLeftMax){
        tmpVar = -scrlX;
    }
    news_slide.scrollBy({left:tmpVar, behavior:"smooth" });

}, 4000); 
