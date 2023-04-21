import React, { useState } from 'react'
import Button from '@/components/presentational/Button'
import {buttonStyles} from '../../../pages/tailwindStyles';


const Footer = ({chris}) => {

  // // Button Logic
  // const [count, setCount] = useState(0)

  // const handleClick = () => {
  //   setCount(count +1)
  // }



  return (
    <>
      <footer className='bg-slate-400 w-full text-black flex flex-col justify-center items-center'>
        <ul>
          {/* Create a array of the bject key pair values and iterate */}
          {/* {Object.entries(chris).map(([key, value]) => (
            <li key={key}>
              {value}
            </li>
          ))}         */}
        </ul>



        {/* <Button onClick={handleClick} content={count} tailwindClasses={buttonStyles.commonButton}></Button> */}
      
      </footer>
    </>
  )
}

export default Footer