interface Project {
  title: string
  description: string
  tags?: string[]
  url?: string
  githubUrl?: string
  projectIcon?: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Code Quizz',
    description: 'Code Quizz is an interactive web application that allows users to answer code-related questions in various programming languages.',
    tags: ['React.js', 'Typescript', 'MUI', 'Zustand'],
    url: 'https://code-quizz.vercel.app/',
    githubUrl: 'https://github.com/isaias-alt/code-quizz',
    image: '/projects/code-quizz.webp'
  },
  {
    title: 'STI UCSI',
    description: 'The website displays the Catholic University seminar. Shows the speakers, their topics and the calendar of events',
    tags: ['Atro', 'React.js', 'Typescript', 'Tailwindcss'],
    url: 'https://sti-ucsi.vercel.app/',
    githubUrl: 'https://github.com/isaias-alt/sti-ucsi',
    image: '/projects/sti-ucsi.webp'
  },
]