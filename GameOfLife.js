/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const directions = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];

function getNeighbors(board, x, y)
{
    let count = 0;

    for (const direction of directions) {
        let newX = x + direction[0];
        let newY = y + direction[1];

        if (newX < 0 || newX >= board[0].length || newY < 0 || newY >= board.length)
        {
            continue;
        }

        count += board[newY][newX];
    }

    return count;
}

var gameOfLife = function(board) {
    let nextState = Array.from(({length: board.length}), e => Array(board[0].length).fill(0));

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            let neighbors = getNeighbors(board, x, y);

            if (value === 0)
            {
                nextState[y][x] =  neighbors === 3 ? 1 : 0;
            }
            else
            {
                if (neighbors < 2)
                {
                    nextState[y][x] = 0;
                }
                else if (neighbors < 4)
                {
                    nextState[y][x] = 1;
                }
                else
                {
                    nextState[y][x] = 0;
                }
            }
        });
    });

    board.forEach((row, y) => {
        row.forEach((value, x) => {
            board[y][x] = nextState[y][x];
        });
    });
};

console.log(JSON.stringify(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])))