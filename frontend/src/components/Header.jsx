import React from 'react'
import Arrow from '../assets/arrow.png'
import Group from '../assets/group.png'
import User from '../assets/user.png'
import User1 from '../assets/user1.png'
import User2 from '../assets/user2.png'
const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-8 md:px-10 lg:px-20'>
      {/* --- Left side --- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors</p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <div className='flex w-28'> 
            <img className='w-8 rounded-full z-30' src={User} alt="User" />
            <img className='w-8 rounded-full -ml-2 z-20' src={User1} alt="User1" />
            <img className='w-8 rounded-full -ml-2 z-10' src={User2} alt="User2" />
          </div>
          <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />schedule your appointment hassle-free.</p>
        </div>
        <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">Book Appointment <img className='w-3' src={Arrow} alt="Arrow" />
        </a>
      </div>
      {/* --- Right side --- */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={Group} alt="Group" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Header