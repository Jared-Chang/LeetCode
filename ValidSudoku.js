/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let columnStep = Array(9).fill(0);
    let blockStep = Array(9).fill(0);

    for (let y = 0; y < board.length; y++) {
        let rowStep = 0;
        
        for (let x = 0; x < board[y].length; x++) {
            if (board[y][x] === ".") continue;
            
            const value = 1 << (board[y][x].charCodeAt(0) - '0'.charCodeAt(0));

            let blockIndexIn1D = Math.floor(x / 3) + Math.floor(y / 3) * 3;
            if (rowStep & value || columnStep[x] & value || blockStep[blockIndexIn1D] & value)
            {
                return false;
            }
            
            rowStep |= value;
            columnStep[x] |= value;
            blockStep[blockIndexIn1D] |= value;
        }
    }

    return true;
};

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])