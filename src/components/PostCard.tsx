import { formatDate } from '@/utils/date';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  date: string;
  slug?: string;
}

const PostCard: React.FC<Props> = ({ title, description, date, slug }) => {
  return (
    <div className="w-full rounded-md border border-neutral-300 p-3 dark:border-neutral-800">
      <div className='mb-3 flex flex-col space-y-1'>
        <Link href={`/blog/${slug}`}>
          <h2 className="text-xl group flex items-center justify-between font-medium decoration-neutral-600 decoration-dotted underline-offset-[5px] hover:underline">{title}</h2>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-pretty text-sm dark:text-neutral-400">{description}</p>
        <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
          {formatDate(date)}
        </p>
      </div>
    </div>
  )
}

export default PostCard
