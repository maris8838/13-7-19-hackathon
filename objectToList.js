/* Write a function called “convertObjectToList” which converts an object literal into an array of arrays.
Input (Object):
var object = {name: “ISRO”, age: 35, role: “Scientist”};
Output:
[[“name”, “ISRO”], [“age”, 35], [“role”, “Scientist”]] */
var object = {name: 'ISRO', age: 35, role: 'scientist'};
function convertObjectToList (obj){
    var d=Object.entries(object);
console.log(d);
}
convertObjectToList(object);