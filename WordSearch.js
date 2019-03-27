/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

function dfs(board, mark, x, y, word, targetIndex)
{
    if (targetIndex === word.length) { return true; }

    for (let dir of dirs)
    {
        let nextX = x + dir[0];
        let nextY = y + dir[1];

        if (nextX < 0 || nextX >= board[y].length || nextY < 0 || nextY >= board.length || mark[nextY][nextX] || board[nextY][nextX] !== word[targetIndex]) continue;

        mark[nextY][nextX] = true;
        if (dfs(board, mark, nextX, nextY, word, targetIndex + 1)) { return true; }
        mark[nextY][nextX] = false;
    }

    return false;
}

var exist = function(board, word) {
    mark = Array.from({length: board.length}, e => Array.from({length: board[0].length}, f => false));
    for (let x = 0; x < board[0].length; ++x)
    {
        for (let y = 0; y < board.length; ++y)
        {
            if (word[0] === board[y][x])
            {
                mark[y][x] = true;
                if(dfs(board, mark, x, y, word, 1)) return true;
                mark[y][x] = false;
            }
        }
    }

    return false;
};

console.log(exist([["A"]], "A"))