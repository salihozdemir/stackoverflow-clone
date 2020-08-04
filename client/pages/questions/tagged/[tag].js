import React from 'react'

import Layout from '../../../components/layout'

const Tag = ({ tag }) => {
  return (
    <Layout>
      <div>{JSON.stringify(tag)}</div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const tag = context.params.tag
  return {
    props: {
      tag
    }
  }
}

export default Tag
