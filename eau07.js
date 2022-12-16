// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!


// $> python exo.py 42
// error


function capitalize(s) {
  if (/^\d+$/.test(s)) {
    return "error";
  } else {
    let result = "";
    let words = s.split(/\s|\t|\n/);
    for (let word of words) {
      result += word[0].toUpperCase() + word.slice(1).toLowerCase() + " ";
    }
    return result.trim();
  }
}

// Test the function
let inputString = process.argv[2];
console.log(capitalize(inputString));
