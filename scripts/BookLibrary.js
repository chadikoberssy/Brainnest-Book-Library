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

function addBook(book = new Book("RNG book", "John Doe", Math.round(Math.random() * 1337))) {
	bookLibrary.push(book);
	update();
}

function update() {
	const bookShelf = document.querySelector("#bookshelf");
	bookShelf.textContent = "";

	bookLibrary.forEach((i) => {
		const book = document.createElement("tr");
		book.classList.add("books");
		bookShelf.appendChild(book);

		const bookTitle = document.createElement("td");
		bookTitle.textContent = i.name;
		book.appendChild(bookTitle);

		const bookAuthor = document.createElement("td");
		bookAuthor.textContent = i.author;
		book.appendChild(bookAuthor);

		const bookPages = document.createElement("td");
		bookPages.textContent = i.pageCount;
		book.appendChild(bookPages);

		const statusSymbol = document.createElement("a");
		statusSymbol.classList.add(i.read ? "" : "not-" + "read");
		statusSymbol.innerText = i.read ? "Did" : "Did NOT" + " read";
		const bookStatus = document.createElement("td");
		bookStatus.appendChild(statusSymbol);
		book.appendChild(bookStatus);

		// Remove "book" button
		const deleteSymbol = document.createElement("a");
		deleteSymbol.classList.add("trash");
		deleteSymbol.innerText = "X";
		const bookDelete = document.createElement("td");
		bookDelete.appendChild(deleteSymbol);
		book.appendChild(bookDelete);
	});
}
