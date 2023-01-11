let i = 0;

function foo() {
    i =1;
    let j =2;
    if (true) {
        console.log(i);
        console.log(j);
    }
}

foo();

function foo() {
    let i = 0;
    if (true) {
      let i = 1
      console.log(i)  
    }
    console.log(i)
}

// function foo() {
//     if (true) {
//         let h = 0
//     }
//     console.log(h)
// }

const prueba = 1
prueba ++
console.log(prueba)

