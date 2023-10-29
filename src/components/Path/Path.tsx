import './Path.css';
import ButtonConnector from "components/ButtonConnector/ButtonConnector";
import IconButton from "components/IconButton/IconButton";
import React from 'react';
import { usePath } from './usePath';

export interface ButtonDefinition {
  id: string;
  iconPositionInFile: number;
}

export interface PathProps {
  buttonsDefinition: Array<ButtonDefinition>;
}

export default function Path(props: PathProps) {
  const { 
    connectorStatuses,
    parsedButtonDefinitions
  } = usePath(props.buttonsDefinition); 

  return (
    <div className="path">
      { parsedButtonDefinitions.map((button, i) => {
        return (
          <React.Fragment key={ `iconButtonFragment${ i }` }>
            <IconButton
              key={ button.id }
              id={ button.id }
              borderType={ button.borderType }
              clickable={ button.clickable }
              onClick={ button.onClick }
              onRightClick={ button.onRightClick }
              position={ button.position }
            />
            {!button.lastButton && (
              <ButtonConnector key={ `connector${ i }` } enabled={ connectorStatuses[i] } />
            )}
          </React.Fragment>
        );
      }) }
    </div>
  );
}
