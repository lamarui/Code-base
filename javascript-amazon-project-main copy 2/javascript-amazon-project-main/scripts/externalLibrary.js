 import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

 const today = dayjs();
 const date = today.add(5, 'days');
 console.log(date.format('MMMM D'));

 const oneMonth = today.add(1, 'month');
 console.log(oneMonth.format('MMMM D'));

 const monthLater = today.subtract(1, 'month');
 console.log(monthLater.format('MMMM D'))

 console.log(`Day of Weeks ${today.format('dddd')}`)
 
 function isWeekend(date) {
    const today = dayjs();
    if (date.format('dddd') === 'Saturday' || date.format('ddd') === 'Sunday' ) {
        return `The day is ${date.format('ddd')}`
    } 
    return
 }

 console.log(isWeekend(today));