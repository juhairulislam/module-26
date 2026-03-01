const add = (a, b) => (a+b) ;
// console.log(add(10,20))

const multiply = (c,d) => c*d ;
console.log(multiply(10,20))


const doMath = (e,f) => {
    const sum = e+f ;
    const subtract = e-f ;
    const multiply = e*f ;
    const division = e/f ;

    return {sum , subtract , multiply , division}


}

// console.log(doMath(10,20))


// arrow with map function 

let array = [1,2,3,4,5,6,7,8,9,10] ;

let square = array.map(num=> num*num) ;

console.log(square) ;

// array with filter function

let filterEven = array.filter(even => even % 2 === 1)

console.log(filterEven)



