import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { formatDate } from '@/utils/date'
import ArrowRightUp from '@/components/icons/ArrowRightUp'
import ClockIcon from '@/components/icons/ClockIcon'
import { Metadata } from 'next'
import Markdown from 'react-markdown'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'src/posts')

interface Props {
  title: string
  date: string
  description: string
  content: string
  slug: string
}

async function getPostData(slug: string): Promise<Props> {
  const fullPath = path.join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    content: matterResult.content,
  }
}

export async function generateStaticParams() {
  const postsDirectories = fs.readdirSync(postsDirectory)
  return postsDirectories.map((dir) => ({ slug: dir }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = await getPostData(params.slug)
  return {
    title: postData.title,
    description: postData.description,
    openGraph: {
      type: 'article',
      title: `${postData.title} - Lucas Casco`,
      description: postData.description,
    },
  }
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const postData = await getPostData(params.slug)

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <div className="mt-7 flex flex-col space-y-2">
        <h2 className="text-3xl font-medium tracking-tighter md:text-4xl">{postData.title}</h2>
        <p className="text-neutral-800 dark:text-neutral-400">{postData.description}</p>
      </div>
      <div className="flex items-center justify-between border-b border-neutral-300 py-4 text-sm dark:border-neutral-800">
        <div className="flex items-center space-x-3">
          <time className="flex items-center space-x-2 text-neutral-800 dark:text-neutral-400" dateTime={postData.date}>
            <ClockIcon size="5" />
            <span className="font-mono">{formatDate(postData.date)}</span>
          </time>
        </div>
        <a
          href={`https://github.com/isaias-alt/lucasco.dev/blob/main/src/posts/${postData.slug}/index.md`}
          className="flex items-center space-x-1 text-neutral-600 transition-colors duration-200 ease-in-out hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Edit on GitHub</span>
          <ArrowRightUp size="14" />
        </a>
      </div>
      <article className="pb-5 prose prose-neutral prose-quoteless w-full max-w-full text-pretty dark:prose-invert">
        <Markdown remarkPlugins={[remarkGfm]} >{postData.content}</Markdown>
      </article>
      <Footer />
    </main>
  )
}

export default Post
