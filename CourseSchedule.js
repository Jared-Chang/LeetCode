/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function findCycle(table, visited, current)
{
    if (visited[current])
    {
        return true;
    }

    for (let i = 0; i < table[current].length; ++i)
    {
        visited[current] = true;
        if (findCycle(table, visited, table[current][i])) { return true; }
        visited[current] = false;
    }
    

    return false;
}

var findOrder = function(numCourses, prerequisites) {
    let table = Array.from(({length: numCourses}), e => []);

    prerequisites.forEach(pair => { table[pair[0]].push(pair[1]); });

    let visited = Array.from(({length: numCourses}), e => false);

    let anyCycle = false;
    for (let i = 0; i < numCourses; ++i)
    {
        anyCycle |= findCycle(table, visited, i);
    }

    return !anyCycle;
};

console.log(findOrder(4, [[2,0],[1,0],[3,1],[3,2],[1,3]]))