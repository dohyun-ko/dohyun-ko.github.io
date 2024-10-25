import StylessA from '@/components/StylessA';
import Organization from '@/types/Organization';
import { formatYearMonth } from '@/utils/dateFormats';
import font from '@/utils/font';
import { twMerge } from 'tailwind-merge';
import ProjectCard from './ProjectCard';

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt } = organization;

  return (
    <div className={'Card'}>
      <div
        className={twMerge(
          'flex flex-col border-l-[5px] border-solid pl-2.5',
          color ? `border-[${color}]` : 'border-gray-400',
        )}
      >
        <StylessA href={url}>
          <h2 className={twMerge('font-bold', font(2))}>{name}</h2>
        </StylessA>

        <span>{job}</span>

        <span>
          {formatYearMonth(new Date(startedAt))} –{' '}
          {endedAt ? formatYearMonth(new Date(endedAt)) : 'Now'}
        </span>
      </div>

      <div className={'flex flex-col gap-5'}>
        {organization.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationCard;
