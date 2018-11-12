'use strict'

// 拆解func

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

// 下面开始使用最新最好用的 async 和 await 来改造它们。
// note：任何函数前面只要加入 async 就表示告诉 runtime 它是个异步函数类型
// note：await 则加在能返回promise对象的正在调用的方法之前，它告诉 runtime 在此挂起，一定要等待着它后面的Promise返回，再继续往下执行，类似于同步。

const printData = async function(filepath) {
    let keyword = await readFile(filepath);
    let count = await queryDB(keyword);
    let data = await getData(res.length);
    console.log(data);
}
printData('./sample.txt');