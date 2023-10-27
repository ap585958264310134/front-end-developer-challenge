import type React from 'react';
import './IconButton.css';
import { useCallback } from 'react';

const ICON_SIZE = 50;

interface IconButtonProps {
  id: string;
  position: {
    x: number;
    y: number;
  }
  onClick: (id: string) => void;
}

export default function IconButton({
  id,
  onClick,
  position
}: IconButtonProps) {
  const style = {
    "--icon-button-size": `${ ICON_SIZE }px`,
    backgroundPositionX: position.x * ICON_SIZE * -1,
    backgroundPositionY: position.y * ICON_SIZE * -1
  } as React.CSSProperties;

  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div 
      className="icon-button" 
      onClick={ onClickHandler }
      style={style}
    />
  );
}

