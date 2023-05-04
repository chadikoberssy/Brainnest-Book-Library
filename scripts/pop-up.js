const modal = document.querySelector('#modal')
const openModal = document.querySelector('.open-button')
const closeModal = document.querySelector('.close-button')

openModal.addEventListener('click', () => {
    modal.showModal();
})

closeModal.addEventListener('click' , () => {
    modal.close();
})


function submitBook(event) {
	event.preventDefault();
	const form = new FormData(document.forms.bookForm);
	let data = { n: form.get("title"), a: form.get("author"), p: form.get("pages") };
	if (data.n == "") delete data.n;
	if (data.a == "") delete data.a;
	if (data.p == "") delete data.p;
	addBook(data.n, data.a, data.p, form.get("read") === "true");
	event.target.reset();
}
document.getElementById("bookForm").addEventListener("submit", submitBook);
