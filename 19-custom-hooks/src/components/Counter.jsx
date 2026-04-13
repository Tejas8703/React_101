import useCounter from '../hooks/useCounter'

export default function Counter() {
  const { count, increaseCount } = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  );
}


