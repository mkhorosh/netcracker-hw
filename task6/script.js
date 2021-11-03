let logger = console.log.bind(console);
console.log = function (...arguments){
    let now = new Date();
    let date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
    let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    let dateTime = date+' '+time;
    logger(dateTime, ...arguments);
}

console.log('error', 44);
