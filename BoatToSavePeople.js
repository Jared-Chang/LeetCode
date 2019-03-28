/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people = people.sort((a, b) => { return a-b; });

    let i = 0, j = people.length - 1;
    let count = 0;
    while (people.length > 0)
    {
        if (people[i] + people[j] > limit)
        {
            i++;
        }
        else 
        {   
            if (i === j)
            {
                people.pop();
            }
            else 
            {
                people.pop();
                people.splice(i, 1);
            }
            i = 0;
            j = people.length - 1;
            count++;
        }
    }

    return count;
};