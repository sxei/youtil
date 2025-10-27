---
toc: content
order: 6
---

# 数学运算

基于`big.js`进行简单封装的适合金融等严肃场景的数学运算函数`calc()`，参考：[https://blog.haoji.me/js-float.html](https://blog.haoji.me/js-float.html)。


## big.js初始化

由于`youtil`承诺不内置任何第三方库代码，但大整数计算重复造轮子意义不大，所以使用前必须手动初始化一次`big.js`（仅需`6kb`，全局仅需初始化一次）：

```js
import Big from 'big.js';
// 
initBigJs(Big);
```

当然也可以全局引入CDN：`https://cdn.jsdelivr.net/npm/big.js/big.min.js`，通过CDN引入时无需手动调用`initBigJs()`。

## 加减乘除运算

```js
import { calc } from 'youtil';

calc('0.1+0.2'); // 0.3
calc('3-1'); // 2
calc('3*4'); // 12
calc('8.8/100', 1); // 保留1位小数 0.09
```

## toFixed

没有bug的四舍五入：

```js
import { toFixed } from 'youtil';
toFixed('0.338', 2); // 0.34
```

