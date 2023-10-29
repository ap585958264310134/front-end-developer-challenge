import SelectionProvider from 'contexts/SelectionContextProvider';
import './CalculatorContainer.css';

interface CalculatorContainerProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function CalculatorContainer({
  children
}: CalculatorContainerProps) {
  return (
    <div className="calculator-container">
      <SelectionProvider>
        { children }
      </SelectionProvider>
    </div>
  )
}