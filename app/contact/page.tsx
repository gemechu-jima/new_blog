import React from 'react'
import Image from 'next/image'
import Form from 'next/form'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';

export const metadata = {
  title: 'Contact - ',
  icons: {
    icon: '/assets/logo.png',
  },
} 
export default function Contact() {
  return (
    <div className='w-[90%] mx-auto dark:bg-gray-800 bg-gray-200'>
      <div className='relative   w-full h-[300px]'>
              <Image src={'/assets/images/img_rectangle_14.png'} alt="phone in hand" fill className="object-cover " />
              <div className='w-full h-full bg-black/70 absolute  flex items-center justify-center'>
                <h1 className='text-white text-4xl font-extrabold'>Contact Us</h1>
              </div>
            </div>

            <div className='w-full xl:w-[90%]  mx-auto flex sm:flex-row flex-col justify-between mt-10 '>
               <div className='flex-1'>
                <div className='h-[400px] w-[70%] relative'>
                <Image src={'/assets/bg-rm.png'} alt="" width={500} height={500}  className=" object-cover z-20 w-96 h-96 rounded-2xl mix-blend-normal" />
                </div>
                <div className='flex items-center gap-3  my-4'>
                  <EmailIcon className='text-sky-500'/>
                  <div>
                    <h1 className='font-bold'>Quick Contact</h1>
                    <h3 className=' font-extralight'>onetwo7504@gmail.com</h3>
                  </div>
                </div>
                <div className='flex items-center gap-3 my-4'>
                  <PhoneIcon className='text-sky-500'/>
                  <div>
                    <h1 className='font-bold'>Phone Number </h1>
                    <h3 className=' font-extralight'>Ethiopia +251911232132 </h3>
                     <h3 className=' font-extralight'>LA US +1903857234</h3>
                  </div>
                </div>
                <div className='flex items-center gap-3  my-4'>
                  <LocationOnIcon className='text-sky-500'/>
                  <div>
                    <h1 className='font-bold'>HeadeQuater</h1>
                    <h3 className=' font-extralight'>bole, Addis Ababa Ethiopia</h3>
                  </div>
                </div>
               </div>
               <div className='flex-1  bg-white dark:bg-gray-950 shadow-2xs rounded-2xl p-4 '>
                  <Form action={'/'}>
                      <div className='flex pt-4 my-3 border-b  border-slate-400 md:w-120 mx-auto'>
                         <label><PersonIcon className='text-slate-400'/></label>
                         <input type='text' name='name' placeholder='Type Your Name Here' className='outline-none w-full focus:outline-2 ml-2 '/>
                      </div>
                      <div className='flex pt-4 my-3 border-b  border-slate-400 md:w-120 mx-auto'>
                         <label><PhoneIcon className='text-slate-400'/></label>
                         <input type='text' name='name' placeholder='Type Your Phone number Here' className='outline-none w-full focus:outline-2 ml-2'/>
                      </div>
                       <div className='flex pt-4 my-3 border-b  border-slate-400 md:w-120 mx-auto'>
                         <label><EmailIcon className='text-slate-400'/></label>
                         <input type='text' name='name' placeholder='Type Your Email Here' className='outline-none w-full focus:outline-2 ml-2'/>
                      </div>
                       <div className='flex pt-4 my-3 border-b  border-slate-400 md:w-120 mx-auto'>
                         <label><SubjectIcon className='text-slate-400'/></label>
                         <input type='text' name='name' placeholder=' subject' className='outline-none w-full focus:outline-2 ml-2'/>
                      </div>
                       <div className='flex pt-4 my-3 border-b  border-slate-400 md:w-120 mx-auto'>
                         <label><EmailIcon className='text-slate-400'/></label>
                         <input type='text' name='name' placeholder='how can we help you? feel free to go touch' className='outline-none w-full focus:outline-2 ml-2'/>
                      </div>

                      <div className=' md:w-120 mx-auto'>
                        <p className='flex'><input type='checkbox' className='text-sky-400 rounded-full m-2'/>I here by agree to our <strong className='text-amber-600'>Privacy policy</strong> terms</p>
                        <button className={`rounded-full cursor-pointer bg-sky-500 text-white px-4 py-2 mt-4`}>Submit Form</button>
                      </div>
                  </Form>
               </div>
            </div>
    </div>
  )
}
