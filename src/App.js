import React, { Component } from "react";

//functional components

// const [count, setCount] = useState(0);

// const increment =()=>{
//   setCount(count + 1)
// }

// const decrement =()=>{
//   if(count > 0){setCount(count -1)}
// }
// return (
// <main className="App bg-slate-50 flex items-center flex-col h-screen justify-center  border-2 ">
//     <section>
//     <p className='mb-10 border-2 h-20 w-20 flex justify-center items-center rounded-full bg-black text-white'>{count}</p>
//     </section>
//     <section className='flex justify-between w-64 lg:w-96'>
//     <button onClick={decrement} className="bg-red-600 text-white h-16 w-28 lg:w-40 rounded-md font-semibold">Decrement</button>
//     <button onClick={increment} className="bg-green-400 text-white h-16 w-28 lg:w-40 rounded-md font-semibold">Increment</button>
//     </section>

//   </main>
//);

// class component
export default class App extends Component {
  constructor(props) {
    super();
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
  if(this.state.count > 0)  this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <main className="App bg-slate-50 flex items-center flex-col h-screen justify-center  border-2">
        <section>
          <p className="mb-10 border-2 h-20 w-20 flex justify-center items-center rounded-full bg-black text-white">
            {this.state.count}
          </p>
        </section>
        <section className="flex justify-between w-64 lg:w-96">
          <button
            className="bg-red-600 text-white h-16 w-28 lg:w-40 rounded-md font-semibold"
            onClick={this.increment}
          >Increment</button>
          <button
            className="bg-green-400 text-white h-16 w-28 lg:w-40 rounded-md font-semibold"
            onClick={this.decrement}
          >Decrement</button>
        </section>
      </main>
    );
  }
}
