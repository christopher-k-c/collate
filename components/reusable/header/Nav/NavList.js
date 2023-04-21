import React from 'react'

const List = ({navContents, menu}) => {

    const menuDesktop = [
        "hidden md:flex flex-row space-x-8 items-end"
    ]

    const menuMobile = [
        "h-full w-3/4 bg-slate-900 sm:px-8 px-4 py-32 space-y-4 md:bg-black md:flex md:space-y-0 md:space-x-8 md:py-0 md:items-end"
    ]

  return (
    <>
        <ul className={`${menu ? menuMobile : menuDesktop}`}>
            {navContents.map((navName, index) => (
            <li id={navName} className='NeutralFace tracking-[.20em] text-xs sm:text-sm' key={index}>{navName}</li>
            ))}
        </ul>
    </>
  )
}

export default List