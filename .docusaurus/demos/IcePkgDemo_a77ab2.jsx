import youtil from 'youtil';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        console.log('当前时间：', youtil.formatDate(Date.now()));
    }, []);
  return (
    <div>
      请查看控制台
    </div>
  )
}

export default App;