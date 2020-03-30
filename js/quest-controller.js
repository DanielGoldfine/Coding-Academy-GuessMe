'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {
    $('.game-start').hide()
    // TODO: hide the game-start section
    renderQuest();
    // TODO: show the quest section
}

function renderQuest() {
    // TODO: select the <h2> inside quest and update
    // its text by the currQuest text
    $('.quest').show()
    $('.quest h2').text(gCurrQuest.txt)
}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            $('.victory').show();
            $('.quest').hide()
        } else {
            $('.quest').hide()
            $('.new-quest').show()
        }
    } else {
        // TODO: update the lastRes global var
        gLastRes = res
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {
    // TODO: Get the inputs' values
    // TODO: Call the service addGuess
    const newGuess = $('.newGuess').val();
    const newQuest = $('.newQuest').val();

    addGuess(newQuest, newGuess, gLastRes);
    $('.newGuess').val('');
    $('.newQuest').val('');
    onRestartGame();
}


function onRestartGame() {
    $('.new-quest').hide();
    $('.game-start').show();
    $('.victory').hide();
    gLastRes = null;
    init();

}

