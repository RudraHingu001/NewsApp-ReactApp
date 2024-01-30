import React from 'react'
import spinner from './spinner.gif';

export default function Spin() {
  return (
    <div className='text-center'>
      <img src={spinner} height={200} weight={200} alt='Loading'></img>
    </div>
  )
}
