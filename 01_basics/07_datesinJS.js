//Dat
// es

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());// toDateString() method returns the date portion of a Date object in human readable form.
console.log(myDate.toISOString());// toISOString() method returns a string in simplified extended ISO format (ISO 8601).
console.log(myDate.toJSON());// toJSON() method returns a string representation of the Date object in JSON format.
console.log(myDate.toLocaleDateString());// toLocaleDateString() method returns a string with a language sensitive representation of the date portion of this date.
console.log(myDate.toLocaleString());// toLocaleString() method returns a string with a language sensitive representation of this date.



//NOTE: Date is an object in JS
console.log(typeof myDate);


let myCreatedDate = new Date(2023, 2, 23) // month starts with 0, so 2 means March
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2023-01-16");//for yy-mm-dd month starts with 1
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("04-05-2024");//for dd-mm-yy month starts with 1
console.log(myCreatedDate3.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);// it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(myCreatedDate.getTime());// it returns the number of milliseconds since January 1, 1970, 00:00:00 UTC for the specified date.
console.log(Math.floor(Date.now() / 1000));// it returns the number of seconds since January 1, 1970, 00:00:00 UTC.


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);// month starts with 0, so we add 1 to get the correct month number
console.log(newDate.getDay())// it returns the day of the week (0-6) where 0 is Sunday and 6 is Saturday

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long',
})