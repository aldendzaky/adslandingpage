import React from 'react'

import Marquee from 'react-fast-marquee'

import telkomlogo from '../assets/Marquee/Telkom_Indonesia_2013.png'
import plnlogo from '../assets/Marquee/pln-logo-33CA495F17-seeklogo.png'
import propamlogo from '../assets/Marquee/logo-propam.png'
import pertaminalogo from '../assets/Marquee/Logo-Pertamina-resize-2-1-540x540.png'
import kotamalanglogo from '../assets/Marquee/Logo_Kota_Malang_color.png'
import bareskrimlogo from '../assets/Marquee/Logo_Bareskrim.png'
import lambangpolri from '../assets/Marquee/Lambang_Polri.png'
import lambangpoldametro from '../assets/Marquee/Lambang_Polda_Metro_Jaya.png'
import kemenkumhamlogo from '../assets/Marquee/Kementerian-Hukum-Dan-Ham-Kemenkumham-Logo-Vector.png'
import img26 from '../assets/Marquee/image 26.png'
import img25 from '../assets/Marquee/image 25.png'
import img251 from '../assets/Marquee/image 25-1.png'
import img24 from '../assets/Marquee/image 24.png'
import img241 from '../assets/Marquee/image 24-1.png'
import img16 from '../assets/Marquee/image 16.png'
import img15 from '../assets/Marquee/image 15.png'
import img14 from '../assets/Marquee/image 14.png'
import flagministry from '../assets/Marquee/Flag_of_the_Ministry_of_Social_Affairs_of_the_Republic_of_Indonesia.png'

const Indexmarquee = () => {
  return (
    <>
    
    <Marquee behavior="" speed={50}
        pauseOnHover={true} direction="right" className="w-full overflow-hidden md:mb-10 mb-6">

    <div className='flex items-center gap-20'>
        <img src={telkomlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={plnlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={propamlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={pertaminalogo} alt="" className='h-15 w-auto' />
        <img src={kotamalanglogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={bareskrimlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={lambangpolri} alt="" className='md:h-15 h-10 w-auto' />
        <img src={lambangpoldametro} alt="" className='md:h-15 h-10 w-auto' />
        <img src={kemenkumhamlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img26} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img25} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img251} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img24} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img241} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img16} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img15} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img14} alt="" className='md:h-15 h-10 w-auto' />
        <img src={flagministry} alt="" className='md:h-15 h-10 w-auto' />
     </div>

    </Marquee>

    <Marquee behavior="" speed={50}
        pauseOnHover={true} direction="left" className="w-full overflow-hidden">

    <div className='flex items-center gap-20'>
    <img src={telkomlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={plnlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={propamlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={pertaminalogo} alt="" className='h-15 w-auto' />
        <img src={kotamalanglogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={bareskrimlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={lambangpolri} alt="" className='md:h-15 h-10 w-auto' />
        <img src={lambangpoldametro} alt="" className='md:h-15 h-10 w-auto' />
        <img src={kemenkumhamlogo} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img26} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img25} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img251} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img24} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img241} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img16} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img15} alt="" className='md:h-15 h-10 w-auto' />
        <img src={img14} alt="" className='md:h-15 h-10 w-auto' />
        <img src={flagministry} alt="" className='md:h-15 h-10 w-auto' />
     </div>

    </Marquee>
    
    
    </>
  )
}

export default Indexmarquee