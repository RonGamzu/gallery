var gNumsInRange;
var gBordSize = 4
var timerInterval;
var gStartTime = 0;

createNumsForDraw( gBordSize);
renderNums();

function changeLevel(level) {
    createNumsForDraw(level);
    renderNums();
}

function shuffle(items) {
    var j, tempItem, i;
    for (i = gBordSize * gBordSize - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tempItem = items[i];
        items[i] = items[j];
        items[j] = tempItem;
    }
    return items;
}

function createNumsForDraw(level) {
    gBordSize = level;
    var nums = [];
    for (var i = 1; i < (gBordSize ** 2) + 1; i++) {
        nums.push(i)
    }
    shuffle(nums)
    gNumsInRange = nums;
}

function getNum() {
    return gNumsInRange.pop();
}

function renderNums() {
    var elTblProducts = document.querySelector('.tbl-nums');
    var strHtml = '';
    for (var i = 0; i < gBordSize; i++) {
        strHtml += '<tr class="row">';
        for (var j = 0; j < gBordSize; j++) {
            var randomNum = getNum()
            strHtml += '<td onclick="cellClicked(this)">' + randomNum + '</td>';
        }
        strHtml += '</tr>';
    }

    elTblProducts.innerHTML = strHtml;
}

var gCurrNum = 1;
function cellClicked(clickedNum) {
    if (gCurrNum === +clickedNum.innerHTML) {
        if (gCurrNum === 1) startTimer()
        clickedNum.classList.add('selected');
        if (gCurrNum === gBordSize ** 2) {
            clearInterval(timerInterval)
        }
        gCurrNum++;
    }
}

function startTimer() {
    gStartTime = Date.now()
    var elTimer = document.querySelector('.time-place')
    timerInterval = setInterval(function () {
        currTime = (Date.now() - gStartTime) / 1000;
        elTimer.innerHTML = currTime;
    }, 100)
}


