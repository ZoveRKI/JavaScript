//基础类型（Primitive Types）是按值传递，复制的是值，互不影响。
//对象类型（Reference Types）是按引用传递，复制的是引用，改动对象会影响所有指向它的变量。
// 1. 基本类型：undefined、null、boolean、number、string、symbol、bigint
// 2. 引用类型：object、array、function、class instance（比如 moment 返回的对象）

const a = 1
const b = a + 1

console.log(a)
console.log(b)

import moment from 'moment'
const c = moment()
console.log('old c', c.format('YYYY-MM-DD'))

const d = c.add(3, 'months')
console.log('new c', c.format('YYYY-MM-DD'))
console.log('d', d.format('YYYY-MM-DD'))
