import Layout from '../components/Layout/layout'
import PageTitle from '../components/Common/page-title'
import TagList from '../components/tag-list'

function TagsPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Tags">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </PageTitle>
      <TagList />
    </Layout>
  )
}

export default TagsPage
