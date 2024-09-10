import ExperienceCardProps from '@/interfaces/experience-card.type';
import Divider from './divider';
import Tag from './tag';
import Reveal from './reveal';

const ExperienceCard = ({
  title,
  period,
  state,
  office,
  description,
  tags,
}: ExperienceCardProps) => {
  return (
    <li className='flex w-full flex-col gap-8'>
      <div className='flex justify-between items-center'>
        <Reveal>
          <h3 className='font-bold text-2xl'>{title}</h3>
        </Reveal>

        <Reveal>
          <span>{period}</span>
        </Reveal>
      </div>

      <div className='flex items-center justify-between'>
        <Reveal>
          <h4 className='font-bold text-primary'>{office}</h4>
        </Reveal>

        <Reveal>
          <span>{state}</span>
        </Reveal>
      </div>

      <Reveal>
        <p className='font-light'>{description}</p>
      </Reveal>

      <Reveal>
        <div className='flex gap-4 flex-wrap'>
          {tags.map((tag, idx) => (
            <Tag key={idx} title={tag} />
          ))}
        </div>
      </Reveal>

      <Divider className='opacity-50' />
    </li>
  );
};

export default ExperienceCard;
