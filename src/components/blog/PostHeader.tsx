import { formatDate } from "@/utils/date";
import Header from "../Header";

const PostHeader = ({ title, date }: { title: string; date: string }) => {
  return (
    <>
      <div className="mt-7 flex flex-col space-y-2">
        <h1 className="font-bold tracking-tighter text-5xl">
          {title}
        </h1>
      </div>
      <div className="flex items-center justify-between pt-3 text-sm ">
        <div className="flex items-center">
          <time
            className="flex items-center text-base text-neutral-800 dark:text-neutral-400"
            dateTime={date}
          >
            <span className="font-mono">{formatDate(date)}</span>
          </time>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
