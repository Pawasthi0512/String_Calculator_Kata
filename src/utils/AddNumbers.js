import getNumbersList from "./Helper";

function AddNumbers(inputNumbers){
    const numberList = getNumbersList(inputNumbers);

    if(numberList.length === 0){
        return 0;
    }

    const negativeNumbers = numberList.filter(n => n < 0);
    if (negativeNumbers.length) {
        throw new Error(`Negatives not allowed: ${negativeNumbers.join(', ')}`);
    }

    console.log(numberList);
    return numberList.reduce((acc, curr) => acc + curr, 0);
}

export default AddNumbers;