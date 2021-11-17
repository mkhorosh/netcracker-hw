const URL = 'http://localhost:3000/posts';
let outputArea = document.getElementById('posts');
let setButton = document.getElementById('setButton');
let getButton = document.getElementById('getButton');

function draw(response) {
    response.forEach((item) => {
        const book = document.createElement('p');
        book.innerHTML = item.id + '. ' + item.title + ' (' + item.author + ')' || 'No book';
        outputArea.appendChild(book);
    })
}

getButton.onclick = () => {
    let response = fetch(URL)
        .then(response => response.json())
        .then(response => draw(response))
}


setButton.onclick = () => {
    let inputId = document.getElementById('id').value;
    let inputAuthor = document.getElementById('name').value;
    let inputTitle = document.getElementById('title').value;

    let post = {
        id: inputId,
        title: inputTitle,
        author: inputAuthor
    }

    let response = fetch(URL, {
        method: 'POST', headers: {'Content-Type': 'application/json', 'charset': 'utf-8'},
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(response => console.log(response))
}

