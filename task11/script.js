console.log('Hello');

function levelUp(object) {
    return new Promise(function (res, rej) {
        setTimeout(() => {
            object ? true : rej();
            if (object.hasOwnProperty('level')) {
                object.level++;
                res(object.name + ': level ' + object.level);
            } else {
                rej();
            }
        }, 2000);
    })
}

let pokemon1 = {
    name: 'Bulbasaur',
    level: 1
}

levelUp(pokemon1)
    .then((res) => console.log(res), (error) => console.log('Failed :('))
    .finally(() => console.log('Finish'));

levelUp(pokemon1)
    .then((res) => console.log(res), (error) => console.log('Failed :('))
    .finally(() => console.log('Finish'));

let pokemon2 = {
    name: 'Ivysaur'
}

levelUp(pokemon2)
    .then((res) => console.log(res), (error) => console.log('Failed :('))
    .finally(() => console.log('Finish'));

let a = 0;

levelUp(a)
    .then((res) => console.log(res), (error) => console.log('Failed :('))
    .finally(() => console.log('Finish'));

console.log('Goodbye');
