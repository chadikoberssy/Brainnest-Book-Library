const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  it('shifts the characters by the specified number', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
  });

  it('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  it('keeps the same case', () => {
    expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi');
  });

  it('keeps punctuation', () => {
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
  });
});
