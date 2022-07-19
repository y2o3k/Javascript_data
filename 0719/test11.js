// 정규 표현식 이용 
const str = 'To lose your path is the way to find that path';
const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi
const findRangerRegex = /([a-f])\w+/i;
const findAllRangerRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangerRegex));
console.log(str.match(findAllRangerRegex));
