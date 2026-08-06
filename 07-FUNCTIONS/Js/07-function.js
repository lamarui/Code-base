function greet(name) {
    

    if(!name) {
        console.log('Hi there!')
    } else {
        console.log(`Hello! ${name}`)
    }
}

greet();

function convertToFahrenheit(celsius) {
    const result = (celsius * 9 / 5) + 32
    return result
    
}
convertToFahrenheit(25)


function convertToCelsius(fahrenheit) {
    const result = (fahrenheit - 32) * 5 / 9
    return result
}

console.log(convertToCelsius(86));

function convertTemperature(degree, unit) {
    if (unit ==='C') {
         const result = convertToFahrenheit(degree);
         return `${result}F`;
    } else if(unit === 'F'){
        const result = convertToCelsius(degree);
        return `${result}C`;
    }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'))


function convertLength(length, from, to) {
    if ( from === 'miles' && to === 'km') {
         const result = length * 1.6;
      return `${result} km`

    } else if (from === 'km' && to === 'miles') {
        const result = length / 1.6;
        return `${result} miles`
    }else if(from === 'miles' && 'ft') {
        const result = length * 5280;
        return `${result} ft`
    }
    else if(from === 'km' && 'ft'){
        const result = length  * 3281;
        return `${result} ft`

    }else {
        return `Invalid unit! ${from, to}`;
    }
}

console.log(convertLength(5,'miles','km'))
console.log(convertLength(5,'miles','ft'))
console.log(convertLength(50,'km','ft'))

//Challlenge Excersises

