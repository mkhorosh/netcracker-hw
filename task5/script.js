function Helper() {
    Object.defineProperty(this, 'isEmpty', {
        value: function (obj) {
            if (typeof obj !== 'object' || obj === null) {
                console.log('ERROR - not an object!');
                throw new Error('not an object');
            }
            return Object.getOwnPropertyNames(obj).length === 0;
        }
    });

    Object.defineProperty(this, 'isObject', {
        value: function (obj) {
            if (obj === null) {
                console.log('ERROR - null object!');
                throw new Error('null object');
            }
            return typeof (obj) === 'object';
        }
    });

    Object.defineProperty(this, 'makePlane', {
        value: function (obj) {
            // function create object where all properties is on 1 level (covering properties skipped),
            // if conflict - rewrites values
            if (typeof obj !== 'object' || obj === 'null') {
                console.log('ERROR - not an object!');
                throw new Error('not an object');
            }
            let newObj = {};
            for (let prop in obj) {
                if (typeof obj[prop] !== 'object') {
                    newObj[prop] = obj[prop];
                }
            }
            for (let prop in obj) {
                if (typeof obj[prop] === 'object') {
                    let temp = this.makePlane(obj[prop]);
                    if (obj[prop] === null) {
                        newObj[prop] = null;
                    } else if (this.isEmpty(obj[prop])) {
                        newObj[prop] = {};
                    }
                    for (let t_prop in temp) {
                        newObj[t_prop] = temp[t_prop];
                    }
                }
            }
            return newObj;
        }
    });

    Object.defineProperty(this, 'deepClone', {
        value: function (obj) {
            // function create and return new object - copy of target object
            if (typeof obj !== 'object' || obj === 'null') {
                console.log('ERROR - not an object!');
                throw new Error('not an object');
            }
            let newObj = {};
            for (let prop in obj) {
                if (typeof obj[prop] === 'object') {
                    newObj[prop] = this.deepClone(obj[prop]);
                } else {
                    newObj[prop] = obj[prop];
                }
            }
            return newObj;
        }
    });

    Object.defineProperty(this, 'isEqual', {
        value: function (obj1, obj2) {
            if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === 'null' || obj2 === 'null') {
                console.log('ERROR - not an object!');
                throw new Error('not an object');
            }
            let properties1 = Object.getOwnPropertyNames(obj1);
            let properties2 = Object.getOwnPropertyNames(obj2);
            if (properties1.length !== properties2.length) {
                return false;
            }
            for (let p in properties1) {
                let prop = properties1[p];
                let bothAreObjects = typeof (obj1[prop]) === 'object' && typeof (obj2[prop]) === 'object';
                if (typeof obj1[prop] === 'object' && typeof obj2[prop] === 'object') {
                    if (!this.isEqual(obj1[prop], obj2[prop])) {
                        return false;
                    }
                } else if (typeof obj1[prop] !== 'object' && typeof obj2[prop] !== 'object') {
                    if (obj1[prop] !== obj2[prop]) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            return true;
        }

    });
    Object.defineProperty(this, 'findValue', {
        value: function (obj, key) {
            if (typeof obj !== 'object' || typeof key === 'object' || obj === 'null') {
                console.log('ERROR - incorrect types!');
                throw new Error('incorrect types');
            }
            key = key.toString();
            let answer = "";
            hasValue(obj, key);

            // recursion function
            function hasValue(obj, key) {
                for (k in obj) {
                    if (k === key) {
                        answer = obj[k];
                    } else if (typeof obj[k] === 'object') {
                        hasValue(obj[k], key);
                    }
                }
            }

            if (answer === "") {
                console.log(`There is no key '${key}'`);
            }
            return answer;
        }
    });

    Object.defineProperty(this, 'hasKey', {
        value: function (obj, key) {
            if (typeof obj !== 'object' || typeof key === 'object' || obj === 'null') {
                console.log('ERROR - incorrect types!');
                throw new Error('incorrect types');
            }
            key = key.toString();
            let answer = false;
            findKey(obj, key);

            // recursion function
            function findKey(obj, key) {
                for (let prop in obj) {
                    if (prop === key) {
                        answer = true;
                    } else if (typeof obj[prop] === 'object') {
                        findKey(obj[prop], key);
                    }
                }
            }

            return answer;
        }
    });
}

// testing data
const coolHelper = new Helper();
const cat = {
    a: {
        b: 7,
        a: 4
    },
    1: 4
};
const dog = {};
const kitten = {
    a: {
        b: 7,
        c: 4
    },
    b: 6,
    1: 4,
    n: {
        w: {
            b: null
        }
    }
};

console.log(coolHelper.isEmpty(cat));  //false
console.log(coolHelper.isEmpty(dog));  //true
console.log(coolHelper.isObject('hello'));  //false
console.log(coolHelper.isObject(cat));  //true
console.log(coolHelper.makePlane(kitten));  //{ '1': 4, b: null, c: 4 }
console.log(coolHelper.deepClone(cat));  //{ '1': 4, a: { b: 7, a: 4 } }
console.log(coolHelper.isEqual(cat, kitten));  //false
console.log(coolHelper.isEqual({a: 2}, {a: 2}));  //true
console.log(coolHelper.findValue(cat, 'b'));  //7
console.log(coolHelper.findValue(cat, 'meow'));  //There is no key 'meow'
console.log(coolHelper.hasKey(cat, 'b'));  //true
console.log(coolHelper.hasKey(cat, 'meow'));  //false
