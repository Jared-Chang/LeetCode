/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
/**
Euler Circuit

無向圖：每個點都是偶數條邊。相互連通。
有向圖：每個點的出邊與入邊一樣多。相互連通。

Euler Trail

無向圖 : 有奇數條邊的點有0個或2個 相互連通。

有向圖 : 恰有一點出邊比入邊多一條（作為起點），
        恰有一點入邊比出邊多一條（作為終點），
        其他的點出邊與入邊一樣多。相互連通。

題目為有向圖，又保證一定有答案，所以可以按照最小權重的走到底

*/
function sortTwoIATA(a, b)
{
    for (let i = 0; i < a.length; ++i) {
        let offset = a.charCodeAt(i) - b.charCodeAt(i);
        if (offset !== 0) {
            return offset;
        }
    }
}

function dfs(node, answer, graph)
{
    while(graph[node].length > 0)
    {
        dfs(graph[node].shift(), answer, graph)
    }

    answer.push(node);
    return answer;
}

var findItinerary = function(tickets) {
    let graph = {};

    tickets.forEach(ticket => {
        if (graph[ticket[0]])
        {
            graph[ticket[0]].push(ticket[1]);
            graph[ticket[0]].sort(sortTwoIATA);
        }
        else 
        {
            graph[ticket[0]] = [ticket[1]];
        }

        if (!graph[ticket[1]]) 
        {
            graph[ticket[1]] = [];
        }
    });

    let current = "JFK";
    let answer = dfs(current, [], graph).reverse();

    return answer;
};

console.log(JSON.stringify(findItinerary( [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]])));