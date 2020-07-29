import React from 'react'

import Layout from '../../components/Layout/layout'

const UserDetail = ({ username }) => {
  return (
    <Layout>
      <div>{JSON.stringify(username)}</div>
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
