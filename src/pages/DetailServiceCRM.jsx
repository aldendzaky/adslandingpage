import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import chatboticon from "../assets/icon/detailservice_crm/chatbot_icon.png";
import metabusinessicon from "../assets/icon/detailservice_crm/metabusiness_icon.png";
import chatscript from "../assets/icon/detailservice_crm/chatscript_icon.png";
import omniicon from "../assets/icon/detailservice_crm/omni_icon.png";
import callcentericon from "../assets/icon/detailservice_crm/callcenter_icon.png";
import gmbcrm1 from "../assets/gambar/detailservice_crm/crm_detail.png";
import gmbcrm2 from "../assets/gambar/detailservice_crm/crm_detail2.png";
import gmbaioffer from "../assets/gambar/detailservice_ml/other offer/ai_other offer.png";
import gmbblockchainoffer from "../assets/gambar/detailservice_ml/other offer/blockchain_otheroffer.png";
import gmbbusinessoffer from "../assets/gambar/detailservice_ml/other offer/business_otheroffer.png";


export default function DetailServiceCRM() {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <main className="main mt-30 mr-10 ml-10">
      
    <div className='md:mb-30 mb-30'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>
              Citizen Relationship Management
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-15 md:mr-15'>
              The Citizen Relationship Management (CRM) platform offers an integrated digital communication solution to help governments and businesses connect with citizens. Featuring AI chatbots, VoIP call centers, and omnichannel support via WhatsApp, Telegram, Facebook, and Instagram, it enables responsive, automated, and secure public engagement in one seamless system.
              </p>
          </div>

          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2 md:mb-20'>Explore Our Citizen Relationship Management</h1>
            </div>

          <div className="w-full mb-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={chatboticon} alt="datamanage Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">ChatBot Builder</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Boost productivity and reduce operational costs through AI powered chatbots. Equipped with knowledge training, conversation design, API integration, managed services to create engaging,and human like digital interactions.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={metabusinessicon} alt="Software Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Meta Business Partner Support</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Gain access to exclusive Meta features and trusted support. Green/blue verification badges signal high service standards and enable priority access to Facebook, Instagram, and WhatsApp APIs.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={chatscript} alt="datamanage Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Chat Script Generator</h3>
            <p className="text-gray-500 mt-2 text-sm">
            No-code tool to auto-generate chatbot flows. Build scripts for customer service, FAQs, and e-commerce interactions with minimal effort just input your use case and let the system generate responses.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={omniicon} alt="Software Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Omnichannel Integration</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Manage customer communication across WhatsApp, Telegram, Facebook, and Instagram through seamless API integration. Features include automation, green verification badges, and CRM/payment system connectivity.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 5 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={callcentericon} alt="datamanage Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Call Center & VoIP</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Provide comprehensive inbound and outbound call services. Includes infrastructure, applications, and daily operations. VoIP tech offers secure, low cost voice calls over the internet with realtime monitoring and encrypted communication.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
      <img src={gmbcrm1} alt="Connect" className="w-full h-full rounded-lg" />
      <img src={gmbcrm2} alt="Tablet AR" className="md:w-110 md:h-110 rounded-lg" />
    </div>
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-3 mb-30 gap-8">
        {/* card 1 */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg">
      <img src={gmbaioffer} alt="" className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">Artificial Intelligence &  Machine Learning Services</h3>
          <p className="text-sm text-gray-600 mb-4">Provides comprehensive AI & Machine Learning services, from data preparation and model development (AutoML, NLP, CV, deep learning) to p</p>

          <Link
          to="/service/ai"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition w-fit"
        >
          Read More ↗
        </Link>
        </div>
      
      </div>
    </div>

     {/* card 2 */}
     <div className="bg-white rounded-xl shadow hover:shadow-lg">
      <img src={gmbblockchainoffer} alt="" className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">Blockchain Development Services</h3>
          <p className="text-sm text-gray-600 mb-4">Provides blockchain technology development services including network setup with Hyperledger Besu for enterprise needs, smart contract developm</p>

          <Link
          to="/service/blockchain"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition w-fit"
        >
          Read More ↗
        </Link>
        </div>
      
      </div>
    </div>

    {/* card 3 */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg">
      <img src={gmbbusinessoffer} alt="" className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-semibold mb-2">Business Intelligence Services</h3>
          <p className="text-sm text-gray-600 mb-4">As IT consultants, our commitment is to assist you in taking the first steps toward transforming your business ideas into exceptional application products</p>

          <Link
          to="/service/bi"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition w-fit"
        >
          Read More ↗
        </Link>
        </div>
      
      </div>
    </div>
</div>

    </main>
    <Footer />
    </>
  );
}