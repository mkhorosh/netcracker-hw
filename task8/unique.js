Array.prototype.unique = function (key) {
    let returnArray = [];
    let isPrimitiveArray = (Object(this[0]) !== this[0]);
    if (isPrimitiveArray) {
        for (let element of this) {
            if (!returnArray.includes(element)) {
                returnArray.push(element);
            }
        }
    } else {
        let subArray = [];
        for (let element of this) {
            if (!subArray.includes(element[key])) {
                subArray.push(element[key]);
                returnArray.push(element);
            }
        }
    }
    return returnArray;
}

let coolArray1 = [1, 2, 2, 4];
let coolArray2 = ['4', '1', '1', '2', '4'];
let coolArray3 = [{id: 1}, {id: 1}, {id: 1, name: '11'}];
let coolArray4 = [{id: 3}, {id: 1, name: '11'}, {id: 1, name: '22'}];

console.log(coolArray1.unique());  // [ 1, 2, 4 ]
console.log(coolArray2.unique());  // [ '4', '1', '2' ]
console.log(coolArray3.unique('id'));  // [ { id: 1 } ]
console.log(coolArray4.unique('id'));  // [ { id: 3 }, { id: 1, name: '11' } ]
