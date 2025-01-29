import React from 'react'
import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-700 font-semibold'>
        <p>CONTACT US</p>
      </div>

      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm'>

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: +91-000-000-0000 <br /> Email: example123@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at DOCTOR'SAPPOINT+</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black rounded-xl px-8 py-4 text-sm cursor-pointer hover:bg-primary hover:text-white hover:scale-105 transition-all'>Explore Jobs</button>
        </div>
        
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
      </div>
    </div>
  )
}

export default Contact
