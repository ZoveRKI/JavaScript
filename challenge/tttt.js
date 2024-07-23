var numbers = [1, 2, 3];

a=numbers.map(function (n) {
  return n + 1;
});

console.log(a)
console.log(numbers)
console.log('--------------------------------')

b=[1, 2, 3].map(function(elem, index, arr) {
    console.log(arr+':'+index)
    return elem * index;
});

console.log('-------------')
console.log(b)
console.log('-------------')

var arr = ['a', 'b', 'c'];

b2=[1, 2].map(function (e) {
  return this[e];
}, arr)
console.log(b2)

console.log('-------------------------------')

c=[1, 2, 3, 4, 5].filter(function (elem) {
    return (elem > 3);
});

console.log(c)
console.log('-------------------------------')

d=[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
    return index % 2 === 0;
});

console.log(d)      //返回偶数位置的值
console.log('-------------------------------')

var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
e=arr.filter(myFilter, obj) // [8, 4, 9]

console.log(e)
console.log('-------------------------------')

f=[1, 2, 3, 4, 5].reduce(function (a, b) {
    console.log(a, b);
    return a + b;
})

console.log(f)
console.log('-------------------------------')

// [1, 2, 3, 4, 5].reduce(function (
//     a,   // 累积变量，必须
//     b,   // 当前变量，必须
//     i,   // 当前位置，可选
//     arr  // 原数组，可选
//   ) {},init)
// 累积变量。第一次执行时，默认为数组的第一个成员；以后每次执行时，都是上一轮的返回值。
// 当前变量。第一次执行时，默认为数组的第二个成员；以后每次执行时，都是下一个成员。
// 当前位置。一个整数，表示第二个参数（当前变量）的位置，默认为1。
// 原数组。

g=[1, 2, 3, 4, 5].reduce(function (a, b) {
    return a + b;
  }, 10);       //建议加上第二个参数，防止空数组报错

  console.log(g)
  console.log('-------------------------------')




















