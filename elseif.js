a = 100
b = 80
if (a > b) {
    console.log("Bangladesh");
} else if (a < b) {
    console.log("Dhaka");
} else {
    console.log('This Number Is Even,');
}
// weekly day counter app:

var date = new Date()
var today = date.getDay()

if (today === 0) {
    console.log('Today is Sunday,');
} else if (today === 1) {
    console.log('Today is Monday,');
} else if (today === 2) {
    console.log('Today Is Tuesday,')
} else if (today === 3) {
    console.log('Today is Wednesday,');
} else if (today === 4) {
    console.log('Today is Thursday,');
} else if (today === 5) {
    console.log('Today is Friday');
} else if (today === 6) {
    console.log('Today is Satarday,');
}