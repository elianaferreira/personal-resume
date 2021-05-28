import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getSummary } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts, summaryData }) {

  return (
    <>
      <Layout>
        <Head>
        </Head>
        <Container>
          <Intro />
          <HeroPost
              name={summaryData.name}
              email={summaryData.email}
              summary={summaryData.summary}
            />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'company',
    'date',
    'slug',
    'position',
    'coverImage',
  ])
  
  const summaryData = getSummary([
    'name',
    'email',
    'summary',
  ])

  return {
    props: { allPosts, summaryData },
  }
}
