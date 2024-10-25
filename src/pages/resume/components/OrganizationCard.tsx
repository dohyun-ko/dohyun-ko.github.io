import StylessA from '@/components/StylessA';
import useResponsiveFont from '@/hooks/useResponsiveFont';
import Organization from '@/types/Organization';
import { formatYearMonth } from '@/utils/dateFormats';
import { twMerge } from 'tailwind-merge';
import ProjectCard from './ProjectCard';

interface OrganizationCardProps {
  organization: Organization;
}

const OrganizationCard = ({ organization }: OrganizationCardProps) => {
  const { name, color, url, job, startedAt, endedAt } = organization;
  const { font } = useResponsiveFont();

  return (
    <div className={'Card'}>
      <div
        className={twMerge(
          'flex flex-col border-l-[5px] border-solid pl-[10px]',
          color ? `border-[${color}]` : 'border-gray-400',
        )}
      >
        <StylessA href={url}>
          <span className={twMerge('font-bold', font(2))}>{name}</span>
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
