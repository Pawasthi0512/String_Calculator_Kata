function getNumbersList (inputNumbers) {

     //Check for empty string
    if(inputNumbers === ''){
        return [];
    }

    const delimiters = [',', '\n'];
    const numberList = inputNumbers.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);

    return numberList;
}

export default getNumbersList;