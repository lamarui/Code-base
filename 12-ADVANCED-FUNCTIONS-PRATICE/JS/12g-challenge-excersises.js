const titleElement = document.querySelector('title')
let messages = 5;

let intervalId;

    let isDisplayingNotification;

    displayNotification();

    function displayNotification() {
    if (isDisplayingNotification) {
        return;
    }        

    isDisplayingNotification = true;
    

 intervalId = setInterval(function() {
    
    
    if (document.title === 'App') {
        document.title = `(${messages}) New Messages`
    } else{
        document.title = 'App';
    }
    
}, 1000);
    }

    function stopNotification() {
        isDisplayingNotification = false;

        clearInterval(intervalId);
        document.title = 'App'
    }

const addElement = document.querySelector('.add-button')

addElement.addEventListener('click', () => {
    messages += 1;
})

const remvoveButton = document.querySelector('.remove-button')

remvoveButton.addEventListener('click', () => {
    messages -= 1;
    if (messages === 0) {
    stopNotification();
} 


})

