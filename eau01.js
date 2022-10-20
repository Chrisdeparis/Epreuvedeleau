// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.
// 012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// 987 n’est pas là parce que 789 est présent. et 987 est décroissant
// 020 n’est pas là parce que 0 apparaît deux fois.
// 021 n’est pas là parce que 012 est présent. et 021 est décroissant
// 000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.


function func1(){
    // 012 ... 789
    // Unite
    const chiffreU = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Dizaine
    const chiffreD = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Centaine
    const chiffreC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let newArray = [];
    let liste = []
    // premiere combinaison 012 et 789
    for(let i=0; i<8; i++){
        let combinaison = chiffreC[i]+''+chiffreD[i+1]+''+chiffreU[i+2];
        newArray.push((combinaison));
    }
    // on ajoute les valeurs dans la liste
    let numeroinitial = (newArray[0]);
    liste.push(numeroinitial);
    let numerofinal = (newArray[7]);
    liste.push(numerofinal);
    // on incrémente les dizaines
    for(let j=3; j<=9; j++){
        let combinaison = chiffreC[0]+''+chiffreD[1]+''+chiffreU[j];
        liste.push((combinaison));
    }
    // on calcule 23
    let n19 = liste[7];
    // on incrémente les vingtaines
    for(let k=3; k<=4; k++){
        let combinaison = chiffreC[0]+''+chiffreD[2]+''+chiffreU[k];
        // console.log(combinaison);
        liste.push((combinaison));
    }
    // ajouter ... index 10
    liste.sort();
    liste.splice(10, 0, '...');
    console.log(liste.join(', '));
}
func1();