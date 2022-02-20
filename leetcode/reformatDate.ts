function reformatDate(date: string): string {
  const month = new Map<string, string>();
  month.set('Jan', '01');
  month.set('Feb', '02');
  month.set('Mar', '03');
  month.set('Apr', '04');
  month.set('May', '05');
  month.set('Jun', '06');
  month.set('Jul', '07');
  month.set('Aug', '08');
  month.set('Sep', '09');
  month.set('Oct', '10');
  month.set('Nov', '11');
  month.set('Dec', '12');

  const arr: string[] = date.split(' ');
  let day =
    arr[0].length === 3 ? `0${arr[0].charAt(0)}` : arr[0].substring(0, 2);
  let str = `${arr[2]}-${month.get(arr[1])}-${day}`;

  return str;
}

const date = '20th Oct 2052';

console.log(reformatDate(date));
