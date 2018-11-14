'use strict'

async function timeOut(ms) {
    console.log('开始调用了 timeout...')
   return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve();
        }, ms);
    })

}

async function asyncPrint(time,str){
    console.log(`start imedetely ...`);
    await timeOut(time);
    console.log(str)
}
asyncPrint(5000,'submit cancel!')