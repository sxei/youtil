
import BrowserOnly from '@docusaurus/BrowserOnly';
export default () => {
  return (
    <BrowserOnly>
      {() => {
        const Demo = require('/Users/lxa/workspaces/github/youtil/.docusaurus/demos/IcePkgDemo_docs_02_test_0.jsx').default;
        return <Demo />
      }}
    </BrowserOnly>
  )
}
