// const {name} = {name: 'Dr. Juhairul'} ;
// console.log(name)


// arrow destructure 

let num = [1, 2,3,4,5,5] ;

let [ one , two , three ,,,five] = num ;
console.log(two)



// Object destructure ....

let person = {
    name : 'Juhairul Islam' , 
    roll : 130 ,
    education : {
        Aleem : 'TMKM' ,
        Dakhil : 'Tista' , 
        Others : {
            hefz : 'Tista'
        } 

    }
}


let {name , roll ,education , education:{Aleem, Dakhil, Others, Others:{hefz}}} =person ;

console.log(name , roll , education , Aleem , Dakhil , Others , hefz  )