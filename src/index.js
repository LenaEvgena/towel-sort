
// You should implement your task here.

// module.exports = function towelSort (matrix) {
//   return [];

    const towelSort = matrix.reduce((acc, cur) => {
        if (cur % 2 === 0 || cur === 0) {
            acc += cur;
        } else {
            if (cur % 2 !== 0) {
                acc += cur.reverse();
            }
        }
        return acc;
    }

    );



