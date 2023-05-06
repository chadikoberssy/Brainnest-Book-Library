
const bookLibrary = require('./BookLibrary')



test("addBook function should add a book object to bookLibrary array", () => {
    const initialLength = bookLibrary.length;
    const testName = "Test Book";
    const testAuthor = "Test Author";
    const testPageCount = 200;
    const testRead = false;
    addBook(testName, testAuthor, testPageCount, testRead);
    expect(bookLibrary.length).toBe(initialLength + 1);
    const lastBook = bookLibrary[bookLibrary.length - 1];
    expect(lastBook.name).toBe(testName);
    expect(lastBook.author).toBe(testAuthor);
    expect(lastBook.pageCount).toBe(testPageCount);
    expect(lastBook.read).toBe(testRead);
  });