'use strict'
// 回调地狱
asyncFunc1(opt, (...args1) => {
    asyncFunc2(opt, (...args2) => {
        asyncFunc3(opt, (...args3) => {
            asyncFunc4(opt, (...args4) => {
                // some operation
            });
        });
    });
});

// 第一步：拆解func，并观察，理顺调用顺序

function getData(count) {
    get(`/sampleget?count=${count}`, data =>{
        console.log(data)
    })
}

function queryDB(kw) {
    db.find(`select * from sample where kw = ${kw}`, (err, res)=>{
        getData(res.length)
    });
}

function readFile(filepath) {
    rs.readFile(filepath, 'utf-8', (err,content)=>{
        let keyword = content.substring(0, 5)
        queryDB(keyword)
    })
}

readFile('./sample.txt')

// 第二步：确保或者改造它们返回promise,
// 以 readFile 举例，（注：有的异步请求本身就返回promise）
const readFile = function (filepath) {
    let resolve,
        reject;
    let promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
    });
    let deferred = {
        resolve,
        reject,
        promise
    };
    fs.readFile(filepath, 'utf-8', function (err, ...args) {
        if (err) {
            deferred.reject(err);
        }
        else {
            deferred.resolve(...args);
        }
    });
    return deferred.promise;
}



//  第三步：改造流程控制：合成函数compose(把中间变化的过程合并成一个函数)

// 下面开始使用最新最好用的 async 和 await 来改造它们。
// note：任何函数前面只要加入 async 就表示告诉 runtime 它是个异步函数类型
// note：await 则加在能返回promise对象的正在调用的方法之前，它告诉 runtime 在此挂起，一定要等待着它后面的Promise返回，再继续往下执行，类似于同步。

const printData = async function(filepath) {
    let keyword = await readFile(filepath);
    let count = await queryDB(keyword);
    let data = await getData(res.length);
    console.log(data);
}
// 执行 just do it!
printData('./sample.txt');