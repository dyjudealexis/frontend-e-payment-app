import React from 'react'

const HeaderMenu = ({ headerName }) => {
  return (
    <div className='mt-16 px-3'>
      <h1 className="title-h2 mb-3 font-semibold text-center">{headerName}</h1>
    </div>
  )
}

export default HeaderMenu
