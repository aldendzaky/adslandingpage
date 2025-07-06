import Navbar from '../components/Navbar'
import Indexmarquee from '../components/Indexmarquee'
import Indexslider from '../components/Indexslider.jsx'
import Weprovidecard from '../components/Weprovidecard.jsx'
import FAQ from '../components/FAQ.jsx'
import Footer from '../components/Footer.jsx'
import gmbhero from '../assets/gambar/index/hero/hero_img.png'
import gmbcollaborator from '../assets/logo/index/hero/collaborator.png'
import fotoaboutus from '../assets/foto/index/foto_hero.jpg'
import softwareicon from '../assets/icon/index/about_section/software_icon.png'
import supplyicon from '../assets/icon/index/about_section/supply_icon.png'
import businessicon from'../assets/icon/index/about_section/business_icon.svg'


const Home = () => {
  return (
    <>
       <Navbar />$
        <main className='mt-30 mr-10 ml-10'>
         
          {/* HERO */}

          <div className="hero grid md:grid-cols-2 items-center  xl:gap-0 gap-6 grid-cols-1 mb-50">
           <div className=''>
            <h3 className='text-2xl md:text-left text-center'>
            Welcome to ADS  👋
            </h3>
            <h1 className='md:text-6xl/tight md:text-left text-center text-4xl/tight font-bold pt-4'>
              Your <span className='text-blue-500'>Innovative</span> Digital Transformation<span className='text-blue-500'> Partner</span></h1>
              <p className='text-base/loose opacity-50 pt-6 '>
              We turn ideas into digital success by providing expert IT consulting solutions that help you explore your potential, 
              drive innovation, improve efficiency, and achieve sustainable growth in today’s digital-driven business landscape.
              </p>

              <div className='md:pt-20 pt-10 mb-10'>
                <h3 className='sm:text-2xl'>
                  In Collaboration With
                </h3>
                <img src={gmbcollaborator} className='pt-4' />
              </div>

           </div>
            <img src={gmbhero} className='w-[500px] ml-auto' />
          </div>

          {/* ABOUT US */}

          <div className='about us mb-50 '>
            <div className='grid md:grid-cols-2 items-center grid-cols-1 mb-16'>
          <div className='items-center justify-center mb-6'>
            <h3 className='text-blue-500 font-semibold md:text-2xl md:text-left text-center'>
              This Is Who We Are
            </h3>
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


      {/* CLIENT */}

      <div className='client mb-50 '>
          <div className='mb-10' >
              <h1 className='md:text-6xl text-3xl text-center font-bold'>
                Our Amazing Client
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-95 md:mr-95'>
              We have been a part of digital transformation journey for a decade, we have solved our clients’ problems by developing outstanding projects.
              </p>
          </div>
          <div>
            
          <Indexmarquee />

          </div>
      </div>

      <div classname="wedoslider mb-30 ">

      <div className='grid md:grid-cols-2 items-center grid-cols-1 mb-16'>
          <div className='items-center justify-center mb-6'>
            <h3 className='text-blue-500 font-semibold md:text-2xl md:text-left text-center'>
              What We Do ?
            </h3>
            <h1 className='md:text-6xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2'>Established Since 2019</h1>
            </div>
            <p className='text-base/loose md:text-right text-center opacity-50 '>
            Developing digital supply chain platforms for agriculture and SMEs to empower Indonesia’s 
            suburban and rural areas through DoneXpress, PanenPanen, and Bisnisomall.
            </p>
          </div>
      
      <Indexslider />

      </div>

      <div className='mt-20'>
      <div className='mb-10' >
              <h1 className='md:text-6xl text-3xl text-center font-bold'>
               Solution We Provide
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-95 md:mr-95'>
              We run all kinds of services in form of Information & Technologies
              </p>
          </div>
      <Weprovidecard />
      </div>

      <div className=' grid md:grid-cols-2 grid-cols-1 items-center mt-30 mb-30'>

        <div>
        <h1 className='md:text-6xl md:text-left text-3xl text-center font-bold'>
            Frequently <span className='text-blue-500'>Asked</span>Questions
        </h1>
        </div>
      <FAQ />
      </div>
      

      </main>
    
      <Footer/>

    </>
  )
}

export default Home