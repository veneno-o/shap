import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { instace } from './https/axios'
import toast from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    
    // 批量请求
    const requests = Array.from({ length: 5 }, (_, i) => instace.get(`http://localhost:5173/data/${i+1}`));
    Promise.all(requests)
      .then(responses => {
        console.log('All data fetched', responses);
      })
      .catch(errors => {
        console.error('Some requests failed', errors);
      });
  },[])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1)
          toast.success('Here is your toast.');
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
