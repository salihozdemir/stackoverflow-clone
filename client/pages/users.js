import Layout from '../components/Layout/layout'
import PageTitle from '../components/Common/page-title'
import SearchInput from '../components/Common/search-input'
import UserList from '../components/user-list'

function UsersPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput placeholder="Search by user" />
      <UserList />
    </Layout>
  )
}

export default UsersPage
