import './CalculatorContainer.css';

interface CalculatorContainerProps {
  children: React.ReactElement | Array<React.ReactElement>;
}

export default function CalculatorContainer({
  children
}: CalculatorContainerProps) {
  return (
    <div className="calculator-container">
      { children }
    </div>
  )
}