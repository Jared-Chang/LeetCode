/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    if (amount === 0) { return 0; }

    let stairs = Array(amount + 1).fill(amount + 1);

    stairs[0] = 0;

    for (let i = 1; i < stairs.length; ++i) {
        for (let j = coins.length - 1; j >= 0; j--) {
            const step = coins[j];
            if (i - step >= 0) {
                stairs[i] = Math.min(stairs[i - step] + 1, stairs[i]);
            }
        }
    }

    return stairs[amount] === amount + 1 ? -1 : stairs[amount];
};

console.log(coinChange([2,5,10,1],
    27))