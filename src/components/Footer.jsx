import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='w-full absolute  bottom-4'>
      <h1 className=' text-center font-semibold text-base text-[#6c6c6c]'>{`© copyright ${year}`}</h1>
    </div>
  )
}

export default Footer