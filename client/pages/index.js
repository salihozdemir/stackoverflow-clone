import Layout from '../components/layout'
import Header from '../components/header'
import Body from '../components/body'

function HomePage() {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Body>
        <div>sidebar</div>
        <div>main</div>
        <div>extra</div>
      </Body>
    </Layout>
  )
}

export default HomePage
