// Greater than
var age = 17
if (age >= 18) {
    console.log('Du får ta körkortet.')
} else {
    console.log('Du får inte ta körkortet.')
}

// If something is equal to
var lesson = 'Web development';
if (lesson == 'History') {
    console.log('We have: ' + lesson)
} else if (lesson == 'Web development') {
    console.log('We have: ' + lesson);
} else {
    console.log('Spare time!');
}

var isSunny = false;
if (isSunny == true) {
    console.log('Put on some shorts today.');
} else {
    console.log('Put on some warm clothes today'); 
}

// Step 1
var d = new Date();
if (d.getHours() < 18) {
    console.log('Good Day!')
} else {
    console.log('Good Ebening!')
}

// Step 2
if (d.getHours() < 10) {
    console.log('Good morning!'); 
} else if (d.getHours() < 18) {
    console.log('Good Day!');
} else {
    console.log('Good Ebening!')
}

// Step 3
if (d.getHours() < 10) {
    if(d.getMonth() > 9 || d.getMonth() < 2) {
        console.log('Go ahead and sleep like a bear!')
    } else {
        console.log('Good morning')
    }
} else if (d.getHours() < 18) {
    console.log('Good Day!');
} else {
    console.log('Good Ebening!')
}

var grade = 'A';
switch(grade) {
    case 'A':
        console.log('Amazing job!');
        break;
    case 'B':
        console.log('Very good job!');
        break;
    case 'C':
        console.log('Great job!');
        break;
    case 'D':
        console.log('Good job!');
        break;
    case 'E':
        console.log('Okey job')
        break;
    case 'F':
        console.log('You did not pass')
        break;

    default:
        console.log('Unkown grade!;')
}

var day = d.getDay();
switch(day) {
    case 0:
        console.log('It is Sunday today')
        break;
    case 1:
        console.log('It is Monday today')
        break;
    case 2:
        console.log('It is Tuesday today')
        break;
    case 3:
        console.log('It is Wednesday today')
        break;
    case 4:
        console.log('It is Thursday today')
        break;
    case 5:
        console.log('It is Friday today')
        break;
    case 6:
        console.log('It is Saturday today')
        break;
}