 import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
 import { isWeekend } from './isWeekend.js';
 const today = dayjs();
 const date = today.add(5, 'days');
 console.log(date.format('MMMM D'));

 const oneMonth = today.add(1, 'month');
 console.log(oneMonth.format('MMMM D'));

 const monthLater = today.subtract(1, 'month');
 console.log(monthLater.format('MMMM D'))

 console.log(`Day of Weeks ${today.format('dddd')}`)
 


 
      date = dayjs().add(6, 'day');
      console.log(date.format('dddd, MMMM D'));
      console.log(isWeekend(date));