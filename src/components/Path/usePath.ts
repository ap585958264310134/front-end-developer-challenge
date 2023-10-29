/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import { useSelectionDispatch, useSelectionState } from "contexts/SelectionContextProvider";
import { IconButtonBorder } from "components/IconButton/IconButton";
import type { ButtonDefinition } from "./Path";

const SPRINT_ROW_ENABLED = 0;
const SPRINT_ROW_DISABLED = 1;

interface ParsedButtonDefinition {
  id: string;
  borderType: IconButtonBorder;
  clickable: boolean;
  lastButton: boolean;
  onClick: (id: string) => void;
  onRightClick: (id: string) => void;
  position: {
    x: number;
    y: number;
  }
}

function isSelected(selected: string[], id: string):boolean {
  return selected.includes(id);
}

export function usePath(buttonsDefinition: Array<ButtonDefinition>): {
  parsedButtonDefinitions: Array<ParsedButtonDefinition>,
  connectorStatuses: Array<boolean>
} {
  const state = useSelectionState();
  const dispatcher = useSelectionDispatch();

  const clickHandler = (allowedValue: boolean, id: string) => {
    if (!state || !dispatcher) {
      return;
    }

    const {
      selected
    } = state;

    const value = !isSelected(selected, id);

    if (value !== allowedValue) {
      return;
    }

    dispatcher.setSelected(id, value);
  }

  const onClick = useCallback(clickHandler.bind(null, true), [state, dispatcher]);
  const onRightClick = useCallback(clickHandler.bind(null, false), [state, dispatcher]);

  const limitAvailable = useMemo(() => {
    if (state?.selected === undefined) {
      return false;
    }

    return state.selected.length < state.maxSelected;
  }, [state]);

  if (!state || !dispatcher) {
    return {
      parsedButtonDefinitions: [],
      connectorStatuses: []
    };
  }

  const {
    selected,
  } = state;

  const isSelectedWithData = isSelected.bind(null, selected);

  const buttonsClickAvailability = buttonsDefinition.map((buttonDefintion, i) => {
    const enabled = isSelectedWithData(buttonDefintion.id);
    const nextButtonEnabled = i < buttonsDefinition.length - 1 ?
      isSelectedWithData(buttonsDefinition[i + 1].id) :
      false;
    const previousButtonEnabled = i > 0 ?
      isSelectedWithData(buttonsDefinition[i - 1].id) :
      true;

    return {
      click: !enabled && previousButtonEnabled && limitAvailable,
      rightClick: enabled && !nextButtonEnabled,
    }
  });

  const parsedButtonDefinitions: Array<ParsedButtonDefinition> = buttonsDefinition.map((buttonDefintion, i) => {
    const enabled = isSelectedWithData(buttonDefintion.id);

    const buttonClickAvailability = buttonsClickAvailability[i];

    const clickable = buttonClickAvailability.click || buttonClickAvailability.rightClick;

    return {
      id: buttonDefintion.id,
      borderType: enabled ? IconButtonBorder.Light : IconButtonBorder.Dark,
      clickable,
      lastButton: i === buttonsDefinition.length - 1,
      onClick: buttonClickAvailability.click ? onClick : () => {},
      onRightClick: buttonClickAvailability.rightClick ? onRightClick : () => {},
      position: {
        x: buttonDefintion.iconPositionInFile,
        y: enabled ? SPRINT_ROW_ENABLED : SPRINT_ROW_DISABLED
      },
    }
  });

  const connectorStatuses = parsedButtonDefinitions.reduce((arr, button, i) => {
    if (i === parsedButtonDefinitions.length - 1) {
      return arr;
    }

    const buttonEnabled = isSelectedWithData(button.id);
    const nextButtonEnabled = isSelectedWithData(parsedButtonDefinitions[i + 1].id);

    return [
      ...arr,
      buttonEnabled || nextButtonEnabled
    ];
  }, [] as boolean[]);

  return {
    parsedButtonDefinitions,
    connectorStatuses
  };
}