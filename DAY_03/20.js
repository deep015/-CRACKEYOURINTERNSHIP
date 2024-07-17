const gameOfLife = (board) => {
    const m = board.length;
    const n = board[0].length;

    // Create a copy of the board to store the next state
    const nextBoard = new Array(m).fill().map(() => new Array(n).fill(0));

    // Direction vectors for 8 possible neighbors
    const directions = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1]
    ];

    // Function to count live neighbors
    const countLiveNeighbors = (r, c) => {
        let count = 0;
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 1) {
                count++;
            }
        }
        return count;
    };

    // Iterate through each cell in the board
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const liveNeighbors = countLiveNeighbors(r, c);

            // Apply rules based on current cell's state and its live neighbors
            if (board[r][c] === 1) {
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    nextBoard[r][c] = 0; // Cell dies due to under-population or over-population
                } else {
                    nextBoard[r][c] = 1; // Cell lives on to the next generation
                }
            } else {
                if (liveNeighbors === 3) {
                    nextBoard[r][c] = 1; // Cell becomes alive due to reproduction
                } else {
                    nextBoard[r][c] = 0; // Cell remains dead
                }
            }
        }
    }

    // Copy the next state back to the original board
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            board[r][c] = nextBoard[r][c];
        }
    }
};

// Example usage:
const board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];
gameOfLife(board);
console.log(board); // Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]