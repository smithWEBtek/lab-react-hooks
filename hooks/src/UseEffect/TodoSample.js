import { useState, useEffect } from 'react';

const TodoSample = (props) => {
  const [todo, setTodo] = useState(null)
  const [count, setCount] = useState(1)

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json)
  //       if (!todo) {
  //         setTodo(json)
  //       }
  //     })
  // }, [count, todo])

  const fetchCountTodo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setTodo(json)
      })
    setCount(count + 1)
  }

  return (
    <div>
      {todo ? todo.title : null}
      <button style={{ display: 'block', margin: '2rem auto' }} onClick={fetchCountTodo}>get count todo</button>
    </div>
  )
}

export default TodoSample;
