/* Bean counting

You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example, "b").
The first character has position 0, which causes the last one to be found at position string.length - 1.
In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters).Rewrite countBs to make use of this new function.

Hints:

Your function will need a loop that looks at every character in the string. It can run an index from zero to one below its length (< string.length).
If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable.
Once the loop has finished, the counter can be returned.

Take care to make all the bindings used in the function local to the function by properly declaring them with the let or const keyword. */

// My solution
const countBs = function (s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'B') {
      n += 1;
    }
  }
  return n
}

const countChar = function (s, c) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      n += 1;
    }
  }
  return n
}

// Book solution
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4