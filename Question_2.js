/*

Question 2 -- decodeString(s): Given an encoded string, return its corresponding
decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the
square brackets is repeated exactly k times. Note: k is guaranteed to be a
positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

*/


function decodeString(s) {
  /* Use RegExp to find the most nested encryption, resolve it and then redo
  search for the next most nested. Assuming that the encryption will follow the
  pattern n[sn[sn[sn[...]]]] where n is the number of itterations and s is the
  string to be itterated, we can assume that the first ']' string encapsulates
  the most nested part of the incryption and solve up from there.

  We seach bottom up to avoid having to possibly decode the same encryptions
  multiple times, thusly reducing overall operational time */

  let decryption = s;

  // regexp search for the brackets, first iteration
  let regEndBracket = /\]/;
  let regStartBracket = /\[/;

  // while there is still a bracket in the string, keep running the decryption
  while (regEndBracket.test(decryption)) {

    // find end index of decription element
    let endPosition = decryption.match(regEndBracket).index;

    // reverse the string to find the first itteration of an opening bracket, to
    // find the start of the deepest encryption. subtract it from length to use
    // it in the array in the correct order
    reverse = decryption.split('').reverse().join('');
    let startPosition = decryption.length - reverse.match(regStartBracket).index;

    // make a substring from the start and end position, excluding the closing
    // bracket for convenience
    subString = decryption.slice(startPosition-2,endPosition);
    let subStringReplaceLength = subString.length+1

    // split the string at the opening bracket to create an array with the value
    // of number of iterations and the string to be repeated
    subString = subString.split('[');

    // repeat
    subString = subString[1].repeat(subString[0]);

    // use array method splice to insert our new decrypted string back into the
    // encryption for further itteration
    decryption = decryption.split('')
    decryption.splice(startPosition-2,subStringReplaceLength,subString);
    decryption = decryption.join('');

  }

  // blamo!
  console.log(decryption)
  return decryption

}

decodeString('4[ab]');
decodeString('2[b3[a]]');
