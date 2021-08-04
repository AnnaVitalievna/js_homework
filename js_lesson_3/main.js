//1
function comp(a, b) {
    const s = a * b;
    console.log(s);
    return s;
}

let a = 3;
let b = 2;
comp(a, b);

// 2
function calculateSquare(radius) {
    const Pi = 3.14;
    const s = Pi * radius;
    console.log(s);
    return s;
}

let r2 = 9;
calculateSquare(r2);

// 4


function getMinAndLogMax(...args) {
    let minValue = args[0];
    let maxValue = args[0];

    for (item of args) {
        if (item < minValue) {
            minValue = item
        }
        if (item > maxValue) {
            maxValue = item
        }
    }

    console.log('Max number is ', maxValue)

    return minValue;
}

let itfuy = getMinAndLogMax(5, 3, 24, 65, 6, 7);
console.log(
    'Min value from array', itfuy
)

//5
function blocktext(text){
   document.write(`<div>${text}</div>`)
}
blocktext(`text`);

//6

