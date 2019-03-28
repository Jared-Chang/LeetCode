/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if (matrix.length === 0) return;

    let len = matrix.length;

    let isEven = len % 2 === 0;

    if (isEven)
    {
       matrix.forEach(array => {
           array.push(0);
       });
       matrix.push(Array(len + 1).fill(0))
    }

    len = matrix.length;

    let step = 4;
    let offset = Math.floor(len/2);

    for (let y = -offset; y < 0; ++y)
    {
        for (let x = y; x < -y; ++x)
        {
            let temp = matrix[y+offset][x+offset];
            let tempX = x;
            let tempY = y;
            for (let i = 0; i < step; ++i)
            {
                let newX = -tempY;
                let newY = tempX;
                tempX = newX;
                tempY = newY;
                newX += offset;
                newY += offset;

                temp  = temp ^ matrix[newY][newX];
                matrix[newY][newX] = temp ^ matrix[newY][newX];
                temp  = temp ^ matrix[newY][newX];
            }
        }
    }
    
    if (isEven)
    {
       matrix.forEach(array => {
           array.shift();
       });
       matrix.pop();
    }
}