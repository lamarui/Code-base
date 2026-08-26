const add = function (params) {
    console.log(2 + 3)    
}

add();

function runTwice(fun){
fun();
fun();
}

runTwice(function () {console.log('12b')
})

runTwice(add)
function updateButton() {
const buttonElement = document.querySelector('.basic-button');
console.log(buttonElement)
buttonElement.addEventListener('click', () => {
    buttonElement.innerHTML = 'Loading...'
    
    setTimeout(() => {
    buttonElement.innerHTML = 'Finished!';
}, 1000)
});
}

const cartElement = document.querySelector('.add-to-cart');

let timeoutID;
cartElement.addEventListener('click', () => {
    document.querySelector('.sub-space').innerHTML = 'Added'

    clearTimeout(timeoutID);
  timeoutId =  setTimeout(() => {
        document.querySelector('.sub-space').innerHTML = '';
    }, 2000) 


});