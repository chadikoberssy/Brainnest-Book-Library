
const bookLibrary = require('./BookLibrary')

describe("addBook", () => {
    beforeEach(() => {
      // Reset bookLibrary before each test
      bookLibrary = [];
    });
  
    test("should add a book to the library", () => {
      const initialLength = bookLibrary.length;
      addBook("Harry Potter", "J.K. Rowling", 400, true);
      expect(bookLibrary.length).toBe(initialLength + 1);
    });
  
    test("should add a book with correct properties", () => {
      addBook("Harry Potter", "J.K. Rowling", 400, true);
      const newBook = bookLibrary[0];
      expect(newBook.name).toBe("Harry Potter");
      expect(newBook.author).toBe("J.K. Rowling");
      expect(newBook.pageCount).toBe(400);
      expect(newBook.read).toBe(true);
    });
  });


// test("addBook function should add a book object to bookLibrary array", () => {
//     const initialLength = bookLibrary.length;
//     const testName = "Test Book";
//     const testAuthor = "Test Author";
//     const testPageCount = 200;
//     const testRead = false;
//     addBook(testName, testAuthor, testPageCount, testRead);
//     expect(bookLibrary.length).toBe(initialLength + 1);
//     const lastBook = bookLibrary[bookLibrary.length - 1];
//     expect(lastBook.name).toBe(testName);
//     expect(lastBook.author).toBe(testAuthor);
//     expect(lastBook.pageCount).toBe(testPageCount);
//     expect(lastBook.read).toBe(testRead);
//   });