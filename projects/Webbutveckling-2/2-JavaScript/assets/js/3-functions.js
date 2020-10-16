document.writeln('Blinka lilla stjärna där <br>');
document.writeln('hur jag undrar var du är <br>');
document.writeln('Fjärran lockar du min syn <br>');
document.writeln('lik en diamant i skyn <br>');

document.writeln('<br>')

document.writeln('Blinka lilla stjärna där <br>');
document.writeln('hur jag undrar var du är <br>');
document.writeln('Fjärran lockar du min syn <br>');
document.writeln('lik en diamant i skyn <br>');

document.writeln('<br>')

function twinkle() {
    document.writeln('Blinka lilla stjärna där <br>');
    document.writeln('hur jag undrar var du är <br>');
    document.writeln('Fjärran lockar du min syn <br>');
    document.writeln('lik en diamant i skyn <br>');

    document.writeln('<br>')
}

twinkle();
twinkle();

function square(num) {
    document.writeln(num * num);
}

square(10);
square(5);
square('A') //NaN

function area(width, height) {
    return width * height;
}

document.writeln('<br> The area is: ' + area(5, 10));

var result = area(6, 9);

document.writeln(result);

function duplicateMe(x) {
    return 2 * x;
}

var myNumber = duplicateMe(3.5);


var btnNumber = document.getElementById('myNumber')
btnNumber.innerHTML = '<strong>My favorite</strong> number is: ' + myNumber;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = 'stockholm';
var capital = capitalize(city);
document.writeln('<br> The capital of Sweden is: ' + capital + '<br>');

// Test 1 
function isEven(x) {
    if (x % 2 == 0) {
        document.writeln('True');
    }
    else {
        document.writeln('False');
    }
}

isEven(10)
isEven(5)
isEven(11)
isEven(12)

// Test 2
function kebabToSnake(kebabString) {
    var snakeString = kebabString.replaceAll('-', '_');
    return snakeString;
}

document.writeln(kebabToSnake('<br>'+ 'Kebab-På-Spett'))
