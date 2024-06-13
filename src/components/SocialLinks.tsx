import { ComponentType } from "react";

interface Props {
  name: string
  url: string
  Icon: ComponentType
}

const SocialLinks: React.FC<Props> = ({ name, url, Icon }) => {
  return (
    <a
      href={url} 
      title={name}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="opacity-80 transition-opacity duration-150 hover:opacity-100"
    >
      <Icon />
    </a>
  )
}

export default SocialLinks