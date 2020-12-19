var objectResult = document.getElementById('objectResult')
var btnResult = document.getElementsByClassName('btnResult')[0];

var car = {
    brand: 'Dodge',
    model: 'Charger',
    modelyear: '1969',
    color: 'Dark green',
    horsepower: '430HP'
}

btnResult.addEventListener('click', function() {
    objectResult.innerHTML += 'My friend owns a ' + car.brand + ' ' + ' ' + car.model + ' from ' + car.modelyear;
})