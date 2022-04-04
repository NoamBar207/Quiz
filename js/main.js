
//על פי אינגקס מוכחי לשלוח לHTML הדפסה\אינדור
//אם השחקן צודק להתקדם למסך הבא
//quaryselectorbyID!

var gQuests = [
    { id: 1, opts: ['Played for Maccabi', 'Havent played '], correctOptIndex: 0 },
    { id: 2, opts: ['Played for Maccabi', 'Havent played '], correctOptIndex: 0 },
    { id: 3, opts: ['Played for Maccabi', 'Havent played'], correctOptIndex: 1 }
]

var gCurrQuestIdx = 0;
var gIdIdx = 0;
// init function
renderQuest();

function renderQuest() {
    strHTML = '';
    var elImg = document.querySelector('img');
    elImg.src = `/image/${gQuests[gCurrQuestIdx].id }.jpg`
    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHTML += `<button onclick="btnClicked(this)" class="btn"> ${gQuests[gCurrQuestIdx].opts[i]} </button>`;
    }
    gIdIdx++;
    // if(qCurrQuestIdx===3) console.log("HEREEEE")
    var elQuest = document.querySelector('.qustions')
    elQuest.innerHTML = strHTML;
}

function msgGenerator() {
    var elMsg = document.querySelector('.msg');
    elMsg.style.display='block';
    elMsg.innerText = 'Victory!! Wanna Go Again??';
    strHTML = `<button onclick="btnClicked2(this)" class="btn">RESET</button>`
    var elQuest = document.querySelector('.qustions')
    elQuest.innerHTML = strHTML;
   
}

function restart(elBtn){
    gCurrQuestIdx = 0;
    gIdIdx = 0;
    var elMsg = document.querySelector('.msg');
    elMsg.style.display='none';
    var elImg = document.querySelector('img');
    elImg.style.display = '';
    // elImg.style.margin = 'auto auto';
    renderQuest();
}
function btnClicked(elBtn) {

    var correctTempIndex = gQuests[gCurrQuestIdx].correctOptIndex;
    if (elBtn.innerText === gQuests[gCurrQuestIdx].opts[correctTempIndex]) {
        elBtn.style.backgroundColor = 'Green'
        gCurrQuestIdx++;
        var timeoutId = setTimeout(renderQuest, 500);
    }
    else {
        elBtn.style.backgroundColor = 'Red'
    }
    if (gCurrQuestIdx === gQuests.length) {
        console.log("HEREREEEEEE")
        var elImg = document.querySelector('img');
        elImg.style.display = 'none';
        msgGenerator(); 
    }
}
function createQuest(qCurrQuestIdx) {
    return gQuests[qCurrQuestIdx].opts;
}

