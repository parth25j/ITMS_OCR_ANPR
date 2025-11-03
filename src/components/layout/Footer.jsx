import React from 'react'

const Footer = () => {
  
    const year = new Date().getFullYear()

  return (
    <div className='h-7 flex justify-center relative'>
        <div className="w-10/12 bg-Primary h-full flex justify-center  rounded-md shadow-Primary shadow-md">
            <p className='text-secondary '>© {year} VAAU Technosoft</p>
        </div>
    </div>
  )
}

export default Footer