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