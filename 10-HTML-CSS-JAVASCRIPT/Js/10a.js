const test = document.querySelector('.js-button').classList.contains('js-button')
console.log(test)

function toggleButton(buttonElement) {
    
if (buttonElement.classList.contains('is-toggled')) {
    return 
}
turnOffPreviousButton();
    
        buttonElement.classList.add('is-toggled')
    }

function turnOffPreviousButton(params) {
    const onButton = document.querySelector('.is-toggled');

    if (onButton) {
        onButton.classList.remove('is-toggled')
    }
}
