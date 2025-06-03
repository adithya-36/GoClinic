import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import VerifiedIcon from '../assets/verified.png'
import InfoIcon from '../assets/info.png'
import RelatedDoctors from '../components/RelatedDoctors'
const Appointment = () => {
  const { docId } = useParams()
  const { topDoctors, currencySymbol } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')

  // Fetch doctor information based on docId
  const fetchDocInfo = async () => {
    const docInfo = topDoctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    // getting current date
    let today = new Date();
    let slots = []

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(24, 0, 0, 0);

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      }else{
        currentDate.setHours(10, 0, 0, 0);
        currentDate.setMinutes(0);
      }
      
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // add slot to array 
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });

        // incrementing time by 30mins
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots(prev => ([...prev, timeSlots]))
    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [topDoctors, docId])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  useEffect(() => {
  if (!docInfo && docId) {
    fetchDocInfo()
  }
}, [topDoctors, docId])



  return docInfo && (
    <div>
      {/*---Doctor info---*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className=''>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo?.name} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*---Doctor name,degree,experience---*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900 mt-2'>
            {docInfo.name}
            <img className='w-5' src={VerifiedIcon} alt="Verified" />
          </p>
          <div className='flex gap-2 items-center text-gray-600 text-sm mt-1'>
            <p>{docInfo.degree} - {docInfo.speciality} </p>
            <button className='border border-gray-500 rounded-full px-1 py-0.5 text-xs'>{docInfo.experience}</button>
          </div>
          {/*---Doctor description---*/}
          <div>
            <p className='flex items-center gap-1 font-medium text-sm text-gray-900 mt-4'>
              About
              <img className='w-4' src={InfoIcon} alt="Info" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <div>
            <p className='font-medium mt-4 text-gray-600'>Appointment fee :
              <span className='text-gray-500'>{currencySymbol}{docInfo.fee}</span>
            </p>
          </div>
        </div>
      </div>
      {/*---Doctor slots---*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length > 0 && docSlots.map((item,index)=>(
              <div onClick={() => {
                setSlotIndex(index)
              }} 
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${index === slotIndex ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-primary hover:text-white'} flex flex-col items-center justify-center`} 
              key={index}
              >
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p> {item[0] && item[0].datetime.getDate()} </p>
              </div>
            ))
          }
        </div>

        <div className='flex gap-3 w-full items-center mt-4 overflow-x-scroll'>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-400'} `} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}        
        </div>
        <button className='bg-primary mt-10 text-white text-sm  font-light py-3 px-14 rounded-full'>Book an appointment</button>
      </div>
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment
