

function findMax(number1, number2) {
    return (number1 * (number2 * .0333 + 1));
}


function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = findMax(addend1, addend2);

    document.querySelector('#sum').value = result;
}

const fs = require(fs)

let data = findMax()

fs.writeFile('yourworkouts.txt', data, (err) => {
      
    if (err) throw err;
})

document.querySelector('#findMax').addEventListener('click', addNumbers);

 