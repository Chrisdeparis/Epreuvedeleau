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
    // console.log(newArray);
    // on ajoute les valeurs dans la liste
    let numeroinitial = (newArray[0]);
    liste.push(numeroinitial);
    let numerofinal = (newArray[7]);
    liste.push(numerofinal);
    // on incrémente les dizaines 013... 023, 123
    for(let k=3; k<=9; k++){
        
        // 013... 019
        let combinaison = chiffreC[0]+''+chiffreD[1]+''+chiffreU[k];
        // 023... 029
        let combinaison2 = chiffreC[0]+''+chiffreD[2]+''+chiffreU[k];
        // 123... 129
        let combinaison3 = chiffreC[1]+''+chiffreD[2]+''+chiffreU[k];
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
    }
    // on calcule 23
    // on incrémente les 020's

    // on incrémente les 030's
    for(let k=4; k<=9; k++){
        // 034... 134 234
        let combinaison = chiffreC[0]+''+chiffreD[3]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[3]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[3]+''+chiffreU[k];
        
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
    }
    // on incrémente les 040's
    for(let k=5; k<=9; k++){
        // 045... 245...345
        let combinaison = chiffreC[0]+''+chiffreD[4]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[4]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[4]+''+chiffreU[k];
        let combinaison4 = chiffreC[3]+''+chiffreD[4]+''+chiffreU[k];
        
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
        liste.push((combinaison4));
    }
    // on incrémente les 050's
    for(let k=6; k<=9; k++){
        // 056...456
        let combinaison = chiffreC[0]+''+chiffreD[5]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[5]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[5]+''+chiffreU[k];
        let combinaison4 = chiffreC[3]+''+chiffreD[5]+''+chiffreU[k];
        let combinaison5 = chiffreC[4]+''+chiffreD[5]+''+chiffreU[k];
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
        liste.push((combinaison4));
        liste.push((combinaison5));
    }
    // on incrémente les 060's
    for(let k=7; k<=9; k++){
        // 067...567
        let combinaison = chiffreC[0]+''+chiffreD[6]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[6]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[6]+''+chiffreU[k];
        let combinaison4 = chiffreC[3]+''+chiffreD[6]+''+chiffreU[k];
        let combinaison5 = chiffreC[4]+''+chiffreD[6]+''+chiffreU[k];
        let combinaison6 = chiffreC[5]+''+chiffreD[6]+''+chiffreU[k];
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
        liste.push((combinaison4));
        liste.push((combinaison5));
        liste.push((combinaison6));
    }
    // on incrémente les 070's
    for(let k=8; k<=9; k++){
        // 078...678
        let combinaison = chiffreC[0]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison4 = chiffreC[3]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison5 = chiffreC[4]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison6 = chiffreC[5]+''+chiffreD[7]+''+chiffreU[k];
        let combinaison7 = chiffreC[6]+''+chiffreD[7]+''+chiffreU[k];
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
        liste.push((combinaison4));
        liste.push((combinaison5));
        liste.push((combinaison6));
        liste.push((combinaison7));
    }
    // on incrémente les 080's ..089
    for(let k=9; k<=9; k++){
        // 089
        let combinaison = chiffreC[0]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison2 = chiffreC[1]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison3 = chiffreC[2]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison4 = chiffreC[3]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison5 = chiffreC[4]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison6 = chiffreC[5]+''+chiffreD[8]+''+chiffreU[k];
        let combinaison7 = chiffreC[6]+''+chiffreD[8]+''+chiffreU[k];
        // console.log(combinaison);
        liste.push((combinaison));
        liste.push((combinaison2));
        liste.push((combinaison3));
        liste.push((combinaison4));
        liste.push((combinaison5));
        liste.push((combinaison6));
        liste.push((combinaison7));
    }

    // ajouter 
    liste.sort();
    console.log(liste.join(', '));
}
func1();