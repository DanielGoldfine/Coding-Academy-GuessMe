var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;
const KEY = 'quests'

function createQuestsTree() {

    var quests = loadFromLocalStorage(KEY)

    if (quests) {
        gQuestsTree = quests;
        gCurrQuest = gQuestsTree;
        gPrevQuest = null;
        return;
    }

    gQuestsTree = createQuest('Male?');

    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Queen Elizabeth');

    gCurrQuest = gQuestsTree;
    gPrevQuest = null;

    _saveQuestsToStorage(KEY, gQuestsTree);
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
    // TODO: update the gPrevQuest, gCurrQuest global vars
    gPrevQuest = gCurrQuest;
    gCurrQuest = gCurrQuest[res];
}

function addGuess(newQuestTxt, newGuessTxt, res) {
    // TODO: Create and Connect the 2 Quests to the quetsions tree
    newQuest = createQuest(newQuestTxt);
    newQuest.yes = createQuest(newGuessTxt);
    newQuest.no = gCurrQuest;

    gPrevQuest[res] = newQuest;

    _saveQuestsToStorage(KEY, gQuestsTree);

    console.log(gQuestsTree);

}

function getCurrQuest() {
    return gCurrQuest
}

function _saveQuestsToStorage(KEY, gQuestsTree) {
    saveToLocalStorage(KEY, gQuestsTree)
}

function _loadFromLocalStorage(KEY) {
    loadFromLocalStorage(KEY)
}
