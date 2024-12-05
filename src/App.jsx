import {useReducer} from 'react'






const counterReducer = (state , action) => {
  switch(action.type){
    case 'increment' :
      return {count: state.count + 1};
    case 'decrement':
      return {count : state.count -1 };
    case 'reset':
      return {count : 0};
    default:
      return state ;
  }
};

const Counter = () => {
  const [state , dispatch ] = useReducer(counterReducer, {count:0});
  return (
    <div className='bg-gray-500 m-5 text-3xl rounded-full border-color-black'>
      <button className='bg-blue-400 m-3'
       onClick={()=> dispatch ({type:'increment'})}>Increment"</button>
      
      <button className='bg-blue-400 m-3'
       onClick={()=> dispatch ({type:'decrement'})}>Decrement"</button>
      
      <button className='bg-blue-400 m-3'
      onClick={()=> dispatch ({type:'reset'})}>Reset"</button>


      <div className='bg-white m-5 text-3xl'>{state.count}</div>



    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

//   const [count , setCount] = useState(0) 

//   const [incrementClicked , setIncrementClicked] = useState(false)
//   const [incrementoneClicked , setIncrementOneClicked] = useState(false)
//   const [decrementoneClicked , setDecrementOneClicked] = useState(false)
//   const  [decrementClicked , setDecrementClicked] = useState(false)
  
//   useEffect (()=> {
//     setCount(prevState => prevState+10)
//     } , [incrementClicked])

//   useEffect (()=> {
//     setCount(prevState=>prevState+1)
//   } , [incrementoneClicked])

//   useEffect (()=> {
//     setCount(prevState=>prevState-1)
//   } , [decrementoneClicked])
  


//   useEffect(()=> {
//     setCount(prevState=>prevState-10) 
//    } , [decrementClicked])
  
  
//   return (
//     <div className='m-5 '>

//           <div className='text-5xl mb-5'>{count}</div>
//           <button className='bg-red-400 text-2 rounded-full hover:focus:bg-lime-500 hover:after:bg-red-900'  onClick={()=> {setIncrementClicked(prevState =>!prevState)}
        
//           } >Increment by 10</button>

//           {/* tek tek button */}

// <button className='bg-orange-300 text-3 rounded-fill m-3 '
// onClick={()=> { setIncrementOneClicked(prevState => !prevState)}}
// >+1</button>


// <button className='bg-orange-300 text-3 rounded-fill  m-3'
// onClick={()=> { setDecrementOneClicked(prevState=> !prevState)}}
// >-1</button>

//           <button className='bg-red-400 text-2 rounded-full hover:focus:bg-lime-500'  onClick={()=> {setDecrementClicked(prevState=>!prevState)}}>

//           Decrement by 10</button>

          
//     </div>
//   )







export default App