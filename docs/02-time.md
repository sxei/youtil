# 测试

```jsx preview
import { formatDate } from 'youtil';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        console.log('当前时间：', formatDate(Date.now()));
    }, []);
    return <div>
        请查看控制台
    </div>;
}

export default App;
```
