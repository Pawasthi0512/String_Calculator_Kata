function getNumbersList (inputNumbers) {

     //Check for empty string
    if(inputNumbers === ''){
        return [];
    }

    const numberList = inputNumbers.split(',').map(Number);

    return numberList;
}

export default getNumbersList;