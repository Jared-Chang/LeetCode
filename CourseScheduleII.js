/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

function findCycle(courseForest, visited, current, route) {
    if (visited[current]) {
        return true;
    }

    for (let i = 0; i < courseForest[current].length; ++i) {
        visited[current] = true;
        if (findCycle(courseForest, visited, courseForest[current][i], route)) { return true; }
        visited[current] = false;
    }

    if (route.indexOf(current) === -1)
        route.unshift(current);
    return false;
}

var findOrder = function (numCourses, prerequisites) {
    let courseForest = Array.from(({ length: numCourses }), e => []);

    prerequisites.forEach(pair => { courseForest[pair[1]].push(pair[0]); });

    let visited = Array(numCourses).fill(false);

    let route = [];
    for (let i = 0; i < numCourses; ++i) {
        if (findCycle(courseForest, visited, i, route)) { return []; }
    }

    return route;
};

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]))