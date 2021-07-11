import React, { useState } from 'react';
import Todo from './Todo';
// import TodoNew from './TodoNew';

import styles from './hookUseState.module.scss';

function Example() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([
    { text: 'Learn Hooks', url: 'https://reactjs.org/docs/hooks-state.html' },
    { text: 'Learn Storybook', url: 'https://storybook.js.org/tutorials/intro-to-storybook/' },
    { text: 'Learn Jest', url: 'https://jestjs.io/docs/tutorial-react' },
    { text: 'Learn Enzyme', url: 'https://scotch.io/tutorials/testing-react-components-with-enzyme-and-jest' },

  ]);

  const renderedTodos = todos.map((todo, i) => {
    return (
      <Todo
        key={i}
        title={todo.text}
        url={todo.url}
      />
    )
  })

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
      {renderedTodos}
      <hr />
    </div>
  )
}

export default Example;