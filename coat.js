
function loading(){
    document.getElementById("discount-popup").style.display= "block";
}


function close_box() {
    document.getElementById("discount-popup").style.display = "none";
}
function closebox() {
    document.getElementById("user-popup").style.display = "none";
}
function user(){
    document.getElementById("user-popup").style.display="block"
}


const bindCarouselEvents = (containerId) => {
    const wrapper = document.getElementById(containerId);
    const btn_left = wrapper.getElementsByClassName('btn-left')[0]
    const btn_right = wrapper.getElementsByClassName('btn-right')[0]
    const content = wrapper.getElementsByClassName('carousel-content')[0]
    const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;
    if (btn_right) {
        btn_right.addEventListener('click', () => {
            content_scoll_left += 224;
            if (content_scoll_left >= content_scroll_width) {
                content_scoll_left = content_scroll_width;
            }
            content.scrollLeft = content_scoll_left;
        });
    }
    if (btn_left) {
        btn_left.addEventListener('click', () => {
            content_scoll_left -= 224;
            content.scrollLeft = content_scoll_left;
        });
    }

    // scroll binding
    content.addEventListener('scroll', () => {
        let scrollLeft = Math.ceil(content.scrollLeft)
        let contentScrollWidth = content.scrollWidth
        let contentWidth = content.clientWidth
        let rightEdge = (contentScrollWidth - contentWidth)
        if (scrollLeft >= rightEdge) {
            btn_right.style.display = "none"
        } else if (scrollLeft < rightEdge) {
            btn_right.style.display = "block"
        }

        if (scrollLeft == 0) {
            btn_left.style.display = "none"
        } else if (scrollLeft > 0) {
            btn_left.style.display = "block"
        }

        content_scoll_left = scrollLeft
    });
}

// javascript for scroll on click
window.addEventListener('DOMContentLoaded', function () {
    bindCarouselEvents('med-related-prod-wrapper')
});





// pic carosel2:
let indexslide = 1;
function plusSlides(n) {
    showslide(indexslide += n);
    }
showslide(indexslide);
function showslide(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { indexslide = 1 }
    if (n < 1) { indexslide = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[indexslide - 1].style.display = "block";
}

