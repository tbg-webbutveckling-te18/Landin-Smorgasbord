// document.writeln('Blinka lilla stjärna där <br>');
// document.writeln('hur jag undrar var du är <br>');
// document.writeln('Fjärran lockar du min syn <br>');
// document.writeln('lik en diamant i skyn <br>');

// document.writeln('<br>')

// document.writeln('Blinka lilla stjärna där <br>');
// document.writeln('hur jag undrar var du är <br>');
// document.writeln('Fjärran lockar du min syn <br>');
// document.writeln('lik en diamant i skyn <br>');

// document.writeln('<br>')

function twinkle() {
    document.writeln('Blinka lilla stjärna där <br>');
    document.writeln('hur jag undrar var du är <br>');
    document.writeln('Fjärran lockar du min syn <br>');
    document.writeln('lik en diamant i skyn <br>');

    document.writeln('<br>')
}

// twinkle();
// twinkle();

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

document.writeln(kebabToSnake('<br>'+ 'Kebab-På-Spett' + '<br>'))

var p = document.getElementById('scopes');

// declare
function localScope() {
    var localVar = 31;
    p.innerHTML = localVar;
}

// call
localScope();

var globalVar = 'This is a global variable';

p.innerHTML = globalVar;
p.style.fontSize = '20px';
p.style.color = '#639';

function changeGlobalVar() {
    globalVar = 'Ha ha I got a new value now!';
    p.innerHTML = globalVar;
}

changeGlobalVar();

function tricky() {
    var globalVar = 'Am I a local?';
    p.innerHTML = globalVar;
}

tricky();
p.innerHTML = globalVar;

function myTimer() {
    var d = new Date();
    var clock = document.getElementById('clock');
    clock.innerHTML = d.toLocaleTimeString();
}

myTimer();

var seconds = setInterval(myTimer, 1000); 
var btnStopTime = document.getElementsByClassName('stopTime')[0];
var doomsStr = document.getElementById('doomsMessage');

btnStopTime.addEventListener('click', function() {
    clearInterval(seconds)
    doomsStr.innerHTML = 'Ha Ha! Time ded';
    doomsStr.style.transition = 'all 0.4s ease';
    doomsStr.style.fontSize = '60px';
    doomsStr.style.color = 'crimson';

});

var output = document.getElementById('tellFortune');
var btnFortune = document.getElementsByTagName('button')[2];

function tellFortune(job, location, partner, children) {
    output.innerHTML += `You will be a ${job} in ${location} and married to ${partner} and have ${children} kids <br>`;
}

var jobArr = ['Game Designer', 'Web Developer', 'Homeless', 'YouTuber', 'President'];
var locationArr = ['Lycksele', 'Stockholm', 'New York', 'Moscow', 'Kingston'];
var partnerArr = ['Kenneth', 'Leif', 'Susan', 'Michelle', 'Igor'];
var childrenArr = [0, 1, 2, 3, 1.5];

btnFortune.addEventListener('click', function() {
    var randomJob = jobArr[Math.floor(Math.random() * jobArr.length)];
    var randomLocation = locationArr[Math.floor(Math.random() * locationArr.length)];
    var randomPartner = partnerArr[Math.floor(Math.random() * partnerArr.length)];
    var randomChildren = childrenArr[Math.floor(Math.random() * childrenArr.length)];

    tellFortune(randomJob, randomLocation, randomPartner, randomChildren)
});

function calculateDogAge(puppyAge, age) {
    dogAge = puppyAge * 7
    humanAge = Math.round(age / 7) 
    document.writeln(`Your doggie is ${dogAge} years old in dog years! <br> And you, human, are ${humanAge} <br>`)
}

calculateDogAge(2, 17);

function calculateSupply(age, amount) {
    timeLeft = 100 - age
    yearlyConsumption = amount * 365
    totalConsumption = Math.round(yearlyConsumption * timeLeft)
    document.writeln(`You will need ${totalConsumption} bags of popcorn to last you until your time has come`)
}

calculateSupply(17, 2)


