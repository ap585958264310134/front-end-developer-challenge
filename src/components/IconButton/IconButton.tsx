import type React from 'react';
import './IconButton.css';

const ICON_SIZE = 50;

interface IconButtonProps {
  position: {
    x: number;
    y: number;
  }
}

export default function IconButton(props: IconButtonProps) {
  const style = {
    "--icon-button-size": `${ ICON_SIZE }px`,
    backgroundPositionX: props.position.x * ICON_SIZE * -1,
    backgroundPositionY: props.position.y * ICON_SIZE * -1
  } as React.CSSProperties;

  return (
    <div className="icon-button" style={style}></div>
  );
}

