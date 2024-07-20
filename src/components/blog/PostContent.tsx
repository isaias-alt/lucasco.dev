import Markdown from "markdown-to-jsx"

const PostContent = ({ content }: { content: string }) => {
  return (
    <article className="pb-5 prose w-full max-w-full text-pretty">
      <Markdown>{content}</Markdown>
    </article>
  )
}

export default PostContent