
    document.querySelector('.js-input').addEventListener('keyup', () => {
    const input = document.querySelector('.js-input');

    document.querySelector('.js-message').innerHTML = input.value;
    })
