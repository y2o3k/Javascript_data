const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 21},
    {name: '혜림', age: 3},


];

const myFriend = arr.find(a => a.age == 6);
console.log(myFriend);