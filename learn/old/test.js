// console.log('hihihihihihihi')
// // let const
// //let 可以改
// //const 不能改变
// let age ;
// age = 555;
// const p = 100;
// // p = 100
// console.log(p);

// //数据类型
// const username = 'zerocnb';
// const number = 99;
// const rate = 4.5;   
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof username);
// console.log(typeof number);
// console.log(typeof rate);       //并无浮点数概念，所以全都是数字类型
// console.log(typeof iscool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);


// console.log('My name is ' + username + ' and i am ' + number);
// console.log('My name is ${username} and i am ${number}');
// console.log(`My name is ${username} and I am ${number}`);
// // `和'是不一样的，一个是模版字符串（破折号那个按键），另一个是单引号
// const ax = `My name is ${username} and I am ${number}`;
// console.log(ax)

// const s = 'hello World!, 1231'

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,7).toUpperCase());
// console.log(s.split(''));
// console.log(s.split(', '));

// //数组
// const numbers = new Array(1,2,3,4,5)
// console.log(numbers);

// const fruits = ['apples',10,true];
// fruits[3] = 'kkk'
// fruits.push('xxxxxxx')
// fruits.unshift('aaaaaa')
// fruits.pop()
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.indexOf(10));    //数字不能加引号查
// console.log('-----------------');
// console.log(Array.isArray(fruits))
// console.log(Array.isArray('apples'))

// //对象
// const person = {
//     firstName:'zero',
//     lastName:'cnb',
//     age:30,
//     hobbies:['music','anime','game'],
//     address:{
//         street:'50-3',
//         city:'tokyo',
//         state:'JP'
//     }
// }

// console.log(person)
// console.log(person.firstName,person.lastName)
// console.log(person.hobbies[1])
// console.log(person.address.city)
// console.log('-------------------------------------------------')
// const { 
//     firstName,
//     lastName,
//     address:{state}
// } = person //赋值进去，就不用写很长，直接访问就行
// console.log(firstName)
// console.log(state)

// person.email = 'xxxx@xxxx.xxx'
// console.log(person)


//对象数组
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'boss',
        isCompleted: true,
    },
    {
        id: 3,
        text: 'app',
        isCompleted: false,
    },
]

// const todoJSON = JSON.stringify(todos)

// console.log(todos[1].text)
// console.log(todoJSON)

// const x = '6'         //双等号不判断数据类型（字符10和数字10都是true），三等号判断数据类型
// const y = 11
// if(x === 10){
//     console.log('x is 10');
// }
// console.log('--------------------------------------')
// if(x === 10){
//     console.log('x is 10');
// }
// else if(x > 10){
//     console.log('x > 10')
// }
// else if(x < 10){
//     console.log('x < 10')
// }
// else{
//     console.log('x is not num')
// }

// if (x >5 || y >10){
//     console.log('x大于5或y小于10')
// }
// if (x >5 && y >10){
//     console.log('x大于5且y小于10')
// }

//三目运算符（条件？真确行为：错误行为）
// const x = 11
// const color = x > 10? 'red' : 'blue'
// console.log(color)
// const color = 'red'
// switch(color){
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     default:
//         console.log('color is not r or b')
// }

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let t = 0;
while(t < 10){
    console.log(`while loop : ${t}`);
    t++;
}

for (let u =0; u < todos.length; u++){
    console.log(todos[u].text)
}

for (let todo of todos){
    console.log(todo)
    console.log(todo.id)
    console.log(todo.isCompleted)
}



























