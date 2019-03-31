/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

function dfsMark(board, x, y, target, mark)
{
    for (const direction of directions) {
        let newX = x + direction[0];
        let newY = y + direction[1];

        if (newX >= 0 && newY >= 0 && newX < board[0].length && newY < board.length && board[newY][newX] === target)
        {
            board[newY][newX] = mark;
            dfsMark(board, newX, newY, target, mark);
        }
    }
}

var solve = function(board) {
    if (board.length === 0) return;

    let target = 'O';
    let mark = '#';

    for (let y = 0; y < board.length; ++y)
    {
        if (board[y][0] === target)
        {
            board[y][0] = mark;
            dfsMark(board, 0, y, target, mark);
        }
        if (board[y][board[0].length-1] === target)
        {
            board[y][board[0].length-1] = mark;
            dfsMark(board, board[0].length-1, y, target, mark);
        }
    }

    for (let x = 0; x < board[0].length; ++x)
    {
        if (board[0][x] === target)
        {
            board[0][x] = mark;
            dfsMark(board, x, 0, target, mark);
        }
        if (board[board.length-1][x] === target)
        {
            board[board.length-1][x] = mark;
            dfsMark(board, x, board.length-1, target, mark);
        }
    }

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            const element = board[y][x];
            if (element === target)
            {
                board[y][x] = 'X'
            }
            else if (element === mark)
            {
                board[y][x] = target;
            }
        }        
    }
};


solve(
    [
    ["O","O","O","O","X","X"],
    ["O","O","O","O","O","O"],
    ["O","X","O","X","O","O"],
    ["O","X","O","O","X","O"],
    ["O","X","O","X","O","O"],
    ["O","X","O","O","O","O"]]);