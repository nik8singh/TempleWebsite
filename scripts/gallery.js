let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
$(".prev").click(function(){
    plusSlides(-1);
});
$(".next").click(function(){
    plusSlides(1);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gallery-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}