import React from 'react'

const button = ({onClick, content, tailwindClasses}) => {
  return (
    <>
        <button className={`${tailwindClasses}`} onClick={onClick}>{content}</button>
    </>
  )
}

export default button