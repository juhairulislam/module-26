// for each in array 

let names = ['jion ' , 'jahin', 'rakibul', 'nur alom' , 'abdul halim'] ;

names.forEach(name=> {
    console.log(`Hello ${name} ! Khosh amded romajan .`)
}) ;

// for each in object 

let students = [ {
    name : 'Juhairul Islam',
    roll : 130, 
    address : 'Lalmonirhat',
    spouse : 'Ishrat'
} ,


{
    name : 'Ishrat Jahan ' ,
    roll : 19 ,
    address : 'Rongpur' , 
    spouse : 'Jion'
}

]


students.forEach(({name ,spouse}) => {

    console.log(`student name ${name} and marrage ${spouse} ,
        `)

})