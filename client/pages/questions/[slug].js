import React from 'react'

import Layout from '../../components/Layout/layout'

const Detail = ({ slug }) => {
  return (
    <Layout>
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
