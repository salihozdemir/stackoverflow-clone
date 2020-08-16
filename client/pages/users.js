import React, { useEffect, useState } from 'react'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import SearchInput from '../components/search-input'
import UserList from '../components/user-list'
import UserItem from '../components/user-list/user-item'
import { Spinner } from '../components/icons'

function UsersPage() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      setLoading(true)
      try {
        const { data } = await publicFetch.get(searchTerm ? `/users/${searchTerm}` : `/users`)
        setUsers(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput
        placeholder="Search by user"
        autoFocus
        autoComplete="off"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {!loading && (
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
      )}
    </Layout>
  )
}

export default UsersPage
