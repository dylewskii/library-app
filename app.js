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

// Takes user input & adds Book Object to Library Array
function addBookToLibrary() {
    let titleInput = prompt("Book title: ");
    let authorInput = prompt("Author: ");
    let pagesInput = prompt("Nr of Pages: ");
    let hasReadInput = prompt("Have you read the book? (y/n): ");
    let hasRead = hasReadInput.toLowerCase() === "y" ? true : false;

    newBook = new Book(titleInput, authorInput, pagesInput, hasRead);
    myLibrary.push(newBook);
}

let topContent = document.querySelector(".top-content");
let bookCard = document.querySelector(".book-card");
let bookTitle = document.querySelector(".book__title");
let bookAuthor = document.querySelector(".book__author");
let bookPages = document.querySelector(".book__pages");
let bookRead = document.querySelector(".book__read");

// Displays all books currently stored in myLibrary array
function displayBooks() {
    for (const book of myLibrary) {
        let currTitle = book["title"];
        let currAuthor = book["author"];
        let currPages = book["pages"];
        let currRead = book["read"];
        createBookCardDiv(currTitle, currAuthor, currPages, currRead)
    }
}

// Creates a .book-card div inside .top-content div
function createBookCardDiv(title, author, pages, read) {
    const newBookCardDiv = document.createElement('div');
    newBookCardDiv.classList.add('book-card');

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

    newBookCardDiv.appendChild(titleH6);
    newBookCardDiv.appendChild(authorP);
    newBookCardDiv.appendChild(pagesP);
    newBookCardDiv.appendChild(readP);
    newBookCardDiv.appendChild(readButton);
    newBookCardDiv.appendChild(removeButton);

    topContent.appendChild(newBookCardDiv);
};

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal]");
const modal = document.querySelector("[data-modal]");

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})