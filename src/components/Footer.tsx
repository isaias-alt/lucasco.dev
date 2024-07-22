import ArrowRightUp from "./icons/ArrowRightUp"

const Footer = () => {
  const email = 'mailto:cascolucasisaias@gmail.com'
  const currentYear = new Date().getFullYear()
  
  return (
    <footer
      className="container mt-10 flex max-w-4xl flex-col items-center justify-center space-y-1 md:flex-row md:justify-between md:space-y-0"
    >
      <a
        className="flex justify-center items-center opacity-80 transition-opacity duration-150 hover:opacity-100"
        href={email}
        target="_blank"
      >
        <p className="font-serif">Contact with me</p>
        <span>
          <ArrowRightUp
            className="w-4 h-4 ml-1"
          />
        </span>
      </a>
      <div
        className="opacity-80 flex items-center space-x-1 text-sm md:text-md flex-wrap"
      >
        <h2>Lucas Casco</h2>
        <span className="text-gray-500 dark:text-gray-400"> - </span>
        <p>{currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer