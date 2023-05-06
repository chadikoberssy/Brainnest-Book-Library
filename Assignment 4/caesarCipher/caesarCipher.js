function caesarCipher(str, shift) {

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabet.indexOf(char.toLowerCase());

    if (index === -1) {
      result += char; // preserve non-letter characters
    } else {
      const newIndex = (index + shift) % 26; // wrap from z to a if necessary
      let newChar;
      if (char === char.toUpperCase()) {
        newChar = alphabet[newIndex].toUpperCase();
      } else {
        newChar = alphabet[newIndex];
      }
      result += newChar;
    }
  }

  return result;
}

module.exports = caesarCipher;