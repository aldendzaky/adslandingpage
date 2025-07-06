import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import fotoaboutus from '../assets/foto/index/foto_hero.jpg'
import softwareicon from '../assets/icon/index/about_section/software_icon.png'
import supplyicon from '../assets/icon/index/about_section/supply_icon.png'
import businessicon from '../assets/icon/index/about_section/business_icon.svg'

const AboutUs = () => {
  return (

    <>
    <Navbar />
    <main className='mt-30 mr-10 ml-10'>

    <div className='md:mb-50 mb-30'>
              <h1 className='md:text-6xl text-3xl text-center font-bold'>
                About Us
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-95 md:mr-95'>
              ADS Digital Partner is an IT company helping businesses grow through consulting, SaaS, training, and startup incubation since 2019.
              </p>
          </div>
          <div className='about us mb-30 '>
            <div className='grid md:grid-cols-2 items-center grid-cols-1 mb-16'>
          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-6xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2'>ADS Digital Partner</h1>
            </div>
            <p className='text-base/loose md:text-right text-center opacity-50 '>
            ADS Digital Partner is an IT consulting company empowering Indonesia’s future through innovative solutions and 
            startups that strengthen digital supply chains in suburban and rural areas, based in Jakarta, Surabaya, and Bandung.
            </p>
          </div>
          <img src={fotoaboutus} className='w-auto mb-16' />

          <div className="w-full ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className="p-3 bg-white shadow-md rounded-lg">
            <img src={softwareicon} alt="Software Icon" className="w-[170px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Software Development</h3>
            <p className="text-gray-500 mt-2 text-sm">
              We build custom software to streamline operations, boost growth, and enhance competitiveness in the digital era.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className="p-3 bg-white shadow-md rounded-lg">
          <img src={supplyicon} alt="Software Icon" className="w-[170px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Supply Chain Improvement</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Enhance your supply chain using digital tools to boost efficiency, cut costs, and streamline end-to-end logistics.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className="p-3 bg-white shadow-md rounded-lg">
          <img src={businessicon} alt="Software Icon" className="w-[170px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Business Process Improvement</h3>
            <p className="text-gray-500 mt-2 text-sm">
              Streamline workflows, automate tasks, and align business processes with strategic organizational goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
          <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-55 md:mr-55 mb-50'>
          ADS Digital Partner (PT Adma Digital Solusi) is an IT consulting company that was founded in 2019 based in Jakarta, Surabaya and Bandung. We focus on presenting IT-based solutions for a better Indonesia in the future. Our startup lines, Donexpress, Panenpanen and Bisnisomall are continuously advancing the digital supply chain in sub-urban and rural areas.
              </p>

    </main>

    <Footer />

</>
    
    
   
  )
}

export default AboutUs