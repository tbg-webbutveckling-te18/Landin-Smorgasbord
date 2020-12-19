var cities = ["Paris", "Seattle", "Moscow", "Ottawa"]

var forResult = document.getElementById('forResult');
var whileResult = document.getElementById('whileResult')
var btnResult = document.getElementsByClassName('btnResult')[0];

btnResult.addEventListener('click', function() {
    for (var i = 0; i < cities.length; i++) {
        forResult.innerHTML += 'Result from for-loop: ' + cities[i] + '<br>';
    }

    var j = 0;

    while (j < cities.length) {
        whileResult.innerHTML += 'Result from while-loop: ' + cities[j] + '<br>';
        j++;
    }
})