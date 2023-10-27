import { type SelectionDispatch, type Selection } from "../hooks/useSelection";
import { createContext, useContext } from "react";
import { useSelection } from "../hooks/useSelection";

const SelectionContext = createContext<Selection | null>(null);
const SelectionDispatchContext = createContext<SelectionDispatch | null>(null);

export function useSelectionState() {
  return useContext(SelectionContext);
}

export function useSelectionDispatch() {
  return useContext(SelectionDispatchContext);
}

export default function SelectionProvider({
  children
}: {
  children: React.ReactNode
}) {
  const {
    selection,
    setSelected
  } = useSelection();

  return (
    <SelectionContext.Provider value={ selection }>
      <SelectionDispatchContext.Provider value={{
        setSelected,
      }}>
        { children }
      </SelectionDispatchContext.Provider>
    </SelectionContext.Provider>
  );
}