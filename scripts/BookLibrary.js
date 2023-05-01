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
	const bookShelf = document.querySelector("#bookshelf");
	bookShelf.textContent = "";

	bookLibrary.forEach((i) => {
		// WHOLE BOOK CREATION
		const book = document.createElement("table");
		book.classList.add("bookshelf-table");
		bookShelf.appendChild(book);

		// BOOK HEADER CREATION
		const tableHeader = document.createElement("thead");
		tableHeader.classList.add("book-header");
		book.appendChild(tableHeader);

		const tableHeaderRow = document.createElement("tr");
		tableHeaderRow.classList.add("book-header-row");
		tableHeader.appendChild(tableHeaderRow);

		const bookTitle = document.createElement("th");
		bookTitle.textContent = i.name;
		tableHeaderRow.appendChild(bookTitle);

		// BOOK BODY CREATION
		const tableBody = document.createElement("tbody");
		tableBody.classList.add("book-body");
		book.appendChild(tableBody);

		// BOOK BODY AUTHOR SECTION CREATION
		const tableBodyRowAuthor = document.createElement("tr");
		tableBodyRowAuthor.classList.add("book-body-row-author");
		tableBody.appendChild(tableBodyRowAuthor);

		const bookAuthor = document.createElement("td");
		bookAuthor.textContent = i.author;
		tableBodyRowAuthor.appendChild(bookAuthor);

		// BOOK BODY PAGES SECTION CREATION
		const tableBodyRowPages = document.createElement("tr");
		tableBodyRowPages.classList.add("book-body-row-pages");
		tableBody.appendChild(tableBodyRowPages);

		const bookPages = document.createElement("td");
		bookPages.textContent = i.pageCount;
		tableBodyRowPages.appendChild(bookPages);

		// BOOK BODY STATUS SECTION CREATION
		const tableBodyRowStatus = document.createElement("tr");
		tableBodyRowStatus.classList.add("book-body-row-status");
		tableBody.appendChild(tableBodyRowStatus);

		const statusSymbol = document.createElement("button");
		statusSymbol.classList.add(i.read ? "" : "not-" + "read");
		statusSymbol.innerText = i.read ? "Did" : "Did NOT" + " read";

		const tableBodyRowStatusData = document.createElement("td");
		tableBodyRowStatusData.appendChild(statusSymbol);
		tableBodyRowStatus.appendChild(tableBodyRowStatusData);

		// BOOK BODY Remove "book" button SECTION
		const tableBodyRowTrash = document.createElement("tr");
		tableBodyRowTrash.classList("book-body-row-trash");
		tableBody.appendChild(tableBodyRowTrash);

		const deleteSymbol = document.createElement("button");
		deleteSymbol.classList.add("trash");
		deleteSymbol.innerText = "X";

		const tableBodyRowStatusTrash = document.createElement("td");
		tableBodyRowStatusTrash.appendChild(deleteSymbol);
		tableBodyRowTrash.appendChild(tableBodyRowStatusTrash);
	});
}

function addBook(book = new Book("RNG book", "John Doe", Math.round(Math.random() * 1337))) {
	bookLibrary.push(book);
	reDraw();
}
