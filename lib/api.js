import fs, { readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export const postsDirectory = join(process.cwd(), '_experiences')
const summaryDirectory = join(process.cwd(), '_summary')
const certificatesDirectory = join(process.cwd(), '_certificates')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getSummaryDir() {
  return fs.readdirSync(summaryDirectory)
}

export function getCertificatesDir() {
  return fs.readdirSync(certificatesDirectory)

}

export function getPostBySlug(directory, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(postsDirectory, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getSummary(fields = []) {
  const slugs = getSummaryDir()
  const summaries = slugs
    .map((slug) => getPostBySlug(summaryDirectory, slug, fields))
  return summaries[0]
}

export function getCertificates(fields = []) {
  const slugs = getCertificatesDir()
  const certificates = slugs
  .map((slug) => getPostBySlug(certificatesDirectory, slug, fields))
  .reverse()
  return certificates
}


