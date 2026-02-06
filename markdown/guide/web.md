---
toc: content
order: 7
---

# Web相关

## 文件选择

使用方法：

```js
const [file] = await selectFile();
const files = await selectFile({ multiple: true, accept: 'image/*' });
```

功能演示（更多参数请查看API文档）：

```jsx preview
import { selectFile } from 'youtil';
export default () => {
    return <div style={{ display: 'flex', gap: '8px' }}>
        <a href="javascript:;" onClick={() => selectFile()}>单选</a>
        <a href="javascript:;" onClick={() => selectFile({ multiple: true })}>多选</a>
        <a href="javascript:;" onClick={() => selectFile({ accept: 'image/*,video/mp4' })}>自定义类型</a>
        <a href="javascript:;" onClick={() => selectFile({ forceInputMode: true })}>强制input[file]模式</a>
    </div>;
}
```

## 打开新标签

`window.open`可能会被一些浏览器或者广告屏蔽插件拦截，使用本方法可以确保不被拦截。


```jsx preview
import { openNewTab } from 'youtil';
export default () => {
    return <div>
        <a href="javascript:;" onClick={() => openNewTab('https://haoji.me')}>打开新标签</a>
    </div>;
}
```

## 加载脚本

```jsx preview
/**
 * defaultShowCode: true
 */
import { loadScript } from 'youtil';
export default () => {
    const test = async () => {
        await loadScript('https://code.jquery.com/jquery-4.0.0.min.js');
        alert(`加载完毕！版本：${jQuery().jquery}`);
    }
    return <div>
        <a href="javascript:;" onClick={test}>加载jQuery</a>
    </div>;
}
```

## 下载

