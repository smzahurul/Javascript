// For Loop:
// for (i = 0; i < 10; i++) {
//     console.log((i + 1) + ' Bangladesh');
// }

// General Number Count:
for (i = 0; i < 20; i++) {
    console.log(i + 1);
}
// General Number two Digit Count:
for (i = 1; i < 20; i += 2) {
    console.log(i + 1);
}

// Even Number:
for (i = 1; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' Even Number');
    }
}

// Odd Number:
for (i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        console.log(i + ' Odd Number');
    }
}
// Number Sume:
//     sum = 0
// for (i = 1; i < 10; i++) {
//     console.log(sum + i);
//     sum += i
// }

sum = 0
for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(sum + '+' + i + '=' + (sum + i));
        sum += i
    }
}

sum = 1
for (i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(sum + '+' + i + '=' + (sum + i));
        sum += i
    }
}