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

export { experienceCardsContents };
