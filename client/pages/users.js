import Layout from '../components/Layout/layout'
import PageTitle from '../components/Common/page-title'
import SearchInput from '../components/Common/search-input'

function UsersPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput placeholder="Search by user" />
    </Layout>
  )
}

export default UsersPage
