function timeConversion(s) {
  // Write your code here
  const obj = {
    hr: s.slice(0, 2),
    min: s.slice(3, 5),
    secs: s.slice(6, 8),
    period: s.slice(8),
  };

  if (obj.period === 'PM') {
    if (obj.hr === '12') {
      return `${obj.hr}:${obj.min}:${obj.secs}`;
    } else {
      return `${parseInt(obj.hr) + 12}:${obj.min}:${obj.secs}`;
    }
  } else {
    if (obj.hr === '12') {
      return `00:${obj.min}:${obj.secs}`;
    } else {
      return `${obj.hr}:${obj.min}:${obj.secs}`;
    }
  }
}

// const s = '12:01:00AM';
const s = '12:45:54PM';

// const s = '12:01:00AM';
console.log(timeConversion(s));

//
// {
//     hr: 12,
//     min: 01,
//     secs: 00,
//     period:
// }
