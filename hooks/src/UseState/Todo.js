import React from 'react';
import styles from './Todo.module.scss';

const Todo = (props) => {
  return (
    <div className={styles.Todo}>
      <h2><a href={props.url} className={styles.TodoUrl} target="_blank" rel="noreferrer">{props.title}</a></h2>
    </div>
  )
}

export default Todo;