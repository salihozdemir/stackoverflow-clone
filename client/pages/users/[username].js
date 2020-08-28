import React from 'react'

import Layout from '../../components/layout'
import UserCard from '../../components/user-card'
import AvatarCard from '../../components/user-card/avatar-card'

const UserDetail = ({ username }) => {
  return (
    <Layout extra={false}>
      <UserCard>
        <AvatarCard></AvatarCard>
        <div>{JSON.stringify(username)}</div>
      </UserCard>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const username = context.params.username
  return {
    props: {
      username
    }
  }
}

export default UserDetail
