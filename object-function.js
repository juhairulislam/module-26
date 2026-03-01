let students = [ {
    name : 'Juhairul Islam',
    roll : 130, 
    address : 'Lalmonirhat'
} ,


{
    name : 'Ishrat Jahan ' ,
    roll : 19 ,
    address : 'Rongpur'
}

]


let names = students.map(student => student.name) ;

delete students[0]

console.log(students)