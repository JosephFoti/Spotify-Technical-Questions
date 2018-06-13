/* Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the
order they occur in the string t. You can assume t will not have repetitive
haracters. For s = "weather" and t = "therapyw", the output should be
sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should
be sortByString(s, t) = "oodg". */

function sortByStrings(s,t) {

  let res = [];
  // for each character in string t, test if t[i] === s[j], if so push to result array.
  for (let charT of t) {
    // if character T is not in string S, skip char T. Unessecary but saves time.
    if (!s.split('').includes(charT)) continue;
    for (let charS of s) {
      if (charT === charS) res.push(charS);
    }
  }

  return res;

}


console.log(sortByStrings('weather','therapyw'));
