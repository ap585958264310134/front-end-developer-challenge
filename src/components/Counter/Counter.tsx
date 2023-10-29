import { useSelectionState } from 'contexts/SelectionContextProvider';
import './Counter.css';

export default function Counter(){
  const state = useSelectionState();

  if (!state) {
    return null;
  }

  const {
    maxSelected,
    selected
  } = state;

  const selectedNo = selected.length;

  return (
    <div className="counter">{ selectedNo } / { maxSelected }</div>
  )
}
