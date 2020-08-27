import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { publicFetch } from '../util/fetcher'

import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import SearchInput from '../components/search-input'
import TagList from '../components/tag-list'
import TagItem from '../components/tag-list/tag-item'
import { Spinner } from '../components/icons'

function TagsPage() {
  const [searchTerm, setSearchTerm] = useState(null)
  const [tags, setTags] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchTerm === null) {
      const fetchUser = async () => {
        const { data } = await publicFetch.get('/tags')
        setTags(data)
      }

      fetchUser()
    } else {
      const delayDebounceFn = setTimeout(async () => {
        setLoading(true)
        const { data } = await publicFetch.get(
          searchTerm ? `/tags/${searchTerm}` : `/tags`
        )
        setTags(data)
        setLoading(false)
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm])

  return (
    <Layout extra={false}>
      <Head>
        <title>Tags - Clone of Stackoverflow</title>
      </Head>

      <PageTitle title="Tags" borderBottom={false}>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </PageTitle>

      <SearchInput
        placeholder="Filter by tag name"
        autoFocus
        isLoading={loading}
        autoComplete="off"
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {!tags && (
        <div className="loading">
          <Spinner />
        </div>
      )}

      {tags && (
        <>
          <TagList>
            {tags?.map(({ count, _id }) => (
              <TagItem key={_id} count={count}>
                {_id}
              </TagItem>
            ))}
          </TagList>

          {tags.length == 0 && <p className="not-found">No tags matched your search.</p>}
        </>
      )}
    </Layout>
  )
}

export default TagsPage
