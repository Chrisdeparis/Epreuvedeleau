// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
let args = process.argv.slice(2);


const calculateSum = (arr) => {
    return arr.reduce((total, current) => {
        return total + current;
    }, 0);
}

function fibonacci(n){
    const fib=[0,1];
    let result;
    for(let i =2; i<n; i++){
        fib[i] = fib[ i -1] + fib[i -2];
        
    }
    return calculateSum(fib);
}

function func1(){
    if(args <= 0 || args == '') {
        console.log(-1);
        return;
    }
    console.log(fibonacci(args));
}
func1(args);