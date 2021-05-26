var arrowLeft = document.getElementsByClassName('leftArrow')[0];
var arrowRight = document.getElementsByClassName('rightArrow')[0];
var slider = document.getElementsByClassName('profileParent')[0];

arrowLeft.addEventListener('click', function(){
    slider.style.left = '-300px'
})

arrowRight.addEventListener('click', function(){
    slider.style.left = '+300px'
})