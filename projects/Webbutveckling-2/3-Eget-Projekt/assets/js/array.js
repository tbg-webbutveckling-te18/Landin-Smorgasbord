var food = ["Pizza", "Steak", "Fish N' Chips"]

var i;

for (var i = 0; i < 4; i++) {
    document.getElementById('arrayResult').innerHTML = food[i]
}

var btnResult = document.getElementsByClassName('btnResult')[0];
var arrayResult = document.getElementById('arrayResult');

btnResult.addEventListener('click', function() {
    var i;

    for (var i = 0; i < 4; i++) {
    document.getElementById('arrayResult').innerHTML = food[i]
}
})