

// let string = 'Salut roger tu vas bien et la famille ?';
// let string = 42;
// transformer array en string pour argument
let str = process.argv.slice(2);
let args = str.toString();
let reg = /,/g;
let arg = args.replace(reg, ' ');

if (typeof arg == 'string') {
  const UpperWord = (arg) => {
    return arg
      .toLowerCase()
      .split(' ')
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(' ');
  };
  let result = UpperWord(arg);
  console.log(result);
} else {
  console.log('error');
  return;
}
