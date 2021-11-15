let menuButtons = document.getElementsByClassName("button");
let firstTask = menuButtons[0];
let secondTask = menuButtons[1];
let thirdTask = menuButtons[2];

function changeColor(element) {
    let original = element.style.color;
    element.style.color = '#ffffff';
    window.setTimeout(function () {
        element.style.color = original;
    }, 5000);
}

firstTask.addEventListener('click', () => {
    changeColor(firstTask);
    alert('Here is your task: ' + firstTask.innerHTML);
});

secondTask.addEventListener('click', () => {
    changeColor(secondTask);
    alert('Here is your task: ' + secondTask.innerHTML);
});

thirdTask.addEventListener('click', () => {
    changeColor(thirdTask);
    alert('Here is your task: ' + thirdTask.innerHTML);
});