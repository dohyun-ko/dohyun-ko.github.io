import LinkIcon from "@/assets/icons/link.svg";

interface StylessAProps {
  href?: string;
  children: React.ReactNode;
  hasIcon?: boolean;
}

const StylessA = ({ href, children, hasIcon = true }: StylessAProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "inherit",
        display: "inline-flex",
        gap: "5px",
        alignItems: "center",
      }}
    >
      {children}

      {href && hasIcon && <img src={LinkIcon} width={16} />}
    </a>
  );
};

export default StylessA;
