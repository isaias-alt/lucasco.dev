import SocialLinks from "./SocialLinks"
import { SOCIALS } from "@/data/socials"

const Header = () => {
  return (
    <header className="flex justify-center py-4 sticky top-0 z-50 mb-1 backdrop-blur-md dark:bg-neutral-900/80">
      <nav className="flex justify-between items-center w-full max-w-4xl">
        <a 
          href='/'
          className="opacity-80 transition-opacity duration-150 hover:opacity-100"
        >
          <span>lucasco.dev</span>
        </a>
        <div className="flex items-center space-x-4">
          {SOCIALS.map(({ name, url, icon }) => (
            <SocialLinks 
              key={name} 
              name={name} 
              url={url} 
              Icon={icon} 
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
