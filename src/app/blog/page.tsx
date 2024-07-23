import Header from "@/components/Header"
import PostCard from "@/components/PostCard"
import { getSortedPostsData } from "@/services/posts"

const Blog = () => {
  const allPostsData = getSortedPostsData()
  
  return (
    <main>
      <h1 className="text-xl font-medium mb-4 py-6">All Posts</h1>
      <div className="flex flex-col space-y-4">
        {allPostsData.map(({ id, title, description, date }) => (
          <PostCard key={id} title={title} description={description} date={date} slug={id} />
        ))}
      </div>
    </main>
  )
}

export default Blog
