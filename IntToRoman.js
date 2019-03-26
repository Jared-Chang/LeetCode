/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let indian = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    let result = "";

    indian.forEach((number, i) => {
        let numberOfRoman = Math.floor(num / number)
        result += Array.from({length: numberOfRoman}, e => roman[i]).join('');
        num %= number;
    })

    return result;
};