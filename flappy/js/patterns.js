const generateCoinLine = function generateCoinLine(xStart, yStart, yDelta, length, height) {
    const coins = [];
    const yDeltaAbs = Math.abs(yDelta);
    const ySign = yDelta === 0 ? 0 : yDelta / yDeltaAbs;
    for (let i = 0; i < length; i++) {

        for (let j = 0; j < height; j++) {
            coins.push({
                x: xStart + i,
                y: yStart + j + ySign * Math.floor(i * yDeltaAbs),
                type: 'o',
            });
        }
    }
    return coins;
};

const generateCoinCheckered = function generateCoinCheckered(xStart, yStart, length, height, invert = false) {
    const coins = [];
    const parity = invert ? 1 : 0;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < height; j++) {
            if ((i + j) % 2 === parity) {
                coins.push({
                    x: xStart + i,
                    y: yStart + j,
                    type: 'o',
                });
            }
        }
    }

    return coins;
};

const generateCoinDiamond = function generateCoinDiamond(xCenter, yCenter, centerA = true) {
    return [
        { x: xCenter, y: yCenter, type: centerA ? '*': 'o'},
        { x: xCenter + 1, y: yCenter, type: 'o'},
        { x: xCenter - 1, y: yCenter, type: 'o'},
        { x: xCenter, y: yCenter + 1, type: 'o'},
        { x: xCenter, y: yCenter - 1, type: 'o'},
    ];
};
const generateCoinSquare = function generateCoinSquare(xCenter, yCenter, centerA = true) {
    return [
        { x: xCenter, y: yCenter, type: centerA ? '*' : 'o'},
        { x: xCenter + 1, y: yCenter + 1, type: 'o'},
        { x: xCenter + 1, y: yCenter, type: 'o'},
        { x: xCenter + 1, y: yCenter - 1, type: 'o'},
        { x: xCenter - 1, y: yCenter, type: 'o'},
        { x: xCenter - 1, y: yCenter + 1, type: 'o'},
        { x: xCenter - 1, y: yCenter - 1, type: 'o'},
        { x: xCenter, y: yCenter + 1, type: 'o'},
        { x: xCenter, y: yCenter - 1, type: 'o'},
    ];
};

var easySpawnPatterns = [

[
    // squeeze top
    { x: 2, y: 0, type: 'g'},
    { x: 7, y: 4, type: 'c'},
    { x: 8, y: 0, type: 'g'},
    { x: 19, y: 3, type: 'c'},
    // risky coins in between
    { x: 3, y: 9, type: 'o'},
    { x: 3, y: 10, type: 'o'},
    { x: 4, y: 9, type: 'o'},
    { x: 4, y: 10, type: 'o'},
    { x: 5, y: 9, type: 'o'},
    { x: 5, y: 10, type: 'o'},
    { x: 6, y: 9, type: 'o'},
    { x: 6, y: 10, type: 'o'},
    { x: 7, y: 9, type: 'o'},
    { x: 7, y: 10, type: '*'},
    { x: 8, y: 9, type: 'o'},
    { x: 8, y: 10, type: 'o'},
    { x: 9, y: 9, type: 'o'},
    { x: 9, y: 10, type: 'o'},
    { x: 10, y: 9, type: 'o'},
    { x: 10, y: 10, type: 'o'},
    { x: 11, y: 9, type: 'o'},
    { x: 11, y: 10, type: 'o'},
].concat(
    generateCoinLine(5, 1, 0, 6, 2),
    generateCoinLine(13, 1, 2, 5, 3),
    generateCoinSquare(23, 14)),
[
    // wall bottom

    { x: 10, y: 0, type: 'c'},
    { x: 24, y: 7, type: 'c'},

    // cluster
    { x: 2, y: 0, type: '*'},
    { x: 2, y: 2, type: 'o'},
    { x: 2, y: 4, type: 'o'},
    { x: 3, y: 0, type: 'o'},
    { x: 3, y: 2, type: 'o'},
    { x: 3, y: 4, type: 'o'},
    { x: 4, y: 0, type: 'o'},
    { x: 4, y: 2, type: 'o'},
    { x: 4, y: 4, type: '*'},
    { x: 5, y: 0, type: 'o'},
    { x: 5, y: 2, type: 'o'},
    { x: 5, y: 4, type: 'o'},
    { x: 6, y: 0, type: '*'},
    { x: 6, y: 2, type: 'o'},
    { x: 6, y: 4, type: 'o'},
].concat(generateCoinLine(11, 8, -0.5, 8, 3)),
[
    { x: 1, y: 4, type: '_'},
    { x: 16, y: -1, type: 'c'},
    { x: 9, y: 8, type: '_'},
    { x: 14, y: 9, type: '_'},
].concat(
    generateCoinSquare(6, 7),
    generateCoinCheckered(9, 0, 7, 8, false),
    generateCoinSquare(18, 6),
    generateCoinCheckered(1, 1, 7, 2),
    generateCoinLine(8, 11, 0.35, 6, 2),
    generateCoinDiamond(17, 12, false),
    generateCoinLine(21, 12, -0.35, 6, 2),
),
[
    { x: 9, y: 8, type: '_'},
].concat(
    generateCoinLine(10, 1, 0, 6, 1),
    generateCoinLine(10, 6, 0, 6, 2),
    generateCoinLine(9, 11, 0, 8, 3),
    generateCoinDiamond(4, 8),
    generateCoinDiamond(20, 8),
),
[
    // block top
    { x: 9, y: 5, type: 'c'},
    { x: 23, y: 0, type: 'g'},
].concat(
    generateCoinSquare(11, 2),
    generateCoinLine(5, 5, -1, 4, 3),
    generateCoinLine(14, 2, 1, 4, 3),
    generateCoinDiamond(11, 13),
    generateCoinCheckered(1, 9, 3, 3),
    generateCoinCheckered(19, 9, 3, 3),
    generateCoinDiamond(8, 12, false),
    generateCoinDiamond(14, 12, false),
),
];

