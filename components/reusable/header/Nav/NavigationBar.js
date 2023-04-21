import React, { useState } from 'react'
import { spacing } from '@/pages/tailwindStyles'
import List from './NavList'

const D = () => {
    const navContents = ["Records", "Artists", "Store", "Account"]

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu((changeState) => (!changeState))
    }
  
    return (

        <nav className={`${spacing.paddingTitles} w-full `}>

            <div className={`${'flex justify-between  w-full'} `}>

                {/* Logo */}
                <h1 className='NeutralFaceBold tracking-[.30em] text-lg sm:text-2xl md:text-4xl z-10'>Collate</h1>


                <div className={`${!menu ? 'flex' : 'hidden md:flex '}`}>
                    <List menu={menu} navContents={navContents}></List>
                </div>

                {/* Burger Menu Icon */}
                <div className='flex md:hidden flex-col z-10' onClick={handleClick}>
                    <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
                    <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
                    <div className='w-[40px] h-[3px] bg-white my-1 rounded-lg'></div>
                </div>
            
            </div>

            <div className={`${menu ? 'w-full h-screen bg-slate-500 absolute left-0 top-0 bottom-0 right-0 flex md:hidden' : 'hidden'}`}>
                <List menu={menu} navContents={navContents}></List>
            </div>

        </nav>
  )
}

export default D