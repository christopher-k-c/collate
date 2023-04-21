import React from 'react'

const MobileNav = ({navLinks}) => {
  return (
    <>
        {/* Mobile Nav List */}
        <div className='w-full h-screen bg-slate-500 absolute left-0 top-0 bottom-0 right-0 flex md:hidden'>
            <ul className='h-full w-3/4 bg-slate-900 sm:px-8 px-4 py-32 space-y-4'>
                {navLinks.map((navName, index) => (
                    <li id={navName} className='NeutralFace tracking-[.20em] text-xs sm:text-sm underline underline-offset-4' key={index}>{navName}</li>
                ))}
            </ul>
        </div>

    </>
  )
}

export default MobileNav