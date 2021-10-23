let str = null;

// TODO: create input

// const readLine = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question('What do you think of Node.js? ', (answer) => {
//     console.log(`Thank you for your valuable feedback: ${answer}`);
//     rl.close();
// });
// str = readLine();
str = 'My name is 5 Marina Marina Marina marina. Their name are cats. NAME Dogs? Cats!';
// str = 3843034;
if (typeof str !== 'string'){
    console.log('Please enter text :)');
}else{
    str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"");  // remove special symbols
    str = str.toLowerCase();  // don't mind register
    let wordsArray = str.split(' ');
    let dictionary = {};
    for (let word of wordsArray){
        if (!isNaN(word)){  // if find a number in text -  don't count
            continue;
        }
        if (word in dictionary){
            dictionary[word]++;
        }else{
            dictionary[word]=1;
        }
    }

    let maxs = Object.values(dictionary).sort(function(a, b){return b - a}).slice(0, 3);
    for (let i in maxs){
        let keys = Object.keys(dictionary).filter(k=>dictionary[k]===maxs[i]);
        console.log('Top '+(+i+1)+' word is');
        for (let elem of keys){
            console.log(elem+' ');
        }
        console.log('('+maxs[i]+' times)');
    }
}