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

    for (let item of args) {
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

let minValue = getMinAndLogMax(5, 3, 24, 65, 6, 7);
console.log(
    'Min value from array', minValue
)

//5
function block_text(text) {
    document.write(`<div>${text}</div>`)
}

block_text(`text`);

//6
function block_ul(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}

block_ul(`Text2`);

// 7
function block_ul_loop(text, n) {
    document.write(`<ul>`);
    for (let step = 0; step < n; step++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
block_ul_loop(`text`,5);

//8

function buildList(array) {
    document.write(`<ul>`);

    for(let step = 0; step < array.length; step++) {
        document.write(`<li>${array[step]}</li>`)
    }

    // array.forEach(el => document.write(`<li>${el}</li>`));

    document.write(`</ul>`);
}
buildList([65123, 2424,'ery', 'eyerghe', true, false, true])























