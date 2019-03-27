/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {

    if (matrix.length === 0) return false;

    let row = matrix.length;
    let col = matrix[0].length;

    let y  = row - 1;
    let x = 0;

    while (y >= 0 && x <= col - 1) {
        if (target > matrix[y][x]) {
            x++;
        }
        else if (target < matrix[y][x]) {
            y--;
        }
        else {
            return true;
        }
    }

    return false;
};


console.log(searchMatrix([[1, 1]],
    0))