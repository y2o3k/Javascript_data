//자바스크립트 맵 객체의 크기 확인
const map = new Map();

map.set('one', 1);
map.set('two', 2);
map.set('[1,2,3]', 'Three elements');
map.set({a:'A',b:'b'}, 'object element')
map.set(function() {}, 'function element');

console.log(map.size)
