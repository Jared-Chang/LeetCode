/**
 * @param {string} digits
 * @return {string[]}
 */

function formString(alphabetList, y, resultString, result)
{
    if (y === alphabetList.length)
    {
        if (resultString.length > 0) result.push(resultString);
        return;
    }

    for (let i = 0; i < alphabetList[y].length; ++i)
    {
        formString(alphabetList, y + 1, resultString + alphabetList[y][i], result);
    }
}

var letterCombinations = function(digits) {

    const alphabets = ['', '*', "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    let alphabetList = 
    digits.split('')
    .map(d => alphabets[parseInt(d)])
    .filter(a => { return a.length > 0; });

    let result = [];

    formString(alphabetList, 0, "", result);

    return result;
};


console.log(JSON.stringify(letterCombinations("23")));