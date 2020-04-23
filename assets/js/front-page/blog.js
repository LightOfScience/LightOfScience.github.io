const blog_slide = document.getElementById("front-page-blog-slides");
const blog_btn_left = document.getElementById("blog-nav-btn-left");
const blog_btn_right = document.getElementById("blog-nav-btn-right");

var blog_scrlX = blog_slide.scrollWidth / 6;
blog_btn_left.onclick = () => {blog_slide.scrollBy({left:-scrlX, behavior:"smooth" });}
blog_btn_right.onclick = () => {blog_slide.scrollBy({left:scrlX, behavior:"smooth" });}

var blog_tmpVar = blog_scrlX;
var y =0;
setInterval(() => {
    if(blog_slide.scrollLeft == 0){
        blog_tmpVar = blog_scrlX;
        y=0;
    }
    else if(y >= blog_slide.scrollWidth-blog_scrlX-2){
        blog_tmpVar = -blog_scrlX;
    }
    blog_slide.scrollBy({left:blog_tmpVar, behavior:"smooth" });
    y = y + blog_scrlX;
}, 3511); 
