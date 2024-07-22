import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
interface PostsDataProps {
  title: string;
  date: string;
  description: string;
  content: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), 'src/posts')

export const getSortedPostsData = () => {
  const postsDirectories = fs.readdirSync(postsDirectory)

  const allPostsData = postsDirectories.map((dir) => {
    const fullPath = path.join(postsDirectory, dir, 'index.md')
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id: dir,
      ...(matterResult.data as { title: string; date: string; description: string }),
    }
  })

  const sortedPosts = allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)

  return sortedPosts
}

export const getPostData = async (slug: string): Promise<PostsDataProps> => {
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

export const getAllPostsSlugs = () => {
  const postsDirectories = fs.readdirSync(postsDirectory)
  return postsDirectories.map((dir) => ({ slug: dir }))
}