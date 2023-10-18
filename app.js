// Bookshelf Elements
const bookshelf = document.querySelector(".bookshelf__content");
const bookCard = document.querySelector(".book-card");
const bookTitle = document.querySelector(".book__title");
const bookAuthor = document.querySelector(".book__author");
const bookPages = document.querySelector(".book__pages");
const bookRead = document.querySelector(".book__read");
const readBtn = document.querySelector(".readBtn");
const removeBtn = document.querySelector(".removeBtn");

// Modal Elements
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const form = document.getElementById("form");

// Library Array to hold Book Objects
const myLibrary = [];

// Book Object Constructor
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const readStatus = this.read ? "read" : "not read yet";
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`);
    }
};

// Take user input & add Book Object to Library Array
function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Display all books currently stored in myLibrary array
function displayBooks() {
    bookshelf.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        const currTitle = myLibrary[i]["title"];
        const currAuthor = myLibrary[i]["author"];
        const currPages = myLibrary[i]["pages"];
        const currRead = myLibrary[i]["read"];
        createBookCardDiv(currTitle, currAuthor, currPages, currRead, i);
    }
};

// Create a .book-card div inside .bookshelf__content div
function createBookCardDiv(title, author, pages, read, index) {
    const newBookCardDiv = document.createElement('div');
    newBookCardDiv.classList.add('book-card');
    newBookCardDiv.setAttribute('data-book-index', index);

    const cardTopDiv = document.createElement('div');
    cardTopDiv.classList.add('card__top');

    const cardBottomDiv = document.createElement('div');
    cardBottomDiv.classList.add('card__bottom');

    const titleH6 = document.createElement('h6');
    titleH6.classList.add('book__title');
    titleH6.textContent = title;

    const authorP = document.createElement('p');
    authorP.classList.add('book__author');
    authorP.textContent = author;

    const pagesP = document.createElement('p');
    pagesP.classList.add('book__pages');
    pagesP.textContent = pages;

    const readP = document.createElement('p');
    readP.classList.add('book__read');
    readP.textContent = read;

    const readButton = document.createElement('button');
    readButton.textContent = 'Read';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    cardTopDiv.appendChild(titleH6);
    cardTopDiv.appendChild(authorP);
    cardTopDiv.appendChild(pagesP);
    cardTopDiv.appendChild(readP);

    cardBottomDiv.appendChild(readButton);
    cardBottomDiv.appendChild(removeButton);

    newBookCardDiv.appendChild(cardTopDiv);
    newBookCardDiv.appendChild(cardBottomDiv);

    bookshelf.appendChild(newBookCardDiv);
};

// Event Listeners
openButton.addEventListener("click", () => {
    modal.showModal();
});

closeButton.addEventListener("click", () => {
    modal.close();
});

removeBtn.addEventListener("click", (e) => {
    const bookCard = e.target.parentElement.parentElement;
    const bookIndex = bookCard.getAttribute("data-book-index");
    console.log(bookIndex);
    myLibrary.splice(bookIndex, 1);
    displayBooks();
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("book-title").value;
    const authorInput = document.getElementById("book-author").value;
    const pagesInput = document.getElementById("book-pages").value;
    const readInputValue = document.querySelector(".book-read").value;
    const readInput = readInputValue === "Yes" ? true : false;

    addBookToLibrary(titleInput, authorInput, pagesInput, readInput);
    form.reset();
    modal.close();
    displayBooks();
});