import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../../util/fetcher'

import Layout from '../../components/layout'
import UserCard from '../../components/user-card'
import AvatarCard from '../../components/user-card/avatar-card'
import PostList from '../../components/user-card/post-list'
import PostItem from '../../components/user-card/post-list/post-item'
import { Spinner } from '../../components/icons'

const UserDetail = ({ username }) => {
  const [posts, setPosts] = useState(null)
  const [postType, setPostType] = useState('Questions')

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await publicFetch.get(`/question/user/${username}`)
      setPosts(data)
    }
    fetchQuestions()
  }, [postType, username])

  return (
    <Layout extra={false}>
      <Head>
        <title>Users {username} - Clone of Stackoverflow</title>
      </Head>

      <UserCard>
        <AvatarCard username={username} />
        <PostList postType={postType} setPostType={setPostType}>
          {!posts && (
            <div className="loading">
              <Spinner />
            </div>
          )}

          {posts?.map(({ id, title, score, created }) => (
            <PostItem
              key={id}
              title={title}
              vote={score}
              created={created}
              id={id}
            />
          ))}

          {posts?.length == 0 && (
            <p className="not-found-questions">
              Don&apos;t have any questions yet.
            </p>
          )}
        </PostList>
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
