import './ButtonConnector.css';

interface ButtonConnectorProps {
  enabled: boolean;
}

export default function ButtonConnector(props: ButtonConnectorProps) {
  const classNames = [
    'button-connector',
    props.enabled && 'enabled'
  ].join(' ');

  return (
    <div className={ classNames }></div>
  );
}
