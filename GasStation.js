/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let remainList = gas.map((gas, i) => gas - cost[i]);

    let remain = 0;
    let current = 0;
    let startStation = 0;

    for (let station = 0; station < remainList.length; station++) {
        current += remainList[station];
                
        if (current < 0)
        {
            startStation = station + 1;
            total += current;
            current = 0;
        }
    }

    return current + remain >= 0 ? startStation : -1;
};

console.log(canCompleteCircuit(
    [5,1,2,3,4],
    [4,4,1,5,1]))