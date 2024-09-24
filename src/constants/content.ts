import ExperienceCardProps from '@/interfaces/experience-card.type';

const experienceCardsContents: ExperienceCardProps[] = [
  {
    title: 'Banco do Brasil',
    period: '2023 - Present',
    office: 'Software Engineer',
    state: 'São Paulo',
    description:
      "I work on building components for the company's internal developer portal using the ReactJS and AngularJS libraries. Also helped make it look prettier.",
    tags: ['TypeScript', 'ReactJS', 'Git', 'Gitlab'],
  },
  {
    title: 'Universidade de São Paulo',
    period: '2019 - 2020',
    office: "Bachelor's Degree in Computer Engineering",
    state: 'São Paulo',
    description:
      'For two years, I dedicated myself to studying Computer Engineering at the renowned University of São Paulo, where I delved into the fundamentals of computing. However, faced with the challenges posed by the pandemic, I chose to formally pause my academic education. Nevertheless, I maintained my commitment to learning, pursuing knowledge in a self-taught way.',
    tags: ['C', 'Algorithms', 'Fundamentals of Computing', 'JavaScript'],
  },
];

type ModalProps = {
  isOpen: boolean;
  setIsOpen: Function;
  title: string;
  imgSrc: string;
  githubLink: string;
  projectLink: string;
  techTags: string[];
  description: JSX.Element;
};

const projectsContent = [
  {
    title: 'Lilo Chat',
    description:
      'An app that lets you chat with strangers while watching shared and synchronized YouTube videos.',
    imgSrc: '/projects/project-1.png',
    githubLink: 'https://github.com/flaviodorta/lilochat-app',
    projectLink: 'https://www.lilochat.io/',
    techTags: ['TypeScript', 'NextJS', 'Postgres', 'Supabase', 'Tailwind'],
  },
  {
    title: 'Todofeito',
    description:
      'An application designed to efficiently organize your daily tasks.',
    imgSrc: '/projects/project-2.png',
    githubLink: 'https://github.com/flaviodorta/todofeito-app',
    projectLink: 'https://todofeito.netlify.app/today',
    techTags: ['TypeScript', 'ReactJS', 'Zustand', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Connecting People',
    description:
      'An engaging website for a digital marketing and web design company specializing in innovative solutions.',
    imgSrc: '/projects/project-3.png',
    githubLink: 'https://github.com/flaviodorta/connecting-people',
    projectLink: 'https://connecting-people-7cdy.vercel.app/',
    techTags: [
      'TypeScript',
      'ReactJS',
      'Zustand',
      'Framer Motion',
      'Tailwind',
      'ThreeJSs',
    ],
  },
  {
    title: 'Decimal-Binary Converter',
    description:
      'An advanced calculator for converting numbers across different mathematical bases.',
    imgSrc: '/projects/project-4.png',
    githubLink: 'https://github.com/flaviodorta/bin2dec-app',
    projectLink: 'https://decimalbinaryconversor.netlify.app/',
    techTags: ['JavaScript', 'HTML', 'CSS'],
  },
];

export { experienceCardsContents, projectsContent };
