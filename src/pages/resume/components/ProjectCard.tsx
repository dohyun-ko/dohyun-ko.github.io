import StylessA from '@/components/StylessA';
import useResponsiveFont from '@/hooks/useResponsiveFont';
import Project from '@/types/Project';
import { formatYearMonth } from '@/utils/dateFormats';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import ReactMarkdown from 'react-markdown';
import { twMerge } from 'tailwind-merge';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, url, description, whatIDid, techStacks, startedAt, endedAt } =
    project;
  const { font } = useResponsiveFont();
  const { t } = useTranslation();

  return (
    <div className={'flex flex-col'}>
      <StylessA href={url}>
        <span className={twMerge('font-semibold', font(1.75))}>{name}</span>
      </StylessA>

      <span>
        {formatYearMonth(new Date(startedAt))} –{' '}
        {endedAt ? formatYearMonth(new Date(endedAt)) : 'Now'}
      </span>

      <ReactMarkdown>{description}</ReactMarkdown>

      {whatIDid && whatIDid.length > 0 && (
        <ul className={'m-0 list-disc pl-5'}>
          {whatIDid.map((whatIDid) => (
            <li key={whatIDid}>
              <p className={font(1)}>{whatIDid}</p>
            </li>
          ))}

          {techStacks && techStacks.length > 0 && (
            <li>
              <p className={font(1)}>
                {t('common.techStacks')}:{' '}
                {techStacks.map((techStack) => techStack).join(', ')}
              </p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ProjectCard;
