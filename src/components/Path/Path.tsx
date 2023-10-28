import './Path.css';
import IconButton, { IconButtonBorder } from "../IconButton/IconButton";
import ButtonConnector from "../ButtonConnector/ButtonConnector";
import SelectionProvider, { useSelectionDispatch, useSelectionState } from '../../contexts/SelectionContext';

export interface ButtonDefinition {
  id: string;
  iconPositionInFile: number;
}

export interface PathProps {
  buttonsDefinition: Array<ButtonDefinition>;
}

export default function Path(props: PathProps) {
  const {
    buttonsDefinition = []
  } = props;

  const state = useSelectionState();
  const dispatcher = useSelectionDispatch();

  if (!state || !dispatcher) {
    return null;
  }

  const {
    selected
  } = state;

  const onButtonClick = (id: string) => {
    const value = !selected.includes(id);

    dispatcher.setSelected(id, value);
  }

  return (
    <div className="path">
      { buttonsDefinition.map((button, i) => {
        const notLastButton = i < buttonsDefinition.length - 1;

        return (
          <>
            <IconButton
              key={button.id}
              id={button.id}
              borderType={selected.includes(button.id) ? IconButtonBorder.Light : IconButtonBorder.Dark}
              onClick={onButtonClick}
              position={{
                x: button.iconPositionInFile,
                y: selected.includes(button.id) ? 0 : 1
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
