import React, { useState, useEffect } from 'react';

const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  // Similar to compoenentDidMount and componentDidUpdate
  useEffect(() => {
    // Update the title using the browser API
    document.title = `You clicked ${count} many times.`
  }, [count]); // only run if count changed

  if (count === 3) {
    setCount('asdf');
  } else if (count === 'asdf1') {
    setCount(4)
  }


  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default HookUseEffect;