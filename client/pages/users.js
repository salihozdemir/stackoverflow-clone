import Layout from '../components/Layout/layout'
import PageTitle from '../components/PageTitle/page-title'
import SearchInput from '../components/SearchInput/search-input'
import UserList from '../components/UsersView/user-list'

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
