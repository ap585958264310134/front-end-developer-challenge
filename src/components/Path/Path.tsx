import './Path.css';
import IconButton from "../IconButton/IconButton";
import ButtonConnector from "../ButtonConnector/ButtonConnector";

export interface ButtonDefinition {
  id: string;
  iconPositionInFile: number;
}

export interface PathProps {
  buttonsDefinition: Array<ButtonDefinition>,
  enabledButtons?: Array<string>;
  possibilityToAdd?: boolean;
}

export default function Path(props: PathProps) {
  const {
    buttonsDefinition = [],
    enabledButtons = [],
    possibilityToAdd = true
  } = props;

  return (
    <div className="path">
      { buttonsDefinition.map((button, i) => {
        const notLastButton = i < buttonsDefinition.length - 1;

        return (
          <>
            <IconButton
              key={button.id}
              position={{
                x: button.iconPositionInFile,
                y: enabledButtons.includes(button.id) ? 0 : 1
              }}
            />
            {notLastButton && (
              <ButtonConnector enabled={{
                left: true,
                right: true
              }} />
            )}
          </>
        );
      }) }
    </div>
  );
}
