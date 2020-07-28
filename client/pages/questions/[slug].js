import React from 'react'

import Layout from '../../components/Layout/layout'
import PageTitle from '../../components/Common/page-title'

const Detail = ({ slug }) => {
  return (
    <Layout extra={false}>
      <PageTitle title={slug} button />
      <div>{slug}</div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const slug = context.params.slug

  return {
    props: {
      slug
    }
  }
}

export default Detail
