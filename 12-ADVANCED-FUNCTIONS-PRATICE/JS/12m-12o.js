function addNum(array, num) {
    return array.map((item) => {
        return item + num
    }
    )
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([]));

function removeEggs(foods) {
    return foods.filter((item) => {
if (item === 'egg') {
    return false;
} else {
    return true;
}
})
}

function removeTwoEggs(foods) {
    let eggCount = 0;


    return foods.filter((item) => {
if (item === 'egg' && eggCount < 2) {
    eggCount++
    return false;
}

    return true;

})
}
console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']))
console.log(removeTwoEggs(['egg', 'apple', 'egg', 'egg', 'ham']))