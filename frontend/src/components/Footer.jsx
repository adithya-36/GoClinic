import React from 'react'
import Logo from '../assets/logo.png'
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-14 mt-40 text-sm'>

        {/*left side*/}
        <div>
          <img className='mb-5 w-40' src={Logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        
        {/*center side*/}
        <div>
          <p className='text-xl font-medium mb-5 text-gray-700'>COMPANY</p>
          <ul className='flex flex-col gap-2  text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        {/*right side*/}
        <div>
          <p className='text-xl font-medium mb-5 text-gray-700'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2  text-gray-600'>
            <li>adithyas2026@gmail.com</li>
            <li>+918590428774</li>
            <li>Trivandrum, Kerala, India</li>
          </ul>
        </div>

      </div>
      <div>
        <hr />
        <p className='py-5 text-center text-sm'>Copyright © 2025 @AdithyaShaji - All Right Reserved.</p>
      </div>
    </div>

  )
}

export default Footer