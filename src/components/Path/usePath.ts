/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import { useSelectionDispatch, useSelectionState } from "../../contexts/SelectionContext";
import { IconButtonBorder } from "../IconButton/IconButton";
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

export function usePath(buttonsDefinition: Array<ButtonDefinition>): {
  parsedButtonDefinitions: Array<ParsedButtonDefinition>
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

    const value = !selected.includes(id);

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
      parsedButtonDefinitions: []
    };
  }

  const {
    selected,
  } = state;

  const buttonsClickAvailability = buttonsDefinition.map((buttonDefintion, i) => {
    const enabled = selected.includes(buttonDefintion.id);
    const nextButtonEnabled = i < buttonsDefinition.length - 1 ?
      state.selected.includes(buttonsDefinition[i + 1].id) :
      false;
    const previousButtonEnabled = i > 0 ?
      state.selected.includes(buttonsDefinition[i - 1].id) :
      true;

    return {
      click: !enabled && previousButtonEnabled && limitAvailable,
      rightClick: enabled && !nextButtonEnabled,
    }
  });

  const parsedButtonDefinitions: Array<ParsedButtonDefinition> = buttonsDefinition.map((buttonDefintion, i) => {
    const enabled = selected.includes(buttonDefintion.id);

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

  return {
    parsedButtonDefinitions
  };
}