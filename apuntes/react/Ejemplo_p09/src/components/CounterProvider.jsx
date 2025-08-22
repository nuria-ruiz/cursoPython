import React, { useState } from 'react' 

export default function CounterProvider({ initial = 0, children }) {
  const [count, setCount] = useState(initial)
  const inc = () => setCount(c => c + 1)
  const dec = () => setCount(c => c - 1)
  const reset = () => setCount(initial)

  // Si children es función, la ejecutamos pasándole API; si no, lo renderizamos tal cual
  return typeof children === 'function'
    ? children({ count, inc, dec, reset })
    : <>{children}</>
}
