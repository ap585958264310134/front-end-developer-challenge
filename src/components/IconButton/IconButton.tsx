import type React from 'react';
import './IconButton.css';
import { useCallback } from 'react';

const ICON_SIZE = 50;

export enum IconButtonBorder {
  Light = 'border-light',
  Dark = 'border-dark'
};

interface IconButtonProps {
  id: string;
  position: {
    x: number;
    y: number;
  },
  borderType: IconButtonBorder;
  onClick: (id: string) => void;
}

export default function IconButton({
  id,
  borderType,
  onClick,
  position
}: IconButtonProps) {
  const style = {
    "--icon-button-size": `${ ICON_SIZE }px`,
    backgroundPositionX: position.x * ICON_SIZE * -1,
    backgroundPositionY: position.y * ICON_SIZE * -1
  } as React.CSSProperties;

  const classNames = [
    'icon-button',
    borderType
  ].join(' ');

  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  return (
    <div 
      className={ classNames }
      onClick={ onClickHandler }
      style={style}
    />
  );
}