// c -> cloud cactus
// g -> ground cactus
// o -> 1 coin
// * -> amp coin
var spawnPatterns = [
    [
        { x: 0, y: 0, type: 'g'},
        { x: 2, y: 0, type: 'g'},
        { x: 1, y: 4, type: '_'},
        { x: 16, y: -1, type: 'c'},
        { x: 9, y: 8, type: '_'},
        { x: 14, y: 9, type: '_'},
        { x: 20, y: 0, type: 'c'},
    ].concat(
        generateCoinSquare(6, 7),
        generateCoinCheckered(9, 0, 7, 8, false),
        generateCoinSquare(18, 6),
        generateCoinCheckered(1, 1, 7, 2),
        generateCoinLine(8, 11, 0.35, 6, 2),
        generateCoinDiamond(17, 12, false),
        generateCoinLine(21, 7, 0.35, 6, 2),
        generateCoinLine(21, 11, -0.35, 6, 2),
    ),
    [
        // squeeze top
        { x: 3, y: 4, type: 'c'},
        { x: 2, y: 0, type: 'g'},
        { x: 7, y: 4, type: 'c'},
        { x: 5 , y: 0, type: 'g'},
        { x: 8, y: 0, type: 'g'},
        // risky coins in between
        { x: 3, y: 9, type: 'o'},
        { x: 3, y: 10, type: 'o'},
        { x: 4, y: 9, type: 'o'},
        { x: 4, y: 10, type: '*'},
        { x: 5, y: 9, type: 'o'},
        { x: 5, y: 10, type: 'o'},
        { x: 6, y: 9, type: '*'},
        { x: 6, y: 10, type: 'o'},
        { x: 7, y: 9, type: '*'},
        { x: 7, y: 10, type: '*'},
        { x: 8, y: 9, type: '*'},
        { x: 8, y: 10, type: 'o'},
        { x: 9, y: 9, type: 'o'},
        { x: 9, y: 10, type: 'o'},
        { x: 10, y: 9, type: 'o'},
        { x: 10, y: 10, type: '*'},
        { x: 11, y: 9, type: 'o'},
        { x: 11, y: 10, type: 'o'},
        // force down
        { x: 17, y: -1, type: 'c'},
        { x: 19, y: 3, type: 'c'},
    ].concat(
        generateCoinLine(5, 1, 0, 6, 2),
        generateCoinLine(12, 1, 2, 5, 3),
        generateCoinSquare(17, 15),
        generateCoinSquare(23, 14)),
    [
        // wall bottom
        { x: 2, y: 6, type: 'c'},
        { x: 2, y: 0, type: 'g'},
        { x: 5, y: 0, type: 'g'},

        { x: 10, y: 0, type: 'c'},
        { x: 14, y: 0, type: 'g'},
        { x: 24, y: 7, type: 'c'},

        // cluster
        { x: 2, y: 0, type: '*'},
        { x: 2, y: 2, type: 'o'},
        { x: 2, y: 4, type: 'o'},
        { x: 3, y: 0, type: 'o'},
        { x: 3, y: 2, type: 'o'},
        { x: 3, y: 4, type: 'o'},
        { x: 4, y: 0, type: 'o'},
        { x: 4, y: 2, type: 'o'},
        { x: 4, y: 4, type: '*'},
        { x: 5, y: 0, type: 'o'},
        { x: 5, y: 2, type: 'o'},
        { x: 5, y: 4, type: 'o'},
        { x: 6, y: 0, type: '*'},
        { x: 6, y: 2, type: 'o'},
        { x: 6, y: 4, type: 'o'},

        { x: 11, y: 12, type: '*'},
    ].concat(generateCoinLine(11, 8, -0.5, 8, 3)),
    [
        // block top
        { x: 0, y: 0, type: 'c'},
        { x: 9, y: 5, type: 'c'},
        { x: 18, y: 0, type: 'c'},

        { x: 23, y: 0, type: 'g'},
    ].concat(
        generateCoinSquare(11, 2),
        generateCoinLine(5, 5, -1, 4, 3),
        generateCoinLine(14, 2, 1, 4, 3),
        generateCoinDiamond(11, 13),
        generateCoinSquare(2, 10, false),
        generateCoinSquare(20, 10, false),
        generateCoinDiamond(8, 12, false),
        generateCoinDiamond(14, 12, false),
    ),
]
