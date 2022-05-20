//array============

var arr = [1, 2, 3, 4, 5, 6, 7]
    // arr[5] = 6
    // arr[2] = 100
    // console.log(arr);
    // console.log(arr.length);

//Array traverse =========

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (var index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// for (var index in arr) {
//     console.log(arr[index]);
// }

for (var zahurul in arr) {
    console.log(arr[zahurul]);
}

for (var zahurul = 0; zahurul < arr.length; zahurul++) {
    console.log(arr[zahurul]);
}

//Total Array Gog=============
var sum = 0
for (index = 0; index < arr.length; index++) {
    sum += arr[index]
}
console.log(sum);

//Even number============
for (zahurul = 0; zahurul < arr.length; zahurul++) {
    if (arr[zahurul] % 2 === 0) {
        console.log(arr[zahurul]);
    }
}

//Even number Gog============
sum2 = 0
for (zahurul = 0; zahurul < arr.length; zahurul++) {
    if (arr[zahurul] % 2 === 0)
        sum2 += arr[zahurul]
}
console.log(sum2);

//Odd Number=============
for (value = 0; value < arr.length; value++) {
    if (arr[value] % 2 === 1) {
        console.log(arr[value]);
    }
}

//Odd number Gog===============
sum3 = 0
for (value = 0; value < arr.length; value++) {
    if (arr[value] % 2 === 1) {
        sum3 += arr[value]
    }
}
console.log(sum3);