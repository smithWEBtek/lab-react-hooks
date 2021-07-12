import React, { useState, useEffect } from 'react';

const HookUseEffectCustom = () => {
  const [backgroundColor, setBackgroundColor] = useState('lightgray')

  useEffect(() => {
    console.log('document.styleSheets: ', window.document.styleSheets)
  })

  return (
    <>
      <h2 style={{ backgroundColor: backgroundColor }}>custom useEffect</h2>
      <button
        style={{ backgroundColor: 'lightblue' }}
        onClick={() => setBackgroundColor('lightblue')}>light blue</button>

      <button
        style={{ backgroundColor: 'yellow' }}
        onClick={() => setBackgroundColor('yellow')}>yellow</button>

      <button
        style={{ backgroundColor: 'violet' }}
        onClick={() => setBackgroundColor('violet')}>violet</button>

      <button
        style={{ backgroundColor: 'brown' }}
        onClick={() => setBackgroundColor('brown')}>brown</button>
    </>
  )
}

export default HookUseEffectCustom;
