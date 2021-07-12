import React, { useState } from 'react';

import styles from './hookUseState.module.scss';

function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');

  return (
    <div>
      <p>You clicked {count} times.</p>

      <button className={styles.Increment} onClick={() => setCount(count + 1)}>Increment</button>
      <button className={styles.Decrement} onClick={() => setCount(count - 1)}>Decrement</button>
      <hr />

      <p>The age is: {age}</p>
      <button onClick={() => setAge(age + 1)}>Older</button>
      <button onClick={() => setAge(age - 1)}>Younger</button>
      <hr />

      <p>Current fruit: {fruit}</p>
      {fruit === 'banana' ? <button onClick={() => setFruit('apple')}>Apple</button> : null}
      {fruit === 'apple' ? <button onClick={() => setFruit('banana')}>Banana</button> : null}
      <hr />

      <h3>Todos</h3>
      {/* <TodoNew /> */}
      <hr />
    </div>
  )
}

export default Example;