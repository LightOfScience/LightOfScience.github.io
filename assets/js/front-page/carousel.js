let show = (slide_id) =>
{
    const slide_btn = document.getElementById(slide_id+"-btn");
    const slide = document.getElementById(slide_id);

    const slide_length = document.getElementById("carousel-slides").childElementCount;

    for(i=1; i<=slide_length; i++){

        if(slide_id !== "slide"+i){
            document.getElementById("slide"+i).classList.remove("slide-show");
            document.getElementById("slide"+i).classList.add("slide-hide");
            document.getElementById("slide"+i+"-btn").classList.remove("slide-btn-active");

        }
        else{
            slide.classList.add("slide-show");
            slide.classList.remove("slide-hide");
            slide_btn.classList.add("slide-btn-active");
        }
    }
}

const slide_length = document.getElementById("carousel-slides").childElementCount;
let slideshow = (i) =>
{
    show("slide"+i)
    if(i==slide_length){
        n=1
    }
    else{
        n = i+1;
    }
    // add logical exp: outof view no exec
    setTimeout(function(){slideshow(n)}, 5000);
}
slideshow(2);