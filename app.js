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

let bookCard = document.querySelector("book-card");
let bookTitle = document.querySelector("book__title");
let bookAuthor = document.querySelector("book__author");
let bookPages = document.querySelector("book__pages");
let bookRead = document.querySelector("book__read");

function displayBooks() {
    for (const book of myLibrary) {
        console.log(book.author);
        console.log(book.info());
    }
}

displayBooks();

function createBookCard () {
    const newBookCard = document.createElement('div');
    newElement.textContent = 'This element appears on the screen';
    document.body.appendChild(newElement);

}