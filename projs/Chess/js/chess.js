var gBoard = createChessBoard();
var gSelectedCell = null;

console.table(gBoard);
renderBoard(gBoard);


function createChessBoard() {
    var board = [];
    for (var i = 0; i < 8; i++) {
        board[i] = [];
        for (var j = 0; j < 8; j++) {
            board[i][j] = ''
        }
    }
    board[6][5] = '♟';
    board[3][2] = '♟';
    board[7][7] = '♜';
    board[4][2] = '♖';
    board[3][4] = '♖';
    board[1][1] = '♙';
    board[2][4] = '♙';
    board[6][4] = '♞';
    board[2][6] = '♘';
    return board;
}

function renderBoard(board) {
    var elBoard = document.querySelector('.board');
    var strHtml = '';
    var isLight = true;

    for (var i = 0; i < board.length; i++) {
        strHtml += '<tr>';
        for (var j = 0; j < board[0].length; j++) {

            var cellClass = (isLight) ? 'light' : 'dark'
            cellClass += ' cell-' + i + '-' + j;
            isLight = !isLight;

            strHtml += '<td onclick="cellClicked(this, ' + i + ',' + j + ')" class="' + cellClass + '">'
            strHtml += board[i][j];
            strHtml += '</td>'
        }
        isLight = !isLight;
        strHtml += '</tr>\n';
    }

    // console.log(strHtml);
    elBoard.innerHTML = strHtml;
}

function cellClicked(elCell, cellI, cellJ) {
    if (gSelectedCell) {
        gSelectedCell.classList.remove('selected');
        gSelectedCell = null;
    }
    elCell.classList.add('selected');
    gSelectedCell = elCell;
    var piece = elCell.innerHTML;
    removeMark();
    switch (piece) {
        case '♟':
            markCellsForPawn(cellI, cellJ, 'black');
            break;
        case '♜':
            markCellsForRook(cellI, cellJ, 'black');
            break;
        case '♙':
            markCellsForPawn(cellI, cellJ, 'white');
            break;
        case '♖':
            markCellsForRook(cellI, cellJ);
            break;
        case '♞':
            markCellsForKnight(gBoard, cellI, cellJ);
            break;
        case '♘':
            markCellsForKnight(gBoard, cellI, cellJ);
            break;


    }
}
function markCellsForKnight(board, cellRowIdx, cellColIdx) {
    for (var i = cellRowIdx - 2; i <= cellRowIdx + 2; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellColIdx - 2; j <= cellColIdx + 2; j++) {
            if (i === cellRowIdx && j === cellColIdx) continue;  // center cell
            if (j < 0 || j >= board.length) continue;  //board edge
            var rowMoveCount = Math.abs(i - cellRowIdx);
            var colMovesCount = Math.abs(j - cellColIdx);
            var isValidMove = (rowMoveCount + colMovesCount === 3)
            if (board[i][j] === '' && isValidMove) {
                selector = '.cell-' + (i) + '-' + j;
                var elCell = document.querySelector(selector);
                elCell.classList.add('mark');
            }
        }
    }
}

function markCellsForRook(cellI, cellJ) {
    for (var i = cellI - 1; i >= 0; i--) {
        if (gBoard[i][cellJ] === '') {
            selector = '.cell-' + (i) + '-' + cellJ;
            var elCell = document.querySelector(selector);
            elCell.classList.add('mark');
        }
        else break;
    }

    for (var i = cellI + 1; i <= 7; i++) {
        if (gBoard[i][cellJ] === '') {
            selector = '.cell-' + (i) + '-' + cellJ;
            var elCell = document.querySelector(selector);
            elCell.classList.add('mark');
        }
        else break;
    }

    for (var j = cellJ + 1; j <= 7; j++) {
        if (gBoard[cellI][j] === '') {
            selector = '.cell-' + cellI + '-' + j;
            var elCell = document.querySelector(selector);
            elCell.classList.add('mark');
        }
        else break;
    }

    for (var j = cellJ - 1; j >= 0; j--) {
        if (gBoard[cellI][j] === '') {
            selector = '.cell-' + cellI + '-' + j;
            var elCell = document.querySelector(selector);
            elCell.classList.add('mark');
        }
        else break;
    }
}


function markCellsForPawn(cellI, cellJ, color) {
    console.log('Pawn In:', cellI, cellJ);
    var selector;
    if (color === 'white') selector = '.cell-' + (cellI + 1) + '-' + cellJ;
    else selector = '.cell-' + (cellI - 1) + '-' + cellJ;
    var elCell = document.querySelector(selector);
    elCell.classList.add('mark');
    if (cellI === 6 && color === 'black') {
        selector = '.cell-' + (cellI - 2) + '-' + cellJ
        elCell = document.querySelector(selector);
        elCell.classList.add('mark');
    } else if (cellI === 1 && color === 'white') {
        selector = '.cell-' + (cellI + 2) + '-' + cellJ
        elCell = document.querySelector(selector);
        elCell.classList.add('mark');
    }

    console.log(elCell);

}

function removeMark() {
    var elCells = document.querySelectorAll('.mark');
    for (var i = 0; i < elCells.length; i++) {
        elCells[i].classList.remove('mark');
    }
}