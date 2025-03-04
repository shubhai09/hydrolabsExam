// Given any string, find the number of characters of the same letter. The Sequence of the output of counts should be in order in which the letters come in the word. Ignore whitespaces. Also, focus on optimizing code as much as possible.

// Example 1: Amolya Sharma
// The expected answer would be:
// A-4
// M-2
// O-1
// L-1
// Y-1
// S-1
// H-1
// R-1

// Example 1: Chinmay Kulkarni
// The expected answer would be:
// C-1
// H-1
// I-1
// N-2
// M-1
// A-2
// Y-1
// K-2
// U-1
// L-1
// R-1
// I-1

// Example 1: Amolya Sharma
// The expected answer would be:
// A-4
// M-2
// O-1
// L-1
// Y-1
// S-1
// H-1
// R-1

function countCharacters(s) {
  s = s.replace(/\s+/g, "").toLowerCase();

  const charCount = {};
  const result = [];

  for (let char of s) {
    if (!(char in charCount)) {
      result.push(char);
    }
    charCount[char] = (charCount[char] || 0) + 1;
  }
  const output = result.map(
    (char) => `${char.toUpperCase()}-${charCount[char]}`
  );

  return output.join("\n");
}

const inputString = "Amolya Sharma";
const inputString2 = "Chinmay Kulkarni";
console.log(countCharacters(inputString));
console.log(" ");
console.log(countCharacters(inputString2));
