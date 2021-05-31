import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts, getCertificates, getSummary } from '../lib/api'
import Head from 'next/head'
import Box from '../components/box'
import Certificates from '../components/certificates'

export default function Index({ allPosts, summaryData, certificates }) {

  return (
    <>
      <Layout>
        <Head>
          <title>
            Resume
          </title>
        </Head>
        <Container>
          <Intro />
          <HeroPost
              name={summaryData.name}
              email={summaryData.email}
              summary={summaryData.summary}
            />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          {certificates.length > 0 && <Certificates certificates={certificates} />}
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

  const certificates = getCertificates([
    'title',
    'date',
    'link',
  ])

  return {
    props: { allPosts, summaryData, certificates },
  }
}
