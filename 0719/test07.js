//객체에서 키만 추출 
const obj ={
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const obj2 ={
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const obj3 ={
    movie: 'Sunny',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const arr = Object.keys(obj);   //키만 추출
console.log(arr);

const arr2 = Object.values(obj2); //값만 추출 
console.log(arr2);

const arr3 = Object.entries(obj3);  //객체를 배열로 변환
console.log(arr3);