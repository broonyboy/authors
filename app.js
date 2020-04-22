function app() {

    const button = document.querySelector("#submitAuthor").addEventListener('click', searchAuthor);
    const text = document.querySelector(".text");

    function searchAuthor() {
        clearList();
        const author = document.querySelector('#authorInput');
        const startUrl = "http://openlibrary.org/search.json?author=" + author.value;
        fetch(startUrl)
            .then((resp) => resp.json())
            .then(function (data) {
                let books = data.docs;
                books.forEach(book => {

                    let li = document.createElement('li');
                    li.appendChild(document.createTextNode(book.title_suggest));
                    text.appendChild(li);
                });
            });
    }

    function clearList() {
        text.innerHTML = "";
    }

}






app();