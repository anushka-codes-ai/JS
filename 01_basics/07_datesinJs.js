// Dates
// date start with number 0 => jan month
// date start with yy-mm-dd formate so they start with 01 "01"

let myDate = new Date() // instance / object of date we created .
console.log(myDate.toString());

 // its shows functions as a output
 // [Function: toDateString]
 //console.log(myDate.toDateString); 

 // choose which syntax u want 
 console.log(myDate.toDateString());
 console.log(typeof myDate); // object

 let myCreatedDate = new Date(2027 , 0 , 23 ) // arbitary date .
 // month start with 0 in JS.

 // readable not 
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

//let myCreatedDate1 = new Date(11,11,2011,1,11)
// output 6/2/1917, 1:11:00 AM ?

let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2026-01-01")//yy-mm-dd
console.log(myCreatedDate2.toLocaleString());

// in india we write // mm-dd-yy
let myCreatedDate3 = new Date("01-15-2027");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now();// declare using now instead of new

//'mili' : compare date /// rome book
// customer: 1
// date booking 1-11-11?
// 1970 to 1-11-11 miliseconds find value(}) : something => ***
// find value [ compare ]:{01-11-11}-1970 : get mili seconds.
// room available!
// customer : 1 booking done .

// customer : 2
// booking available on hotel at 1-11-11
// 1970 to 01-11-11 find value : ***
// check value in in DATABASE ***!=hotel_room(value)? : give room 
//else room is not avialable.

// timing also included .\\air bnb not hotel 

console.log(myTimeStamp);// mili second values from 1970
console.log(myCreatedDate3.getTime());

// compare always in miliseconds.

console.log(Date.now);// print [Function: now] ??
// converting into seconds.
console.log(Date.now()/1000);
// no decimal value : use floor or round not ceil
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // USE DOT {.} PROPERLY HEHEHEHE!

console.log(newDate.getMonth()+ 1 );// for new confusion 

// print complex date take sting interpulation (backticks)
// insert value by ${}
// if we wanna print date ${newDate.getDay()}
// string interpulation : `${newDate.getDay()} and the time `

`${newDate.getDay()} and the time `

// in toLocaleString() : inside we can define objects( also defines many paramenter) -> and we also get c some property
newDate.toLocaleString('default',{
    //press ctrl + space get functions // what we want.
    weekday:"long "//mon // : after this all are suggestions
})
// intelisence of vs code .
// default intlization.<write in string format
// customise things more.
// play with all .
// suggestion written inside the string .
// com[pleX] topic 