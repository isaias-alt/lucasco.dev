import ArrowRightUp from "../icons/ArrowRightUp";

const PostActions = ({title, slug }: { title: string, slug: string }) => {

  const twitterText = `I just read "${title}" by @lucascodev. \n\nCheck it out! https://lucasco.dev/blog/${slug}`;
  const editOnGitHubUrl = `https://github.com/isaias-alt/lucasco.dev/blob/main/src/posts/${slug}/index.md`;
  const shareOnTwitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`;
  
  return (
    <div className="flex items-center justify-between border-t border-neutral-300 pt-4 text-sm dark:border-neutral-700">
      <a
        href={editOnGitHubUrl}
        className="flex items-center space-x-1 text-neutral-700 transition-colors duration-200 ease-in-out hover:text-black dark:text-neutral-300 dark:hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
          Edit on GitHub
        </span>
        <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
          <ArrowRightUp className="w-4 h-4 ml-1" />
        </span>
      </a>
      <a
        href={shareOnTwitterUrl}
        className="flex items-center space-x-1 text-neutral-700 transition-colors duration-200 ease-in-out hover:text-black dark:text-neutral-300 dark:hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
          Share on Twitter
        </span>
        <span className="opacity-70 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100">
          <ArrowRightUp className="w-4 h-4 ml-1" />
        </span>
      </a>
    </div>
  );
};

export default PostActions;
