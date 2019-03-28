/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

let direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]

var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];

    const yLen = matrix.length;
    const xLen = matrix[0].length;
    let mark = Array.from(({ length: yLen }), e => Array(xLen).fill(false));

    let x = 0;
    let y = 0;

    let result = [];
    let dirIndex = 0;
    let currentDir = direction[dirIndex];
    while (result.length < yLen * xLen) {
        while (x >= 0 && x < xLen && y >= 0 && y < yLen && !mark[y][x]) {
            result.push(matrix[y][x]);
            mark[y][x] = true;
            x += currentDir[0];
            y += currentDir[1];
        }
        x -= currentDir[0];
        y -= currentDir[1];
        dirIndex = (dirIndex + 1) % 4;
        currentDir = direction[dirIndex];
        x += currentDir[0];
        y += currentDir[1];
    }

    return result;
};