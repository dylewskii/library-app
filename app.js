// Object Constructor
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

// Library Array to hold Book Objects
const myLibrary = [];
const myLibraryAlreadyOnScreen = [];



// Takes user input & adds Book Object to Library Array
function addBookToLibrary(title, author, pages, read) {
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Bookshelf 
const bookshelf = document.querySelector(".bookshelf__content");
const bookCard = document.querySelector(".book-card");
const bookTitle = document.querySelector(".book__title");
const bookAuthor = document.querySelector(".book__author");
const bookPages = document.querySelector(".book__pages");
const bookRead = document.querySelector(".book__read");

// Modal
const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");
const form = document.getElementById("form");

// Displays all books currently stored in myLibrary array
function displayBooks() {
    bookshelf.innerHTML = '';
    for (const book of myLibrary){
        let currTitle = book["title"];
        let currAuthor = book["author"];
        let currPages = book["pages"];
        let currRead = book["read"];
        createBookCardDiv(currTitle, currAuthor, currPages, currRead);
    }
};

// Creates a .book-card div inside .bookshelf__content div
function createBookCardDiv(title, author, pages, read) {
    const newBookCardDiv = document.createElement('div');
    newBookCardDiv.classList.add('book-card');

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