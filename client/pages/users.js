import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import SearchInput from '../components/search-input'
import UserList from '../components/users-view'

function UsersPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput placeholder="Search by user" autoFocus />
      <UserList />
    </Layout>
  )
}

export default UsersPage
