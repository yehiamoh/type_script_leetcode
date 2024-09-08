function isValidSudoku(board: string[][]): boolean {
   let columnHash = new Map();
   let rowHash = new Map();
   let threebythreeHash = new Map();
   for (let i = 0; i < board.length; i++) {
   columnHash.clear();
    rowHash.clear();
     for (let j = 0; j < board.length; j++) {
       if (board[i][j] !== "." ) {
         columnHash.set(board[i][j], (columnHash.get(board[i][j]) || 0) + 1);
       }
       if( board[j][i] !== "."){
          rowHash.set(board[j][i], (columnHash.get(board[j][i]) || 0) + 1);
       }
     }
   }
   let girds = [
     [0, 0],
     [0, 3],
     [0, 6],
     [3, 0],
     [3, 3],
     [3, 6],
     [6, 0],
     [6, 3],
     [6, 6],
   ];
 
   for (let [startRow, startColumn] of girds) {
      threebythreeHash.clear();
     for (let row = startRow; row < startRow + 3; row++) {
       for (let col = startColumn; col < startColumn + 3; col++) {
         if (board[row][col] !== ".") {
           threebythreeHash.set(
             board[row][col],
             (threebythreeHash.get(board[row][col]) || 0) + 1
           );
         }
       }
     }
   }
 
   for (let value of columnHash.values()) {
     if (value > 1) return false;
   }
   for (let value of rowHash.values()) {
     if (value > 1) return false;
   }
   for (let value of threebythreeHash.values()) {
     if (value > 1) return false;
   }
   return true;
 }
 