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
  clickable: boolean;
  position: {
    x: number;
    y: number;
  },
  borderType: IconButtonBorder;
  onClick: (id: string) => void;
  onRightClick: (id: string) => void;
}

export default function IconButton({
  id,
  borderType,
  clickable,
  onClick,
  onRightClick,
  position
}: IconButtonProps) {
  const style = {
    "--icon-button-size": `${ ICON_SIZE }px`,
    "--icon-hover-background-position-y": ICON_SIZE * -1,
    backgroundPositionX: position.x * ICON_SIZE * -1,
    backgroundPositionY: position.y * ICON_SIZE * -1
  } as React.CSSProperties;

  const classNames = [
    'icon-button',
    borderType,
    clickable && 'clickable'
  ].join(' ');

  const onClickHandler = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

  const onRightClickHandler = useCallback((ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault();

    onRightClick(id);
  }, [id, onRightClick]);

  return (
    <div 
      className={ classNames }
      onClick={ onClickHandler }
      onContextMenu={ onRightClickHandler }
      style={style}
    />
  );
}

