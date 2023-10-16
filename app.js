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

//Write a function that loops through the array and 
// displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

// testing
let bookOne = new Book("book one", "author one", 1, true);
let bookTwo = new Book("book two", "author two", 2, false);
let bookThree = new Book("book three", "author three", 3, true);

myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);

let topContent = document.querySelector(".top-content");
let bookCard = document.querySelector(".book-card");
let bookTitle = document.querySelector(".book__title");
let bookAuthor = document.querySelector(".book__author");
let bookPages = document.querySelector(".book__pages");
let bookRead = document.querySelector(".book__read");

function displayBooks() {
    for (const book of myLibrary) {
        console.log(book.author);
    }
}


function createBookCardDiv () {
    const newBookCardDiv = document.createElement('div');
    newBookCardDiv.classList.add('book-card');

    const titleH6 = document.createElement('h6');
    titleH6.classList.add('book__title');

    const authorP = document.createElement('p');
    authorP.classList.add('book__author');

    const pagesP = document.createElement('p');
    pagesP.classList.add('book__pages');

    const readP = document.createElement('p');
    readP.classList.add('book__read');

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
}

createBookCardDiv();
createBookCardDiv();
displayBooks();