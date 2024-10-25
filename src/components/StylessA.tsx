import LinkIcon from '@/assets/icons/link.svg';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface StylessAProps {
  href?: string;
  children: React.ReactNode;
  hasIcon?: boolean;
}

const StylessA = ({
  href,
  children,
  hasIcon = true,
  className,
  ...props
}: StylessAProps & React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        'inline-flex items-center gap-[5px] text-inherit underline',
        className,
      )}
      {...props}
    >
      {children}

      {href && hasIcon && <img src={LinkIcon} className={'min-w-4'} />}
    </a>
  );
};

export default StylessA;
