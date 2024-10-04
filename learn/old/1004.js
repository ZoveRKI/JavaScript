// var a = 1
// console.log(a)
// var obj = Object(1)
// console.log(obj)
// console.log(obj instanceof Boolean)
// console.log(obj instanceof Number)
// var obj2 = new Object(1)
// console.log(obj2)
// //obj和obj2结果相同，但是语义不同
// // obj是将1转换为对象；obj2是生成一个新对象，值是1

// var obj = {
//     p1: 123,
//     p2: 456
// };
// console.log(Object.keys(obj)) // ["p1", "p2"]
// console.log(Object.keys(obj)[0])
// b = Object.keys(obj)[0]
// console.log(Object.keys(obj).length)
// console.log(obj.b)      //这样不行，是undefined
// console.log(Object.getOwnPropertyNames(obj)) // ["p1", "p2"]
// console.log(Object.getOwnPropertyNames(obj).length)

// var a = ['Hello', 'World'];
// console.log(Object.keys(a)) // ["0", "1"]
// console.log(Object.keys(a).length)
// console.log(Object.getOwnPropertyNames(a)) // ["0", "1", "length"]
// console.log(Object.getOwnPropertyNames(a).length)
// //getOwnPropertyNames方法可以返回不可枚举属性

/*
除了上面提到的两个方法，Object还有不少其他静态方法，将在后文逐一详细介绍。
（1）对象属性模型的相关方法
Object.getOwnPropertyDescriptor()：获取某个属性的描述对象。
Object.defineProperty()：通过描述对象，定义某个属性。
Object.defineProperties()：通过描述对象，定义多个属性。
（2）控制对象状态的方法
Object.preventExtensions()：防止对象扩展。
Object.isExtensible()：判断对象是否可扩展。
Object.seal()：禁止对象配置。
Object.isSealed()：判断一个对象是否可配置。
Object.freeze()：冻结一个对象。
Object.isFrozen()：判断一个对象是否被冻结。
（3）原型链相关方法
Object.create()：该方法可以指定原型对象和属性，返回一个新的对象。
Object.getPrototypeOf()：获取对象的Prototype对象。
*/

// var obj = new Object();
// console.log(1 + obj) // "1[object Object]"

// var obj = { 'a': 1 };
// console.log(obj.toString()) // "[object Object]"

// // var c = [1]
// console.log(Object.prototype.toString.call([]))

// var type = function (o) {
//     var s = Object.prototype.toString.call(o);
//     console.log(s.match(/\[object (.*?)\]/))
//     return s.match(/\[object (.*?)\]/)[1].toLowerCase();
// };

// console.log(type([])) // "array"

// var c = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp']

// c.forEach(function (t) {
//     type['is' + t] = function (o) {
//         return type(o) === t.toLowerCase();
//     };
// });     //type[]是创建一个key是isType的项，这个项的值是一个函数

// console.log(type.isObject({}))
// console.log(type.isRegExp(/abc/))

// var obj = {
//     p: 123
// };

// console.log(obj.hasOwnProperty('p')) // true
// console.log(obj.hasOwnProperty('toString')) // false

// var obj = { p: 'a' };

// console.log(Object.getOwnPropertyDescriptor(obj, 'p'))
// console.log(Object.getOwnPropertyDescriptor(obj, 'toString'))
// //继承的属性不能得到

// var obj = Object.defineProperties({}, {
//     p1: { value: 1, enumerable: true },
//     p2: { value: 2, enumerable: false }
// });

// console.log(Object.getOwnPropertyNames(obj))

// e = { a: 1 }
// var d = Object.defineProperties(e, {
//     p1: { value: 123 },
//     p2: { get: function () { return 456; } },
//     p3: {}
// });

// console.log(d.a)
// console.log(d.p1)
// console.log(d.p2)
// console.log(Object.getOwnPropertyDescriptor(e, 'p3'))

// //存取器
// //属性p的configurable和enumerable都为false，从而导致属性p是不可遍历的
// var obj = Object.defineProperty({}, 'p', {
//     configurable: true,     //可以自己定义，但是默认是false，不方便
//     enumerable: true,
//     get: function () {
//         temp = console.log('getter')
//         return temp;
//     },
//     set: function (value) {
//         console.log('setter: ' + value);
//     }
// });

// obj.p // "getter"
// obj.p = 123 // "setter: 123"
// console.log(Object.getOwnPropertyDescriptor(obj, 'p'))

