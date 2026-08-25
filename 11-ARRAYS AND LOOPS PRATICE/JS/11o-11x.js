 let words = ['', 'words', 'search', 'good', 'search'];


let index = -1;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
    index = i     
    break;
    }
}

console.log(index)

function findIndex(array, word) {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return i;
        } 

        
        
    }
    return -1;
}
function unique(array){
    let noDuplicates = [];
    for (let i = 0; i < array.length; i++) {
        if (findIndex(noDuplicates, array[i]) === -1) {
        noDuplicates.push(array[i])
        }
        
    }

    return noDuplicates
}

function removeEgg(foods) {
    const newArray = []
    let eggsRemoved = 0;
    for (let i = 0; i < foods.length; i++) {
        if (foods.reverse([i]) === 'egg' && eggsRemoved < 2) {
            
            eggsRemoved++;
            continue;
        }
    
        newArray.push(foods[i])
    }
    
    return newArray;
}

function removeEggTwo(foods) {
    const newArray = []
    let eggsRemoved = 0;
    const foodsCopy = foods.slice();
    const reversedFoods = foodsCopy.reverse();
    for (let i = 0; i < reversedFoods.length; i++) {
        if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            continue;
        }
    
        newArray.push(reversedFoods[i])
    }
    
    return newArray.reverse;
}
    
    
// console.log(findIndex(['green','red', 'blue', 'red'], 'red'))
// console.log(removeEgg(['egg', 'apple','egg', 'egg', 'ham']))
 console.log(removeEggTwo(['egg', 'apple', 'egg', 'egg', 'ham']));
  console.log(unique(['green', 'red', 'blue', 'red']));
      console.log(unique(['red', 'green', 'green', 'red']))