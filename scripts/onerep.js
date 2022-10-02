

function findMax(number1, number2) {
    return (number1 * (number2 * .0333 + 1));
}


function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = findMax(addend1, addend2);

    document.querySelector('#sum').value = result;
}

document.querySelector('#findMax').addEventListener('click', addNumbers);

 