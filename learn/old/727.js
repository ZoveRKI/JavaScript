// // console.log(a);
// // var a = 1;
// //等同于
// var a;
// console.log(a);
// a = 1;

// console.log(typeof v)
// console.log(5 + null)
// console.log(Number(null))
// console.log(Number(undefined))
// console.log(
//     'key = "value"',
//     "key = 'value'"
// )   //单引号里用双引号或转义符；双引号里用单引号或转义符

// var obj = {
//     key1: 1,
//     key2: 2
// };

// console.log(Object.keys(obj))

// //函数声明
// function print(s) {
//     console.log(s);
// }

// var print2 = function (s) {
//     console.log(s);
// };

// var add = new Function(
//     'x',
//     'y',
//     'return x + y'
// );  //很不直观，几乎无人使用


// function f(a, b, c, d, e, f) {
//     return a;
// }

// console.log(f.length)

// var p = 2;

// function f(p) {
//     return p = 3;
// }       //传值传递，怎么改也不会变
// console.log(f(p))
// console.log(p)

// var obj = { p: 2 };

// function f(o) {
//     return o.p = 3;
// }       //传址传递，会影响
// console.log(f(obj))

// console.log(obj.p)

// // 注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。
// var obj = [1, 2, 3];

// function f(o) {
//     o = [2, 3, 4];
// }
// f(obj);

// console.log(obj)
// // 上面代码中，在函数f()内部，参数对象obj被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数（o）的值实际是参数obj的地址，重新对o赋值导致o指向另一个地址，保存在原地址上的值当然不受影响。

// var f = function (a, b) {
//     'use strict'; // 开启严格模式为2，不开为5
//     arguments[0] = 3;
//     arguments[1] = 2;
//     return a + b;
// }

// console.log(f(1, 1))

// //闭包
// function createIncrementor(start) {
//     return function () {
//         return start++;         //start++ 是后置递增操作符，它在返回 start 当前值之后才执行递增操作
//         // return ++start;         //++start 是前置递增操作符
//     };
// }

// var inc = createIncrementor(5);      //当作表达式时，函数可以定义后直接加圆括号调用

// console.log(inc)        //返回的是一个函数，只是源码
// console.log(inc())      //函数不停调用，而start没有被释放，就会一直叠加
// console.log(inc())      //圆括号()跟在函数名之后，表示调用该函数
// console.log(inc())

// //利用闭包，封装对象的私有属性和方法
// function Person(name) {
//     var _age;
//     function setAge(n) {
//         _age = n;
//     }
//     function getAge() {
//         return _age;
//     }

//     return {
//         name: name,
//         getAge: getAge,
//         setAge: setAge
//     };
// }

// var p1 = Person('张三');
// p1.setAge(25);
// console.log(p1.getAge())
// //注意，外层函数每次运行，都会生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大。因此不能滥用闭包，否则会造成网页的性能问题。

// //函数调用
// var f = function f() { return 1 }();    //定义后调用(表达式形式);当作表达式时，函数可以定义后直接加圆括号调用
// console.log(f);

// //function出现在行首时,一律解释为语句，结尾是（）的话，会认为是错误
// //语句形式
// (function () { /* code */ }());     //;是必须的，不能省略
// // 或者
// (function () { /* code */ })();     //否则连着两个IIFE就可能报错
// //以上两个就是立即调用的函数表达式（IIFE）

// var a = [];

// a[10] = 100
// a['p'] = 'abc'
// a.q = 'qqqq'

// console.log(a)
// console.log(a.length)

// for (var i = 0; i < a.length; i++) {
//     console.log(i)
//     console.log(a[i]);
// }       //遍历所有数字键

// var a = [, , ,];
// console.log(a[1])
// console.log(a.length)
// delete a[1]             //无影响
// console.log(a[1])
// console.log(a.length)

// console.log(NaN === NaN)

// console.log(Number({}))  //Nan


// 1 !== '1' // true
// // 等同于
// !(1 === '1')

// 1 != '1' // false
// // 等同于
// !(1 == '1')

console.log(!!20)
console.log(Boolean(20))


//3.4节：二进制位运算符，暂时跳过





