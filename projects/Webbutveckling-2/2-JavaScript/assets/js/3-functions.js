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

function quadrupleMe(x) {
    return 4 * x;
}

var myNumber = quadrupleMe(4);
alert(myNumber);