//배열 내 값 누적 -reduce

const numArr = [1,2,3,4,5];
const result = numArr.reduce((el, acc) =>{  //acc는 누적값, el은 현재 요소값 
    return acc + el
},0); //0은 초기값

console.log(result);
