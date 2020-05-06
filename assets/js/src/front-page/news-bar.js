const news_slide = document.getElementById("front-page-news");
const news_btn_left = document.getElementById("news-btn-left");
const news_btn_right = document.getElementById("news-btn-right");

var scrlX = news_slide.scrollWidth / 3;
news_btn_left.onclick = () => {news_slide.scrollBy({left:-scrlX, behavior:"smooth" });}
news_btn_right.onclick = () => {news_slide.scrollBy({left:scrlX, behavior:"smooth" });}

var news_tmpVar = scrlX;
var x =0;
setInterval(() => {
    if(news_slide.scrollLeft == 0){
        news_tmpVar = scrlX;
        x=0;
    }
    else if(x >= news_slide.scrollWidth-scrlX-2){
        news_tmpVar = -scrlX;
    }
    news_slide.scrollBy({left:news_tmpVar, behavior:"smooth" });
    x = x + scrlX;
}, 3989);