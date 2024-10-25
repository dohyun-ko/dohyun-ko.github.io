import Organization from '@/types/Organization';
import { formatYearMonth } from '@/utils/dateFormats';
import font from '@/utils/font';
import formatUrl from '@/utils/formatUrl';
import { twMerge } from 'tailwind-merge';
import StylessA from '../../../components/StylessA';
import ProjectCard from './ProjectCard';

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt, projects } = organization;

  return (
    <div className={'PrintableCard'}>
      <div
        className={twMerge(
          'flex flex-col border-l-[5px] border-solid pl-2.5',
          color ? `border-[${color}]` : 'border-gray-400',
        )}
      >
        <StylessA href={url}>
          <div className={'flex flex-wrap'}>
            <h3 className={twMerge('font-bold', font(1))}>{name}</h3>

            {url && <span className={font(0.75)}>{formatUrl(url)}</span>}
          </div>
        </StylessA>

        <span className={font(0.75)}>{job}</span>

        <span className={font(0.75)}>
          {formatYearMonth(new Date(startedAt))} –{' '}
          {endedAt ? formatYearMonth(new Date(endedAt)) : 'Now'}
        </span>
      </div>

      <div className={'flex flex-col gap-5'}>
        {projects
          .filter((project) => project.isImportant)
          .map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
      </div>
    </div>
  );
};

export default OrganizationCard;
