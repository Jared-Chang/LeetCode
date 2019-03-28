/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 function traverseMatrix(m, n, action)
 {
    for (let y = 0; y < m; ++y)
    {
        for (let x = 0; x < n; ++x)
        {
            action(x, y);
        }
    }
 }

 function setColumnToZero(m, x, matrix)
 {
    for (let i = 0; i < m; ++i)
    {
        matrix[i][x] = 0;
    }
 }

 function setRowToZero(n, y, matrix)
 {
    for (let i = 0; i < n; ++i)
    {
        matrix[y][i] = 0;
    }
 }

var setZeroes = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let xMap = {};
    let yMap = {};

    traverseMatrix(m, n, (x, y) => {
        if (matrix[y][x] !== 0)
        {
            return;
        }

        xMap[x] = true;
        yMap[y] = true;
    });

    Object.keys(xMap).forEach(x => {
        setColumnToZero(m, parseInt(x), matrix);
    })
    
    Object.keys(yMap).forEach(y => {
        setRowToZero(n, parseInt(y), matrix);
    })

    return matrix;
};

console.log(JSON.stringify(setZeroes([[1,1,1],[1,0,1],[1,1,1]])));