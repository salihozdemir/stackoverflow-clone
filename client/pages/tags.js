import Layout from '../components/layout'
import PageTitle from '../components/page-title'
import TagList from '../components/tags-view'
import SearchInput from '../components/search-input'

function TagsPage() {
  return (
    <Layout extra={false}>
      <PageTitle title="Tags" borderBottom={false}>
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </PageTitle>
      <SearchInput placeholder="Filter by tag name" autoFocus />
      <TagList />
    </Layout>
  )
}

export default TagsPage
