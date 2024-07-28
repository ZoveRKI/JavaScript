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

var obj = {
    key1: 1,
    key2: 2
};

console.log(Object.keys(obj))

//函数声明
function print(s) {
    console.log(s);
}

var print2 = function (s) {
    console.log(s);
};

var add = new Function(
    'x',
    'y',
    'return x + y'
);  //很不直观，几乎无人使用



















