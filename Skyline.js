/**
 * @param {number[][]} grid
 * @return {number}
 */

function getSkylines(grid) {
    var horizonSkyline = Array.from({ length: grid.length }, e => 0);
    var verticalSkyline = Array.from({ length: grid.length }, e => 0);

    grid.forEach((line, yindex) => {
        line.forEach((height, xindex) => {
            if (height > horizonSkyline[yindex]) {
                horizonSkyline[yindex] = height;
            }

            if (height > verticalSkyline[xindex]) {
                verticalSkyline[xindex] = height;
            }
        })
    })

    return [horizonSkyline, verticalSkyline];
}

function fillExpectedGrid(expectedGrid, horizonSkyline, verticalSkyline)  {

    let cityLength =  expectedGrid.length;

    horizonSkyline.forEach((height, y) => {
        for (let x = 0; x < cityLength; ++x)
        {
            if (expectedGrid[y][x] > height)
            {
                expectedGrid[y][x] = height;
            }
        }
    });

    verticalSkyline.forEach((height, x) => {
        for (let y = 0; y < cityLength; ++y)
        {
            if (expectedGrid[y][x] > height)
            {
                expectedGrid[y][x] = height;
            }
        }
    });
}

function  calcualteIncrease(grid, expectedGrid) {

    let totalHeight = 0;
    grid.forEach((line, y) => {
        line.forEach((height, x) => {
            totalHeight += expectedGrid[y][x] - height;
        })
    })
    return totalHeight;
}

var maxIncreaseKeepingSkyline = function (grid) {

    [horizonSkyline, verticalSkyline] = getSkylines(grid);

    var expectedGrid = Array.from({ length: grid.length }, e => Array.from({ length: grid.length }, e => 101));
    fillExpectedGrid(expectedGrid, horizonSkyline, verticalSkyline)

    return calcualteIncrease(grid, expectedGrid);
};

var data = [[3, 0, 8, 4],
[2, 4, 5, 7],
[9, 2, 6, 3],
[0, 3, 1, 0]];

console.log(maxIncreaseKeepingSkyline(data));