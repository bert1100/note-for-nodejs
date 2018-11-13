# 解决『回调地狱』：promise\async\await

### 回调地狱

当你使用js进行前后台编程时都会遇到这种情况：

- 将多个异步请求合并成一个
- 一个异步请求回调中嵌套着另外一个回调（或DOM、或请求）

这时，当你写完了所有的功能时，进行review时，哇！代码层层叠叠… 随着时间的推移，这些代码会变得陌生，已经不敢修改了...

```js
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
```



### 解决问题

- Promise （ES6）
- async（ES7）
- await (ES7)

这里，我们使用ES6和ES7的新特性来解决这些问题。

> 什么❓兼容性❓ 不存在的！把babel这个库用起来！


### 实例
[promise-async-await.js](../sources/promise-async-await.js)


### 总结

Promise：如果明确一个事情是异步的，那么就要保证他返回的对象是一个Promise！

async & await：这是ES2016中加入的，它们必须成对出现才能解决实际问题。



