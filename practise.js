// Variable:
// var mangoPrice = 60;
// console.log(mangoPrice);

// var applePrice = 120;
// console.log(typeof applePrice);

// var yourName = 'My name is Nadira';
// console.log(typeof yourName);

// var boolType = 50;
// var boolType1 = 70;
// var result = 50 > 70;
// console.log(typeof result);

// var schoolName = 'My School Name is Samas para High School,';
// console.log(schoolName);
// console.log(schoolName.toLowerCase());
// console.log(schoolName.toUpperCase());
// console.log(schoolName.indexOf('School'))
// console.log(schoolName.split('is'));
// console.log(schoolName.split(' '));

// var number = 0.1;
// var number1 = 0.2;

// // var number1 = 25;
// // var number2 = '15.5';
// // number2 =parseInt(number2);
// // number2 = parseFloat(number2);
// // number2 = + number2
// // number1 = ''+ number1
// var result = number + number1;
// result = result.toFixed(1);
// console.log(result);

// var mathNumber = 10;
// var biologyNumber = 3;
// // var total = mathNumber + biologyNumber;
// // var total = mathNumber - biologyNumber;
// // var total = mathNumber * biologyNumber;
// // var total = mathNumber / biologyNumber;
// var total = mathNumber % biologyNumber;
// console.log(total);

// var randomNumber = Math.random() * 10;
// var result = Math.round(randomNumber);
// // var number2 = 5.687;
// // var absoluteNumber = Math.abs(number2);
// // var roundNumber = Math.round(number2);
// // var floorNumber = Math.floor(number2);
// // var ceilNumber = Math.ceil(number2);
// console.log(result);

// var mangoPrice = 60
// if (mangoPrice > 50) {
//     console.log('I Love Mango,')

// } else {
//     console.log('I hate Mango,');
// }

// var applePhone = 100;
// if (applePrice > 200) {
//     console.log('I like IPhone');
// } else {
//     console.log("I Dno't Buy Iphone")
// }

// var date = new Date();
// var today = date.getDay();

// if (today === 0) {
//     console.log('Today is Sunday');
// } else if (today === 1) {
//     console.log('Today is Monday');
// } else if (today === 2) {
//     console.log('Today is Tuesday');
// } else if (today === 3) {
//     console.log('Today is Wednesday');
// } else if (today === 4) {
//     console.log('Today is thursday');
// } else if (today === 5) {
//     console.log('Today is Friday');
// } else if (today === 6) {
//     console.log('Today is Saturday');
// } else {
//     console.log("it's A Good Day");
// }

// // array:
// var tomato = ['Zahurul', 'Islam', 'Nadira', 'Nahi']
// console.log(tomato);
// tomato.pop();
// console.log(tomato);
// tomato.push('Nafi', 'Nirab');
// console.log(tomato);
// var elements = tomato.length;
// console.log(elements);
// tomato.unshift('SM', );
// console.log(tomato);
// tomato.shift('SM')
// console.log(tomato);

// // loop
// for (var i = 0; i < tomato.length; i++) {
//     var sadman = tomato[
//         i];
//     console.log(sadman);
// }

// function sayilove() {
//     console.log('I love Yoy,');
//     console.log('I Love Javascript,');
//     console.log('I Love Web developer,');
//     console.log('I am Javascript Developer,');
// }
// sayilove();

// var date = new Date();
// var today = date.getDay();

// switch (today) {
//     case 0:
//         console.log('Today is Sunday;');
//         break;
//     case 1:
//         console.log('Today is Monday;');
//         break;
//     case 2:
//         console.log('Today is Tuesday;');
//         break;
//     case 3:
//         console.log('Today is Wednesday;');
//         break;
//     case 4:
//         console.log('Today is Thursday;');
//         break;
//     case 5:
//         console.log('Today is Friday;');
//         break;
//     case 6:
//         console.log('Today is Saturday;');
//         break;
//     default:
//         console.log('This number Is Invalid;')

// }

// var price = 100;
// switch (price) {
//     case 80:
//         console.log('Mango;');
//         break;
//     case 70:
//         console.log('Apple;');
//         break;
//     case 85:
//         console.log('Banana;');
//         break;
//     case 95:
//         console.log('Malta;');
//         break;
//     default:
//         console.log('Love hate;')
// }
// // Function Use:
// function gta(num) {
//     var ruselt4 = sports[0];
//     for (var x = 0; x < sports.length; x++) {
//         var element4 = sports[x];
//         if (element4 > ruselt4) {
//             ruselt4 = element4;
//         }
//     }
//     return ruselt4;
// }
// var sports = [10, 20, 30, 40, 50];
// var eit = gta(sports);
// console.log(eit);
// // Leap Year:
// function leapYear(year) {
//     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }

// var year = leapYear(2000);
// console.log(year);

// // itaractive Factorial:
// // For loop
// var fectorial = 1;
// for (let i = 1; i <= 10; i++) {
//     fectorial = fectorial * i;
//     console.log(i, fectorial);
// }
// //Function:
// function fectorial(n) {
//     var fectorial = 1;
//     for (let i = 1; i <= n; i++) {
//         fectorial = fectorial * i;
//     }
//     return fectorial;
// }
// var result = fectorial(5);
// console.log(result);

