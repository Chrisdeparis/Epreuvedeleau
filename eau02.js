// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

function func1(){
    for(let i=0; i<10; i++){
        for(let j=0; j<10; j++){
            for(let k=0; k<10; k++){
                for(let l=0; l<10; l++){
                    
                    console.log(i + '' + j + ', ' + k + '' + l);
                    
                }
            }    
        }
    }      
}

func1();