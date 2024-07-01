import getNumbersList from "./Helper";

function AddNumbers(inputNumbers){
    const numberList = getNumbersList(inputNumbers);

    if(numberList.length === 0){
        return 0;
    }

    if (numberList.some(isNaN)) {
        throw new Error('Invalid input');
    }

    const negativeNumbers = numberList.filter(n => n < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }

    return numberList.filter(n => n <= 1000).reduce((acc, curr) => acc + curr, 0);
}

export default AddNumbers;