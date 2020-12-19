var btnResult = document.getElementsByClassName('btnResult')[0];
var selectionResult = document.getElementById('selectionResult');

btnResult.addEventListener('click', function() {
    var height = 175
    if (height < 160 ) {
        selectionResult.innerHTML += 'Sorry, you need to be more than 160CM to ride the roller coaster'
    } else {
        selectionResult.innerHTML += 'Welcome aboard the roller coaster'
}
})