import React from 'react'
export default function Counter(props) {
 const{counter,increment,decrement,reset} =props;   
  return (
    <div>
      <div className='app'>
        <div className='result w-75 mx-auto'>{counter}</div>
        <div className='row mt-5'>
            <div className='col-md-4'>
            
                <button type='button' className='btn btn-danger btn-sm text-white w-75 ms-5' onClick={increment}>Increment By 1</button>
            </div>
            
            <div className='col-md-4'>
                <button type='button' className='btn btn-success btn-sm text-white w-75 ms-5' onClick={decrement}>Decrement By 1</button>
            </div>

            
            <div className='col-md-4'>
                <button type='button' className='btn btn-danger btn-sm text-white w-75 ms-5' onClick={reset}>Reset</button>
            </div>
        </div>
      </div>
    </div>
  )
}
