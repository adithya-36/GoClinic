import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import VerifiedIcon from '../assets/verified.png'
import InfoIcon from '../assets/info.png'
const Appointment = () => {
  const {docId} = useParams()
  const {topDoctors} = useContext(AppContext)
  const [docInfo, setDocInfo] =useState(null)
  // Fetch doctor information based on docId
  const fetchDocInfo = async () => {
    const docInfo = topDoctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }
  useEffect(()=>{
    fetchDocInfo()
  }, [topDoctors,docId ])
  return docInfo && (
    <div >
      {/*---Doctor info---*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className=''>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo?.name} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*---Doctor name,degree,experience---*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 mt-2'>{docInfo.name} <img className='w-5' src={VerifiedIcon} alt="Verified" />
          </p>
          <div className=' flex gap-2 items-center  text-gray-600 text-sm mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality} </p>
            <button className='border border-gray-500 rounded-full px-1 py-0.5 text-xs'>{docInfo.experience}</button>
          </div>
          {/*---Doctor description---*/}
          <div >
            <p className='flex items-center gap-1 font-medium text-sm text-gray-900 mt-4'>About <img className='w-4' src={InfoIcon} alt="Info" /> </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <div>
            <p className='text-lg mt-2 text-gray-700'>Appointment fee : ${docInfo.fee}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment