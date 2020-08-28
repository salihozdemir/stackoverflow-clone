import React, { useEffect, useState } from 'react'

import { publicFetch } from '../../../util/fetcher'

import ButtonGroup from '../../button-group'
import PostItem from './post-item'
import { Spinner } from '../../icons'

import styles from './post-list.module.css'

const PostList = ({ username }) => {
  const [posts, setPosts] = useState(null)
  const [postType, setPostType] = useState('Questions')

  useEffect(() => {
    const fetchQuestions = async () => {
      const { data } = await publicFetch.get(`/user/${username}`)
      setPosts(data)
    }

    const fetchAnswers = async () => {
      const { data } = await publicFetch.get(`/user/`)
      setPosts(data)
    }

    if (postType == 'Questions') {
      fetchQuestions()
    } else {
      fetchAnswers()
    }
  }, [postType])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Last Questions</h2>
        <ButtonGroup
          buttons={['Questions', 'Answers']}
          selected={postType}
          setSelected={setPostType}
        />
      </div>

      {!posts && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {posts?.map(({ id, title, score, created }) => (
        <PostItem key={id} title={title} vote={score} created={created} />
      ))}
    </div>
  )
}

export default PostList
