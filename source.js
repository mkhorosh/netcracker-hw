function calculateTop() {
    let str = document.getElementById("input_text").value;
    if (!isNaN(str)) {  // type check
        alert('Please enter text :)');
    } else {
        // remove special symbols, don't mind register
        str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
        str = str.replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        let wordsArray = str.split(' ');
        let dictionary = {};
        for (let word of wordsArray) {
            if (isNaN(word)) {  // if find a number in text -  don't count
                (word in dictionary) ? dictionary[word]++ : dictionary[word] = 1;
            }
        }
        let max = new Set(Object.values(dictionary));
        let maxs = Array.from(max).sort(function (a, b) {return b - a}).slice(0, 3);
        let answerString = '';
        for (let i in maxs) {
            let keys = Object.keys(dictionary).filter(k => dictionary[k] === maxs[i]);
            answerString +='\n'+'Top ' + (+i + 1) + ':'+'\n';
            for (let elem of keys) {
                answerString+=elem + '  ';
            }
            answerString+='\n'+'(' + maxs[i] + ' times)';
        }
        alert(answerString);
    }
}