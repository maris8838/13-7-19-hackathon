/* Write a function called “printAllKeys”
 which returns an newArray of all the input object’s keys.

Example Input:
{name : ‘RajiniKanth’, age : 25, hasPets : true}
Example Output:
[‘name’, ‘age’, ‘hasPets’] */
var object2 = {
    name : 'maris',
    age : 22,
    hasPets : true
};
function printAllKeys (obj) {
    var a =Object.keys(object2);
    console.log(a);
}
printAllKeys(object2);