"use client"

import useProjectCardHover from '@/hooks/useProjectCardHover';
import { formatDate } from '@/utils/date';
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  date: string;
  slug?: string;
}

const PostCard: React.FC<Props> = ({ title, description, date, slug }) => {
  const { divRef, position, opacity } = useProjectCardHover();

  return (
    <div role="contentinfo" ref={divRef}>
      <div className="w-full rounded-md border border-neutral-300 p-3 dark:border-neutral-800" style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, ${opacity * 0.1}), transparent 60%)`,
      }}>
        <div className='mb-3 flex flex-col space-y-1'>
          {slug && (
            <Link href={`/blog/${slug}`}>
              <h2 className="text-xl group flex items-center justify-between font-medium decoration-neutral-600 decoration-dotted underline-offset-[5px] hover:underline">
                {title}
              </h2>
            </Link>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-pretty text-sm dark:text-neutral-400">{description}</p>
          <p className="font-mono text-sm text-neutral-500 dark:text-neutral-400">
            {formatDate(date)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
