import ArrowLeft from "@/components/icons/ArrowLeft"
import Image from "next/image"

const NotFount = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-4xl py-8">
        404 but...
      </h1>
      <Image width={500} height={300} src="/images/this-is-fine-404.gif" alt="this is fine dog" priority/>
        <h1 className="opacity-50 text-orange-500 text-2xl py-8">
          Under construction
        </h1>
        <a
          href="/"
          className="group flex items-center space-x-2 font-medium duration-100 hover:text-black dark:hover:text-white"
        >
          <span
            className="opacity-60 duration-200 group-hover:translate-x-[2px] group-hover:opacity-100"
          >
            <ArrowLeft />
          </span>
          <span
            className="opacity-70 decoration-neutral-200 decoration-dotted underline-offset-[5px] hover:underline duration-200 group-hover:translate-x-[1px] group-hover:opacity-100"
          >
            Go back
          </span>
        </a>
    </main>
  )
}

export default NotFount