import getNumbersList from "./Helper";

function AddNumbers(inputNumbers){
    const numberList = getNumbersList(inputNumbers);

    if(numberList.length === 0){
        return 0;
    }

    console.log(numberList);
    return numberList.reduce((acc, curr) => acc + curr, 0);
}

export default AddNumbers;