// Créez un programme qui affiche ses arguments reçus à l’envers.

function reverse(array) {
    let output = [];
    while (array.length) {
      output.push(array.pop());
    }
    return output;
}

let args = process.argv.slice(2);
function func1() {
    if(args == ''){
        console.log("error");
        return;
    }
    console.log(reverse(args));
    
}

func1(args);