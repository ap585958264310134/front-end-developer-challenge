import type React from 'react';
import './ButtonConnector.css';

interface ButtonConnectorProps {
  enabled: {
    left: boolean;
    right: boolean;
  }
}

function getButtonConnectorVariable(status: boolean, border: boolean = false) {
  const statusPart = status ? 'enabled' : 'disabled';
  const borderPart = border ? '-border' : '';

  return `var(--button-connector--${statusPart}${borderPart}-color)`;
}

export default function ButtonConnector(props: ButtonConnectorProps) {
  const style = {
    backgroundImage: `linear-gradient(
      ${ getButtonConnectorVariable(props.enabled.left) },
      ${ getButtonConnectorVariable(props.enabled.right) }
    )`,
    borderImage: `linear-gradient(
      ${ getButtonConnectorVariable(props.enabled.left, true) },
      ${ getButtonConnectorVariable(props.enabled.right, true) }
    ) 1`,
  } as React.CSSProperties;

  return (
    <div className="button-connector" style={style}></div>
  );
}
