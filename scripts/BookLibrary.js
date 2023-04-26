let bookLibrary = [];

class Book {
	name = "";
	author;
	pageCount = 0;
	read = false;

	constructor(name = "", author, pageCount = 0, read = false) {
		this.name = name;
		this.author = author;
		this.pageCount = pageCount;
		this.read = read;
	}

	toggleRead() {
		this.read = !this.read;
	}
}

function addBook(book = new Book("RNG book", "John Doe", Math.round(Math.random()*1337))) {
	bookLibrary.push(book);
}
