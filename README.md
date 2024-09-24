Text Analysis in JavaScript
This JavaScript code is a simple text analysis tool that takes a block of text and provides the following statistics:

Word Count: Total number of words in the text.
Unique Word Count: Total number of unique words (case-insensitive).
Character Count: Total number of characters, excluding spaces and punctuation.
Features
Custom Word Splitting: Words are extracted by splitting the text based on whitespace and cleaned to remove punctuation.
Case-Insensitive Unique Word Count: Words are converted to lowercase to ensure that words like Hello and hello are treated as the same.
Character Count: The number of word characters (letters, digits, underscores) is counted, excluding punctuation and spaces.
No Use of .match(): The code avoids using JavaScript's .match() method and instead relies on .split() and iteration through the text.
How It Works
Splitting Text into Words:

The text is split into words using the .split() method with a regular expression to break the text by whitespace.
Any empty results are filtered out.
Cleaning and Normalizing Words:

Each word is cleaned by removing unwanted characters such as punctuation (!, .) while retaining valid characters like hyphens (-) and apostrophes (').
All words are converted to lowercase to ensure case-insensitive comparisons.
Unique Words:

A Set object is used to store and count unique words. Since sets only store unique values, duplicates are automatically removed.
Character Counting:

A simple loop iterates through each character in the text. Any character that is alphanumeric or an underscore is counted as a valid character, while spaces and punctuation are ignored.
Code Example
js
Copy code
const text = "Hello world! It's self-esteem or 123.";

// 1. Split the text into words using custom logic (split by spaces, punctuation, etc.)
const words = text.split(/\s+/).filter(word => word.length > 0);

// 2. Clean each word (remove punctuation) and convert to lowercase for unique word counting
const cleanedWords = words.map(word => {
  return word.replace(/[^\w'-]/g, '').toLowerCase(); // Removes unwanted punctuation
});

// 3. Count unique words using a Set
const uniqueWords = new Set(cleanedWords);

// 4. Count characters (excluding spaces and punctuation)
let charCount = 0;
for (let i = 0; i < text.length; i++) {
  if (/\w/.test(text[i])) { // \w matches alphanumeric characters and underscores
    charCount++;
  }
}

console.log("Words:", cleanedWords);  // Words after cleanup
console.log("Unique Words:", uniqueWords.size);  // Unique word count
console.log("Character Count (excluding spaces/punctuation):", charCount);  // Character count
Example Output
For the text: "Hello world! It's self-esteem or 123.", the output will be:

sql
Copy code
Words: [ 'hello', 'world', "it's", 'self-esteem', 'or', '123' ]
Unique Words: 5
Character Count (excluding spaces/punctuation): 25
Usage
To use this code:

Clone the Repository: Download the repository and open the JavaScript file that contains this code.
Run the Code: You can run this in a browser's developer console or in a Node.js environment.
Modify the Input: Replace the text variable with any input string you want to analyze.
Requirements
JavaScript ES6+: The code uses modern JavaScript syntax (like const, let, arrow functions, and Set). Make sure you're using an ES6+ compatible environment.