// // while loop:
// var i = 1;
// while (i <= 7) {
//     console.log(i);
//     i++;
// }

// function fectorial(n) {
//     var i = 1;
//     var fect = 1;
//     while (i <= n) {
//         fect = fect * i;
//         i++;
//     }
//     return fect;
// }
// var result = fectorial(5);
// console.log(result);

//** Object:
// var student = { ID: 121, Phone: 147512345, Class: 'Five', Name: 'Nadira' };
// var student2 = { ID: 123, Phone: 174212356, Class: 'Eight', Name: 'Kanchon' };
// var phoneProNumber = 'Phone';
// var PhoneNumber = student[phoneProNumber];
// var PhoneNumber = student['Phone'];
// var PhoneNumber = student.Phone;
// var studentName = student.Name;
// var studentClass = student2.Class;

// updatwe and change property:
// student.Phone = 555555;
// student['Phone'] = 77777;
// Property Add and Update:
// student.Roll = 2;
// student2.Roll = 1;
// console.log(studentClass);
// console.log(studentName);
// console.log(PhoneNumber);
// console.log(student);
// console.log(student2);

//** Feet to Inch:
// function feetToinch(inch) {
//     let feet = inch / 12;
//     return feet;

// }
// const nanafeet = feetToinch(60);
// console.log(nanafeet);

//** Find Factorial Using Recursion:
//** program to find the factorial of a number
// function factorial(x) {

//     // if number is 0
//     if (x == 0) {
//         return 1;
//     }
//     //if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }
// const result1 = factorial(5);
// console.log(result1);


//** fectorial example's Stackchar:
// 0! =1;
//2! =1*2;
// 3! =1*2*3;
// 4! =1*2*3*4;
// 5! =1*2*3*4*5;
// 6! =1*2*3*4*5*6;
// 7! = 1*2*3*4*5*6*7;
// 8! = 1*2*3*4*5*6*7*8;
// 9! = 1*2*3*4*5*6*7*8*9;

// 5! =(5-1)*5;
// 6! =(6-1)*6;
// 7! =(7-1)*7;


//** Factorial interactive:
//** Factorial For Loop:
// var fac1 = 1;
// for (var k = 1; k <= 5; k++) {
//     fac1 = fac1 * k;
//     console.log(fac1);
// }

// function zahurul() {
//     var fac1 = 1;
//     for (var k = 1; k <= 5; k++) {
//         fac1 = fac1 * k;
//     }
//     return fac1;
// }
// let result = zahurul(5);
// console.log(result);

//** Factorial while Loop:
// var fact2 = 1;
// var i = 1;
// while (i <= 5) {
//     fact2 = fact2 * i;
//     console.log(fact2);
//     i++

// }

//** Factorial Recursive:
// n! =(n-1)*n;
// function factorial(n) {
//     if (n == 0)
//         return 1;
//     else {
//         return n * factorial(n - 1);
//     }
// }
// let iam = factorial(5);
// console.log(iam);
// let egg = factorial(7);
// console.log(egg);


//** Fibonacci:
// fobo[2] = fibo[2 - 1] + [2 - 2];
// fobo[3] = fibo[3 - 1] + [3 - 2];
// fobo[4] = fibo[4 - 1] + [4 - 2];
// fobo[5] = fibo[5 - 1] + [5 - 2];
// fobo[6] = fibo[6 - 1] + [6 - 2];
// fobo[n] = fibo[n - 1] + [n - 2];
// fobo[i] = fibo[i - 1] + [i - 2];

//** Fibonacci itaractive low:
// var fibo = [0, 1];
// for (var i = 2; i <= 10; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function fibonacci(n) {
//     let fibon = [0, 1];
//     for (let z = 2; z <= n; z++) {
//         fibon[z] = fibon[z - 1] + fibon[z - 2]
//     }
//     return fibon;
// }
// const fib = fibonacci(12);
// console.log(fib);

//** Fibonacci Recursive low:
// function fibo1(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     } else {
//         return fibo1(n - 1) + fibo1(n - 2);
//     }
// }
// var result2 = fibo1(10);
// console.log(result2);

//** Create Fibonacci series in a recursive way:
// function fibonacci(n) {
//     if (n == 0) {
//         return [0];
//     } else if (n == 1) {
//         return [0, 1];
//     } else {
//         var fibo = fibonacci(n - 1);
//         var nextElement = fibo[n - 1] + fibo[n - 2];
//         fibo.push(nextElement);
//         return fibo;
//     }
// }
// var result = fibonacci(5);
// console.log(result);

//** Check whether a number is a Prime Number or not:
// var n = 13;
// for (var i = 2; i < n; i++) {
//     // console.log(i, n % i);
//     if (n % i == 0) {
//         console.log('Not a Prime Number');
//         break;
//     }

// }
// console.log('Is a Prime Number');

// function isPrimeNumber(number) {
//     if (number <= 1) {
//         return false;
//     } else {
//         for (var i = 2; i < number; i++) {
//             console.log(i);
//             if (number % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }

// }
// var nadira = isPrimeNumber(5);
// console.log(nadira);