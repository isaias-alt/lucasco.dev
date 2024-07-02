import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
