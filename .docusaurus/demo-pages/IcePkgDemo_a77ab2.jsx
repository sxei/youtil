
import BrowserOnly from '@docusaurus/BrowserOnly';
export default () => {
  return (
    <BrowserOnly>
      {() => {
        const Demo = require('/Users/lxa/workspaces/github/youtil/.docusaurus/demos/IcePkgDemo_a77ab2.jsx').default;
        return <Demo />
      }}
    </BrowserOnly>
  )
}
