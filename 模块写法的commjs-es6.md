# 模块的写法 commonJS 和 ES6
这2个模块的写法会经常用，因此重点学习

### CommonJS
nodejs环境下的js文件用的是 commonJS模块方式，.mjs文件则用的是ES6
```js
// 定义模块 a.js
module.exports = {
    add: (x,y)=>{ x+y }
}

// 使用模块
const m = require('./a.js');
m.add(2,3)
```

### ES6(es2015)

```js
// 定义模块 a.js
let a = (x,y) =>{
    return x+y;
}
const b = 2;
let c = {};
export { a, b, c }

// 使用模块
import { a as m, b, c} from './a'
m(2,3)
```

### 其他模块AMD和CMD
它们都存在于浏览器端的异步加载定义方式，都是以“ define(xxx) ”开始定义模块，现在已很少用了！ 