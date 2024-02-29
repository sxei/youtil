# loading

```jsx preview
import youtil from 'youtil';
import { useEffect } from 'react';

const App = () => {
    return <div>
        <a href="javascript:;" onClick={() => youtil.showLoading('正在加载...', 10)}>显示loading（10秒自动关闭）</a>
        <a href="javascript:;" onClick={() => youtil.hideLoading()}>关闭loading</a>
    </div>;
}

export default App;
```
