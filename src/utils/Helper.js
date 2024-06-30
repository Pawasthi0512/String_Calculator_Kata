function getNumbersList (inputNumbers) {

     //Check for empty string
    if(inputNumbers === ''){
        return [];
    }

    const delimiters = [',', '\n'];
    if (inputNumbers.startsWith('//')) {
        const delimiterPart = inputNumbers.split('\n')[0];
        inputNumbers = inputNumbers.substring(delimiterPart.length + 1);
        console.log(delimiterPart)
        delimiters.push(delimiterPart[2]);
      }
    const numberList = inputNumbers.split(new RegExp(`[${delimiters.join('')}]`)).map(Number);

    return numberList;
}

export default getNumbersList;