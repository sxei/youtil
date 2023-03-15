
import BrowserOnly from '@docusaurus/BrowserOnly';
export default () => {
  return (
    <BrowserOnly>
      {() => {
        const Demo = require('/Users/lxa/workspaces/github/youtil-test/.docusaurus/demos/IcePkgDemo_dad9cf.jsx').default;
        return <Demo />
      }}
    </BrowserOnly>
  )
}
