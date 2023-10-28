import { useCallback } from "react";
import { useSelectionDispatch, useSelectionState } from "../../contexts/SelectionContext";
import { IconButtonBorder } from "../IconButton/IconButton";
import type { ButtonDefinition } from "./Path";

const SPRINT_ROW_ENABLED = 0;
const SPRINT_ROW_DISABLED = 1;

interface ParsedButtonDefinition {
  id: string;
  borderType: IconButtonBorder;
  lastButton: boolean;
  onClick: (id: string) => void
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

  const onClick = useCallback((id: string) => {
    if (!state || !dispatcher) {
      return;
    }

    const {
      selected
    } = state;

    const value = !selected.includes(id);

    dispatcher.setSelected(id, value);
  }, [state, dispatcher]);

  if (!state || !dispatcher) {
    return {
      parsedButtonDefinitions: []
    };
  }

  const parsedButtonDefinitions: Array<ParsedButtonDefinition> = buttonsDefinition.map((buttonDefintion, i) => {
    const enabled = state.selected.includes(buttonDefintion.id);

    return {
      id: buttonDefintion.id,
      borderType: enabled ? IconButtonBorder.Light : IconButtonBorder.Dark,
      lastButton: i === buttonsDefinition.length - 1,
      onClick,
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