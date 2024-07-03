import React from 'react'

interface CounterProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

const CounterCallback = ({onIncrement, onDecrement}: CounterProps) => {
  return (
    <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
  )
}

export default CounterCallback