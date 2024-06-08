import React from 'react'
import Link from 'next/link'

const TopContent = () => {
  return (
    <div className='text-black w-full h-[45px] flex pt-5 pb-2 justify-center items-center ' style={{ background: 'linear-gradient(to top, #FFB000, #FFFFF0)' }}>
  <p  className='justify-center items-center'>Join our Community <Link className='font-bold'  href="#">Learn More</Link></p>
</div>
  )
}

export default TopContent
