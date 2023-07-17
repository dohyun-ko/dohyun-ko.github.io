interface StylessAProps {
  href: string;
  children: React.ReactNode;
}

const StylessA = ({ href, children }: StylessAProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
      }}
    >
      {children}
    </a>
  );
};

export default StylessA;
