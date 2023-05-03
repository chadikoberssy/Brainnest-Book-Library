let modalBtns = [...document.querySelectorAll(".add-book-btn")];
modalBtns.forEach(function (btn) {
	btn.onclick = function () {
		let modal = btn.getAttribute("data-modal");
		document.getElementById(modal).style.display = "block";
	};
});
let closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function (btn) {
	btn.onclick = function () {
		let modal = btn.closest(".modal");
		modal.style.display = "none";
	};
});
window.onclick = function (event) {
	if (event.target.className === "modal") {
		event.target.style.display = "none";
	}
};

function submitBook(event) {
	event.preventDefault();
	const form = new FormData(document.forms.bookForm);
	addBook(form.get("title"), form.get("author"), form.get("pages"), form.get("read") === "true");
	event.target.reset();
}
document.getElementById("bookForm").addEventListener("submit", submitBook);
