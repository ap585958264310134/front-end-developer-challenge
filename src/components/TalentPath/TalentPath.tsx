import './TalentPath.css';

interface TalentPathProps {
  children: React.ReactElement;
  title: string;
}

export default function TalentPath({
  children,
  title
}: TalentPathProps) {
  return (
    <div className="talent-path">
      <div className="title">{ title }</div>
      { children }
    </div>
  );
}
