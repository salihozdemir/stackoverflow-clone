import React from 'react'

import Layout from '../../components/Layout/layout'

const User = ({ user }) => {
  return (
    <Layout>
      <div>{JSON.stringify(user)}</div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const user = context.params.user
  return {
    props: {
      user
    }
  }
}

export default User
