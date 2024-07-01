function getNumbersList (inputNumbers) {

     //Check for empty string
    if(inputNumbers === ''){
        return [];
    }

    let delimiters = [',', '\n'];
    if (inputNumbers.startsWith('//')) {
        const delimiterPart = inputNumbers.split('\n')[0];
        inputNumbers = inputNumbers.substring(delimiterPart.length + 1);
        if (delimiterPart.includes('[')) {
            delimiters = delimiterPart.match(/\[([^\]]+)\]/g).map(d => d.slice(1, -1));
        } else {
            delimiters.push(delimiterPart[2]);
        }
    }
    const delimiterPattern = new RegExp(delimiters.map(d => d.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('|'));
    const numberList = inputNumbers.split(delimiterPattern).map(Number);
    return numberList;
}

export default getNumbersList;