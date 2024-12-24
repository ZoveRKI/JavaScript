// 死循环 主线程一直在执行
// node没啥影响就是一直输出done
// 浏览器会卡死，干什么都没反应，因为浏览器是单线程的，主线程一直在执行，无法执行其他任务（比如渲染页面，解析html,css等）
// while (1) {
//     console.log('done');
// }

// 无限递归 栈溢出，报错
// 超出最大调用栈深度
// 调用函数就会生成执行上下文，执行上下文会被压入调用栈，调用栈是有大小限制的
// chrome的执行栈大小是14m(好像是这个值)，超过这个值就会报错
// function k() {
//     k();
// }
// k();

// await的核心行为
// 遇到await，函数会暂停执行，并将后续代码分离为一个微任务。
// 当await等待的 Promise 解析（fulfilled）后，异步函数的后续代码会从微任务队列中取出并执行
function dealy(duration, params) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
        console.log('delay done' + params);
    });
}

// 例1
// 异步后，chrome不会卡死，因为异步的任务是宏任务，不会阻塞主线程
// node环境中，本例先输出delay done后没隔1s几乎同时按顺序输出done和delay done
// 首先因为delay done是同步的，所以会先输出delay done
// setTimeout是宏任务，1s后执行resolve，reolve执行后，Promise状态变为fulfilled，await后的代码加入微队列
// 之后进入下一个循环，而delay done是同步的，所以会直接输出；导致done和delay done几乎同时输出，但是done是在delay done之前输出的
// ------------
// 例2
// await 1; 相当于 await Promise.resolve(1);
// 会立即执行resolve,将done加入微队列，不停的输出done
// 会卡死chrome，渲染帧是一个宏任务，因为微任务队列一直在执行，无法执行页面渲染
// ------------
// 例3
// 加入异步的无限递归不会栈溢出，因为await会返回一个Promise，就结束了，不会一直压入调用栈
// 至于这个Promise里是微任务还是宏任务都和主线程没有关系，按照对应的情况分别加入到微任务队列和宏任务队列，等待执行就行
// 同样用dealy（本例是setTimeout）浏览器也不会卡死，因为等待的是一个宏任务
// 渲染帧也是一个宏任务，会见缝插针的执行。有些浏览器可能会慢
// 现在也有叫多队列的概念，不同的队列有不同的优先级，微任务队列优先级高于宏任务队列
// 此处delay是一个延时队列
// ------------
// 例4
// node会不停输出
// 浏览器会卡死，因为主线程一直在执行，无法执行其他任务
let b = 1;
async function main() {
    // let a = 1;
    // 无限循环，例1,2
    // while (1) {
    // await dealy(1000, a); // 例1
    // await 1; // 例2
    // console.log('done' + a);
    // a += 1;
    // }

    // 无限递归，例3,4
    await dealy(1000, b); // 例3
    // await 1; // 例4
    console.log('done' + b);
    b += 1;
    main();
}

main();
