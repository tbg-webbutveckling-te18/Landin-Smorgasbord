for(var i = 0; i <= 10; i++) {
    document.writeln('Count is: ' + i + '<br>');
}

document.writeln('---------------------------------------<br>');

// Increment by 2 or more
for(var count =  1; count < 13; count += 2) {
    document.writeln('Count is: ' + count + '<br>')
}
document.writeln('---------------------------------------<br>');

var str = 'Hello World!';
// document.writeln(str[0]);
for(var i = 0; i < str.length; i++) {
    document.writeln(str[i]);
}

document.writeln('<br>---------------------------------------<br>');

var codeArr = ['CSS', 'HTML', 'JS', 17, true]; 
var len = codeArr.length;
for(var i = 0; i < len; i++) {
    document.writeln('Language: ' + codeArr[i] + '<br>');
}

document.writeln('---------------------------------------<br>');

// == means equal to 12 == "12"
// === means equal to AND CHECK IF SAME DATA TYPE 12 === "12"
for(var i = 1; i < 366; i++) {
    if(i % 2 == 0) {
        document.writeln('Even dates: ' + i + '<br>');
    }
}

// Exercise 3 
document.writeln('---------------------------------------<br>');

for(var i = -10; i < 20; i++) {
    document.writeln(i)
}
document.writeln('<br>---------------------------------------<br>');

// Exercise 4

for(var i = 10; i < 41; i++) {
    if(i % 2 == 0) {
        document.writeln('Even numbers: ' + i + '<br>');
    }
}
document.writeln('---------------------------------------<br>');

// Exercise 5 

for(var i = 300; i < 334; i++) {
    if(i % 2 != 0) {
        document.writeln('Odd numbers: ' + i + '<br>');
    }
}
document.writeln('---------------------------------------<br>');

// Exericse 6 

for(var i = 5; i < 51; i++) {
    if(i % 5 == 0 && i % 3 == 0) {
        document.writeln('Even numbers divided by 5 and 3: ' + i + '<br>')
    }
}
document.writeln('---------------------------------------<br>');

// Exercise 7

for(var i = 0; i < 11; i++) {
    var multiplied = (i * 9)
    document.writeln('Number ' + i + ' multiplied by 9 = ' + multiplied + '<br>')
}
document.writeln('---------------------------------------<br>');

// Nested for loops
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for(var i = 0; i < 5; i++) {
    for( var j = 0; j < 5; j++) {
        document.writeln('*');
    }
    document.writeln('<br>');
}