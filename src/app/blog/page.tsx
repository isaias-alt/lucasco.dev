import Header from "@/components/Header"
import PostCard from "@/components/PostCard"
import { getSortedPostsData } from "@/services/posts"

const Blog = () => {
  const allPostsData = getSortedPostsData()
  
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Header />
      <h1 className="text-3xl font-bold mb-4 py-8">All Posts</h1>
      <div className="flex flex-col space-y-4">
        {allPostsData.map(({ id, title, description, date }) => (
          <PostCard key={id} title={title} description={description} date={date} slug={id} />
        ))}
      </div>
    </main>
  )
}

export default Blog
