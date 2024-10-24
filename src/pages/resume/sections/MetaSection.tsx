interface MetaSectionProps {}

const MetaSection = ({}: MetaSectionProps) => {
  return (
    <div className={'Area'} id="meta-section">
      <div className={'Content'}>
        <div className={'flex'}>
          <p className={'text-[1.25rem] font-thin'}>Last update: 2024-09-22</p>
        </div>
      </div>
    </div>
  );
};

export default MetaSection;
