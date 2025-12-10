import React from 'react'

function Button({ children, onClick, type = 'button',className}) {
  return (
   <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 rounded focus:outline-none cursor-pointer focus:shadow-outline ${className}`}
    >
      {children}
    </button>
  )
}

export default Button