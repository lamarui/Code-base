const test = document.querySelector('.js-button').classList.contains('js-button')
console.log(test)

function toggleButton() {
    const buttonElement = document.querySelector('.game-button')

    if (buttonElement.classList.contains('is-toggled')) {
        buttonElement.classList.remove('is-toggled');
        buttonElement.classList.add('game-button')
    } else {
        buttonElement.classList.remove('game-button');
        buttonElement.classList.add('is-toggled')
    }
}