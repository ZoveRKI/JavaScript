Promise.resolve().then(() => console.log(1));
queueMicrotask(() => console.log(2));
setTimeout(() => console.log(3), 0);
console.log(4);
new Promise(() => console.log(5));
(async () => {
    console.log(6)
    await new Promise(resolve => {
        console.log(7.1);
        resolve(7.15);
        console.log(7.2);
    }).then(r => console.log(r)) // 有then，那么await后的代码将不会视作在then中

    console.log(8)
    Promise.resolve().then(() => console.log(9));
    console.log(12);
})()
Promise.resolve().then(() => console.log(10));
console.log(11);


// Promise.resolve().then(() => console.log(1));
// queueMicrotask(() => console.log(2));
// setTimeout(() => console.log(3), 0);
// console.log(4);
// new Promise(() => console.log(5));
// (async () => {
//     console.log(6)
//     p = new Promise(resolve => {
//         console.log(7.1);
//         resolve(7.15);
//         console.log(7.2);
//     })
//     p.then(r => console.log(r))
//     await p

//     console.log(8)
//     Promise.resolve().then(() => console.log(9));
//     console.log(12);
// })()
// Promise.resolve().then(() => console.log(10));
// console.log(11);



// Promise.resolve().then(() => console.log(1));
// queueMicrotask(() => console.log(2));
// setTimeout(() => console.log(3), 0);
// console.log(4);
// new Promise(() => console.log(5));
// (async () => {
//     console.log(6)
//     await new Promise(resolve => {
//         console.log(7.1);
//         resolve(7.15);
//         console.log(7.2);
//     })

//     console.log(8)
//     Promise.resolve().then(() => console.log(9));
//     console.log(12);
// })()
// Promise.resolve().then(() => console.log(10));
// console.log(11);
