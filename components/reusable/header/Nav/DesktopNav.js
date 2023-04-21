import { spacing } from '@/pages/tailwindStyles'
import React, { useState } from 'react'
import MobileNav from './MobileNav'



const Nav = () => {

  const navContents = ["Records", "Artists", "Store", "Account"]

  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu((changeState) => (!changeState))
  }

  return (
    <nav className={`${spacing.paddingTitles} w-full`}>

      <div className={`${menu ? 'flex' : 'flex'} justify-between items-center relative`}>

        {/* Logo */}
        <h1 className='NeutralFaceBold tracking-[.30em] text-lg sm:text-2xl md:text-4xl z-10'>Collate</h1>

        {/* Desktop Nav List */}
        <ul className='hidden md:flex flex-row space-x-8 '>
          {navContents.map((navName, index) => (
            <li id={navName} className='NeutralFace tracking-[.20em] text-xs sm:text-sm' key={index}>{navName}</li>
          ))}
        </ul>

        {/* Burger Menu Icon */}
        <div className='flex md:hidden flex-col z-10' onClick={handleClick}>
          <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
          <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
          <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
        </div>

      </div>

      {/* Mobile Menu */}
      { menu && <MobileNav navLinks={navContents}/>}

    </nav>
  )
}

export default Nav