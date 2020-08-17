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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (searchTerm === null) {
      const fetchUser = async () => {
        try {
          const { data } = await publicFetch('/users')
          setUsers(data)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }

      fetchUser()
    } else {
      const delayDebounceFn = setTimeout(async () => {
        try {
          const { data } = await publicFetch.get(
            searchTerm ? `/users/${searchTerm}` : `/users`
          )
          setUsers(data)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm])

  return (
    <Layout extra={false}>
      <PageTitle title="Users" borderBottom={false} />
      <SearchInput
        placeholder="Search by user"
        isLoading={loading}
        autoFocus
        autoComplete="off"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {!users && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {users && (
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
