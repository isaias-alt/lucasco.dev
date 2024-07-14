import { getSortedPostsData } from "@/services/posts"
import PostCard from "./PostCard";
import ArrowRight from "./icons/ArrowRight";
import Link from "next/link";


const Posts = () => {
  const allPostsData = getSortedPostsData();
  const latestPosts = allPostsData.slice(0, 3)
  
  return (
    <section className="flex flex-col space-y-4">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Recent Posts</h2>
        <Link
          href="/blog"
          className="group flex items-center space-x-2 text-sm font-medium text-neutral-500 dark:text-neutral-400 duration-100 hover:text-black dark:hover:text-white"
        >
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            More
          </span>
          <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
            <ArrowRight />
          </span>
        </Link>
      </div>
        {latestPosts.map(({ id, title, description, date }) => (
          <PostCard key={id} title={title} description={description} date={date} slug={id} />
        ))}
    </section>
  )
}

export default Posts
