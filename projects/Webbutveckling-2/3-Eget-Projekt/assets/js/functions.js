var btnResult = document.getElementsByClassName('btnResult')[0];
var functionResult = document.getElementById('functionResult');

btnResult.addEventListener('click', function() {
    function multiplier (a, b) {
        functionResult.innerHTML += a + ' * ' + b + ' = ' + a * b
    }

    multiplier(3, 4);
})