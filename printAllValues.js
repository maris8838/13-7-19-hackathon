/*
Write a function called “printAllValues” which returns an newArray of all the input
 object’s values.

Input (Object):

var object = {name: “RajiniKanth”, age: 33, hasPets : false};
Output:

[“RajiniKanth”, 33, false] */

var object = {name: "RajiniKanth", age: 33, hasPets : false};
function PrintAllValues(myObject){
     var myObject=Object.values(object);
     console.log(myObject);
 }
PrintAllValues(object);