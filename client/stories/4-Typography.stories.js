import React from 'react'

import TextTitle from '../components/Common/text-title'

export default {
  title: 'Typography'
}

export const Title = () => (
  <>
    <TextTitle bold>Hello I'm Bold</TextTitle>
    <TextTitle>Hello I'm Regular</TextTitle>
  </>
)
