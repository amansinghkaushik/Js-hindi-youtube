// dates

let MyDate = new Date()
console.log(MyDate.toString()); //Sun Jan 05 2025 13:06:08 GMT+0000 (Coordinated Universal Time)
console.log(MyDate.toDateString()); // Sun Jan 05 2025
console.log(MyDate.toISOString()); // 2025-01-05T13:06:08.683Z
console.log(MyDate.toJSON()); // 2025-01-05T13:06:08.683Z
console.log(MyDate.toLocaleDateString()); // 1/5/2025
console.log(MyDate.toLocaleString()); // 1/5/2025, 1:06:08 PM
console.log(MyDate.toLocaleTimeString()); // 1:06:08 PM

console.log(typeof MyDate); // object

let myCreatedDates = new Date(2023, 0, 23)
console.log(myCreatedDates.toDateString()); // Mon Jan 23 2023

let myCreatedDates2 = new Date("2023-01-04")
console.log(myCreatedDates2.toLocaleString()); //1/4/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);

let newDate = new Date()

console.log(newDate);
console.log(newDate.getDate());

newDate.toLocaleString('default', {
    weekday:"long",
})

