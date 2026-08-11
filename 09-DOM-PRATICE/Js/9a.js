const buttonElement = document.querySelector('button')

console.log(buttonElement)

// document.querySelector('.second-button').innerHTML = '9b done!';

function displayName() {
    const input = document.querySelector('.js-name-input');
    document.querySelector('.js-message').innerHTML = `Your name is: ${input.value}`;
}

    document.querySelector('.js-name-input').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            displayName();
        }
    })
