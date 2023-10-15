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

let harryPotter = new Book("Harry Potter","JK Rowling", 999, false);
console.log(harryPotter.info());