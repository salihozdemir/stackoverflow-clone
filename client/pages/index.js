import CONST from '../constants'

import Layout from '../components/layout'
import Header from '../components/header'
import Body from '../components/body'

import useWindowSize from '../hooks/useWindowSize'

function HomePage() {
  const size = useWindowSize()
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Body>
        {size.width > CONST.MOBILE_SIZE && <div>sidebar</div>}
        <div>main {JSON.stringify(size)}</div>
        {size.width > CONST.TABLET_SIZE && <div>extra</div>}
      </Body>
    </Layout>
  )
}

export default HomePage
