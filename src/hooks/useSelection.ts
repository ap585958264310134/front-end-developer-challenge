import { useCallback, useState } from 'react';

export interface Selection {
  selected: Array<string>;
  maxSelected: number;
}

export interface SelectionDispatch {
  setSelected: (id: string, value: boolean) => void
}

const MAX_SELECTED = 6;

export function useSelection() {
  const [selection, setSelection] = useState<Selection>({
    selected: [],
    maxSelected: MAX_SELECTED
  });

  const setSelected: SelectionDispatch["setSelected"] = useCallback((id: string, value: boolean): void => {
    let newSelection = selection.selected;

    if (value) {
      newSelection.push(id);
    } else {
      newSelection = newSelection.filter(el => el !== id);
    }

    if (newSelection.length > selection.maxSelected) {
      return;
    }

    setSelection({
      ...selection,
      selected: newSelection
    });
  }, [selection, setSelection]);

  return {
    selection,
    setSelected
  };
}
