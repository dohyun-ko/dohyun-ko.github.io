import LinkIcon from '@/assets/icons/link.svg';
import React from 'react';

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
      style={{
        color: 'inherit',
        display: 'inline-flex',
        gap: '5px',
        alignItems: 'center',
      }}
      className={className}
      {...props}
    >
      {children}

      {href && hasIcon && (
        <img src={LinkIcon} className={'min-w-4 md:min-w-6'} />
      )}
    </a>
  );
};

export default StylessA;
