
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix) || !matrix.length) {
        return [];
    }
    return matrix.reduce((acc, cur, i) => {
        if (i % 2 === 0) {
            return acc.concat(cur);
        } else {
            if (i % 2 !== 0) {
                return acc.concat(cur.reverse());
            }
        }
        return acc;
    });
};



