var arrowLeft = document.getElementsByClassName('leftArrow')[0];
var arrowRight = document.getElementsByClassName('rightArrow')[0];
var slider = document.getElementsByClassName('profileParent')[0];

var counter = -1000

arrowLeft.addEventListener('click', function(){
    counter += -300

    slider.style.left = counter + 'px'

    if (counter <= -3000) {
        counter = -1000
    }
    console.log(counter)
})

arrowRight.addEventListener('click', function(){
    counter += 300

    slider.style.left = counter + 'px'

    if (counter >= 800) {
        counter = -1000
    }

    console.log(counter)
})
