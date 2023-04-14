import { useState } from 'react'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1>ToDo List</h1>
    <form className = "new-item-form"  action="">
      <div className='form-row'>
        <label htmlFor="item">New Item</label>
        <input type="text" id="item"/>
      </div>
      <button className='btn'>Add</button>
    </form>
    </div>
  )
}

export default App
