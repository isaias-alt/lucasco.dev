import Image from "next/image"

const NotFount = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-4xl py-8">
        404 but...
      </h1>
      <Image width={500} height={300} src="/images/this-is-fine-404.gif" alt="this is fine dog" priority />
      <h1 className="opacity-50 text-orange-500 text-2xl py-8">
        Under construction
      </h1>
    </main>
  )
}

export default NotFount