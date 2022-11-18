import {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  const increment =()=>{
    setCount(count + 1)
  }

  const decrement =()=>{
    if(count > 0){setCount(count -1)}
  }
  return (
  <main className="App bg-slate-50 flex items-center flex-col h-screen justify-center  border-2 ">
      <section>
      <p className='mb-10 border-2 h-20 w-20 flex justify-center items-center rounded-full bg-black text-white'>{count}</p>
      </section>
      <section className='flex justify-between w-64 lg:w-96'>
      <button onClick={decrement} className="bg-red-600 text-white h-16 w-28 lg:w-40 rounded-md font-semibold">Decrement</button>
      <button onClick={increment} className="bg-green-400 text-white h-16 w-28 lg:w-40 rounded-md font-semibold">Increment</button>
      </section>
    
      
    </main>
  );
}

export default App;
