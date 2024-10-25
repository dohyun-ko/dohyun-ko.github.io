import Project from '@/types/Project';
import { formatYearMonth } from '@/utils/dateFormats';
import font from '@/utils/font';
import formatUrl from '@/utils/formatUrl';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';
import StylessA from '../../../components/StylessA';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, url, description, whatIDid, techStacks, startedAt, endedAt } =
    project;

  return (
    <div className={twMerge('flex-col', font(0.75))}>
      <StylessA href={url}>
        <h3 className={twMerge('font-semibold', font(1))}>{name}</h3>

        {url && <span className={font(0.75)}>{formatUrl(url)}</span>}
      </StylessA>

      <span className={font(0.75)}>
        {formatYearMonth(new Date(startedAt))} –{' '}
        {endedAt ? formatYearMonth(new Date(endedAt)) : 'Now'}
      </span>

      {description && (
        <>
          <div className={'h-[5px]'} />
          <ReactMarkdown>{description}</ReactMarkdown>
        </>
      )}

      {whatIDid && whatIDid.length > 0 && (
        <>
          <div className={'h-[5px]'} />

          <ul className={'m-0 list-disc pl-5'}>
            {whatIDid.map((whatIDid) => (
              <li key={whatIDid}>
                <p className={font(0.75)}>{whatIDid}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
