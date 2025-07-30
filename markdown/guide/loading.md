---
toc: content
order: 4
---

# 全局loading

`loading`是web中非常常见的一种交互，但是很多时候为了一个`loading`去引入非常重的组件库得不偿失，本方法弥补了此类不足。只有2个方法，一个`showLoading()`，一个`hideLoading()`，并且它是单例模式。

```jsx preview
import { showLoading, hideLoading } from 'youtil';
import { useEffect } from 'react';

const App = () => {
    return <div>
        <a href="javascript:;" onClick={() => showLoading('正在加载...', 10)}>显示loading（10秒自动关闭）</a><br />
        <a href="javascript:;" onClick={() => hideLoading()}>关闭loading</a><br />
        <a href="javascript:;" onClick={() => showLoading('正在加载...', 0)}>一直显示</a><br />
        <a href="javascript:;" onClick={() => showLoading('正在加载...', 0, {
            onCancel: () => alert('你点击了取消')
        })}>支持取消</a><br />
        <a href="javascript:;" onClick={() => showLoading('正在加载...', 0, {
            onCancel: () => alert('你点击了取消'),
            cancelInline: true,
        })}>取消不换行</a><br />
        <a href="javascript:;" onClick={() => showLoading('发生的家乐鸡粉受打击了放大随机发送达了', 0)}>超宽文字</a><br />
        <a href="javascript:;" onClick={() => showLoading('正在加载', 10, { hasMask: true })}>显示遮罩</a><br />
    </div>;
}

export default App;
```
