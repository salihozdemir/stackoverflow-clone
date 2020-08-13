import React, { useEffect, useState } from 'react'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import SearchInput from '../components/search-input'
import UserList from '../components/user-list'
import UserItem from '../components/user-list/user-item'
import { Spinner } from '../components/icons'

function UsersPage() {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const { data } = await publicFetch.get('/users')
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])
  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput placeholder="Search by user" autoFocus />

      {!users && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      <UserList>
        {users?.map(({ username, profilePhoto, created, id }) => (
          <UserItem
            key={id}
            username={username}
            profilePhoto={profilePhoto}
            created={created}
          />
        ))}
      </UserList>
    </Layout>
  )
}

export default UsersPage