// // 写法二
// // 属性p的configurable和enumerable都为true，因此属性p是可遍历的
// var obj = {
//     get p() {
//         temp = console.log('getter')
//         return temp;
//     },
//     set p(value) {
//         console.log('setter: ' + value);
//     }
// };

// obj.p // "getter"
// obj.p = 123 // "setter: 123"

// var extend1 = function (to, from) {
//     for (var property in from) {
//         to[property] = from[property];
//     }

//     return to;
// }

// // console.log(extend1({}, {
// //     a: 1
// // }))

// var obj = {
//     get a() { return 1 },
//     set a(value) { console.log('setter: ' + value) }
// };
// var obj2 = extend1({}, obj)
// console.log(obj)
// console.log(obj2)     //只会把值拷贝过去，但get存取器就没了，不是完全复制

// var extend2 = function (to, from) {
//     for (var property in from) {
//         if (!from.hasOwnProperty(property)) continue;
//         Object.defineProperty(
//             to,
//             property,
//             Object.getOwnPropertyDescriptor(from, property)
//         );
//     }

//     return to;
// }
// var obj3 = extend2({}, obj)
// console.log(obj3)

// //有时需要冻结对象的读写状态，防止对象被改变。
// //JavaScript 提供了三种冻结方法，
// //最弱的一种是Object.preventExtensions(无法再添加新的属性)，
// var obj = new Object();
// Object.preventExtensions(obj);
// // Object.defineProperty(obj, 'p', {
// //     value: 'hello'
// // });      //报错
// obj.p = 1;
// console.log(obj.p) // undefined

// //其次是Object.seal(无法添加新属性，也无法删除旧属性)，
// var obj = { p: 'hello' };
// Object.seal(obj);

// delete obj.p;
// console.log(obj.p) // "hello"

// obj.x = 'world';
// console.log(obj.x) // undefined

// //Object.seal实质是把属性描述对象的configurable属性设为false，因此属性描述对象不再能改变了
// var obj = {
//     p: 'a'
// };

// // seal方法之前
// console.log(Object.getOwnPropertyDescriptor(obj, 'p'))
// // Object {
// //   value: "a",
// //   writable: true,
// //   enumerable: true,
// //   configurable: true
// // }

// Object.seal(obj);

// // seal方法之后
// console.log(Object.getOwnPropertyDescriptor(obj, 'p'))
// // Object {
// //   value: "a",
// //   writable: true,
// //   enumerable: true,
// //   configurable: false
// // }

// Object.defineProperty(obj, 'p', {
//     enumerable: false
// })           //报错

// //Object.seal只是禁止新增或删除属性，并不影响修改某个属性的值
// var obj = { p: 'a' };
// console.log(obj.p)
// Object.seal(obj);
// obj.p = 'b';
// console.log(obj.p) // 'b'

// //最强的是Object.freeze
// //Object.freeze方法可以使得一个对象无法添加新属性、无法删除旧属性、也无法改变属性的值，使得这个对象实际上变成了常量
// var obj = {
//     p: 'hello'
// };

// Object.freeze(obj);

// obj.p = 'world';
// console.log(obj.p) // "hello"；赋值失败

// obj.t = 'hello';
// console.log(obj.t) // undefined；添加失败

// delete obj.p // false
// console.log(obj.p) // "hello"；删除失败

// //局限性
// //上面的三个方法锁定对象的可写性有一个漏洞：可以通过改变原型对象，来为对象增加属性
// //对象obj本身不能新增属性，但是可以在它的原型对象上新增属性，就依然能够在obj上读到
// var obj = new Object();
// Object.preventExtensions(obj);
// console.log(obj)

// //Object.getPrototypeOf()：获取对象的Prototype对象
// var proto = Object.getPrototypeOf(obj);
// proto.t = 'hello';
// console.log(obj)
// console.log(proto)
// console.log(obj.t)

// //解决方案
// var obj = new Object();
// Object.preventExtensions(obj);

// var proto = Object.getPrototypeOf(obj);
// Object.preventExtensions(proto);

// proto.t = 'hello';
// console.log(obj.t) // undefined

//另外一个局限是，如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容
//obj.bar属性指向一个数组，obj对象被冻结以后，这个指向无法改变，即无法指向其他值，但是所指向的数组是可以改变的
var obj = {
    foo: 1,
    bar: ['a', 'b']
};
Object.freeze(obj);
console.log(obj.bar)

obj.bar.push('c');
console.log(obj.bar) // ["a", "b", "c"]


