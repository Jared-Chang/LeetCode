/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s === 0) return 0;

    let array = Array.from(({length: s.length + 1}), e => 0);

    array[0] = 1;
    array[1] = s[0] === '0' ? 0 : 1;

    for (let i = 2; i <= s.length; ++i)
    {
        firstStep = parseInt(s[i-1]);
        secondStep = (s[i-2] !== '0') ? parseInt(s[i-2] + s[i-1]) : 0;
        if (firstStep > 0 && firstStep < 10)
        {
            array[i] += array[i-1];
        }
        if (secondStep >= 10 && secondStep <= 26)
        {
            array[i] += array[i-2];
        }
    }

    return array[s.length];
};