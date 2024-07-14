import ModeToggle from "./ModeToggle"
import SocialLinks from "./SocialLinks"
import { SOCIALS } from "@/data/socials"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex justify-center py-4 sticky top-0 z-50 mb-1 backdrop-blur-md px-2">
      <nav className="flex justify-between items-center w-full max-w-4xl">
        <Link
          href='/'
          className="opacity-80 transition-opacity duration-150 hover:opacity-100 "
        >
          <span>lucasco.dev</span>
        </Link>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ name, url, icon }) => (
            <SocialLinks 
              key={name} 
              name={name} 
              url={url} 
              Icon={icon} 
            />
          ))}
          <ModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
