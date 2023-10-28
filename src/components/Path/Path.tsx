import './Path.css';
import IconButton from "../IconButton/IconButton";
import ButtonConnector from "../ButtonConnector/ButtonConnector";
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
          <>
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
              <ButtonConnector enabled={ connectorStatuses[i] } />
            )}
          </>
        );
      }) }
    </div>
  );
}
