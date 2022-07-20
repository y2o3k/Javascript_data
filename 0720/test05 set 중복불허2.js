//set - 중복 불허
const arr = ['one', 'two', 'three', 'four','two','one','four']
const s = new Set(arr);

console.log(arr);
console.log();

console.log(s);
console.log();

console.log([...s]); //for 을 대신 함.
