
// You should implement your task here.

// module.exports = function towelSort (matrix) {

    const towelSort = matrix.reduce((acc, cur, i) => {
        if (typeof(matrix) === undefined) {
            return [];
        }
        if (i % 2 === 0) {
            return acc.concat(cur);
        } else {
            if (i % 2 !== 0) {
                return acc.concat(cur.reverse());
            }
        }

    });



