const titleElement = document.querySelector('title')
let messages = 5;
 setInterval(function() {
    
    if (document.title === 'App') {
        document.title = `${messages} New Messages`
    } else{
        document.title = 'App';
    }
    
}, 1000)

const addElement = document.querySelector('.add-button')

addElement.addEventListener('click', () => {
    messages += 1;
})

const remvoveButton = document.querySelector('.remove-button')

remvoveButton.addEventListener('click', () => {
    messages -= 1;
})

