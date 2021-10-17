console.log(arrowTitle);

/* Longest Word */

/*  
write a function to return the largest word in the string
*/

const longestWord = (str) => {
  for (let i = 0; i < str.length; i++) {
    let word = ''
    let word_str = str.split(" ");
    if (word_str[i].length > word.length) {
      word=word_str[i];
      return word;
    }
  }
};

/* 
Examples:
longestWord('time dog cat'); // => 'time'
longestWord('we love cats'); // => 'love'
longestWord('dogs and cats are cute'); => "dogs"
longestWord(''); // => 'it's empty string'


*/
