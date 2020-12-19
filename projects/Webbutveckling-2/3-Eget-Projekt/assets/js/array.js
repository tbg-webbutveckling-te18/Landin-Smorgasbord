var food = ["Pizza", "Steak", "Fish N' Chips"]

var btnResult = document.getElementsByClassName('btnResult')[0];
var arrayResult = document.getElementById('arrayResult');

btnResult.addEventListener('click', function() {
    for (var i = 0; i < food.length; i++) {
    arrayResult.innerHTML += food[i] + "<br>"
}
})