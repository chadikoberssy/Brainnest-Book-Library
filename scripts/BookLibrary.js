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

function reDraw() {
	const bookShelf = document.querySelector("#bookshelf>tbody");
	bookShelf.textContent = "";

	bookLibrary.forEach((b, i) => {
		const book = document.createElement("tr");
		book.classList.add("book");
		bookShelf.appendChild(book);

		const bookTitle = document.createElement("td");
		bookTitle.textContent = b.name;
		book.appendChild(bookTitle);

		const bookAuthor = document.createElement("td");
		bookAuthor.textContent = b.author;
		book.appendChild(bookAuthor);

		const bookPages = document.createElement("td");
		bookPages.textContent = b.pageCount;
		book.appendChild(bookPages);

		const statusToggle = document.createElement("button");
		statusToggle.classList.add((b.read ? "" : "not-") + "read");
		statusToggle.innerText = (b.read ? "Did" : "Did NOT") + " read";
		statusToggle.onclick = () => { bookLibrary[i].toggleRead(); reDraw(); };
		const bookStatus = document.createElement("td");
		bookStatus.appendChild(statusToggle);
		book.appendChild(bookStatus);

		const deleteSymbol = document.createElement("button");
		deleteSymbol.classList.add("trash");
		deleteSymbol.innerText = "X";
		deleteSymbol.onclick = () => { bookLibrary.splice(i, 1); reDraw(); };
		const bookDelete = document.createElement("td");
		bookDelete.appendChild(deleteSymbol);
		book.appendChild(bookDelete);
	});
}

function addBook(name = "RNG book", author = "John Doe", pageCount = Math.round(Math.random() * 1337), read) {
	bookLibrary.push(new Book(name, author, pageCount, read));
	reDraw();
}
