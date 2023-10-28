import './CounterContainer.css';
import Counter from "../Counter/Counter";

export default function CounterContainer() {
  return (
    <div className="counter-container">
      <Counter />
      <div className="description">Points Spent</div>
    </div>
  )
}