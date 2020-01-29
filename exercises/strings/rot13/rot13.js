/**
 * Given an input string, returns a ROT13 copy of the string.
 *
 * A substitution cipher is a method of encrypting an input string
 * by replacing each letter of the input with some other letter.
 *
 * ROT13 is a substitution cipher where each letter is replaced by
 * the letter that is 13 letters after it in the alphabet, wrapping
 * back to the start of the alphabet if necessary.
 *
 * For example, every instance of 'A' is replaced with 'N', 'M' with 'Z',
 * 'R' with 'E', and so on.
 *
 * See https://en.wikipedia.org/wiki/ROT13
 *
 * Play with: https://rot13.com/
 *
 * Because there are 26 letters in the alphabet, we can "decrypt" a
 * rot13-encrypted string by applying rot13 again.
 *
 * (No, this isn't particularly secure.)
 *
 * @example
 * rot13('Hello, world!'); // => 'Uryyb, jbeyq!'
 * rot13('Uryyb, jbeyq!'); // => 'Hello, world!'
 *
 * @param {string} string - The string to replace a character in
 * @returns {string} A lowercase copy of the input string
 */

function rot13(string) {
  let finalString = ''
  
  for (character of string) {  
    let newAscii = character.charCodeAt(string)
    let newCharCode = character.charCodeAt(string)
    
    if (newAscii >= 65 && newAscii < 78 || newAscii >= 97 && newAscii < 110) {
      newCharCode = Number(newAscii) + 13
      finalString = finalString + String.fromCharCode(newCharCode)
    }

    if (newAscii >= 78 && newAscii < 90 || newAscii >= 110 && newAscii <= 122) {
      newCharCode = Number(character.charCodeAt(string)) - 13
      finalString = finalString + String.fromCharCode(newCharCode)
    }
    //don't need an else statement because it was copying the character into the string too
    //but we need to account for spaces
    if (newAscii === 32) {
      finalString = finalString + ' '
    }
  }
  console.log(finalString)
  return finalString
}

if (require.main === module) {
  console.log('Running sanity checks for rot13:');
console.log(rot13('hey'))
console.log(rot13('hello world'))
}

module.exports = rot13;
