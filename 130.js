/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const n = board.length;
    const m = board[0].length;
    const q = [];

    for (var i = 0; i < n; i++) {
        // left edge
        if (board[i][0] === "O") {
            q.push({ row: i, col: 0 });
        }

        // right edge
        if (board[i][m - 1] === "O") {
            q.push({ row: i, col: m - 1 });
        }
    }

    for (var i = 0; i < m; i++) {
        // top edge
        if (board[0][i] === "O") {
            q.push({ row: 0, col: i });
        }

        // bottom edge
        if (board[n - 1][i] === "O") {
            q.push({ row: n - 1, col: i });
        }
    }

    const directions = [0, 1, 0, -1, 0];
    while (q.length) {
        const { row, col } = q.shift();
        board[row][col] = "S";

        for (var i = 0; i < directions.length - 1; i++) {
            if (
                row + directions[i] >= 0 &&
                row + directions[i] < n - 1 &&
                col + directions[i + 1] >= 0 &&
                col + directions[i + 1] < m - 1 &&
                board[row + directions[i]][col + directions[i + 1]] === "O"
            ) {
                q.push({
                    row: row + directions[i],
                    col: col + directions[i + 1],
                });
            }
        }
    }

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            }

            if (board[i][j] === "S") {
                board[i][j] = "O";
            }
        }
    }

    return board;
};
