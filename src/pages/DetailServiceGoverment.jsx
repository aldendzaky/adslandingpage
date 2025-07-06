import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import hrmicon from "../assets/icon/detailservice_goverment/hrm_icon.png";
import financeicon from "../assets/icon/detailservice_goverment/finance_icon.png";
import monitoringicon from "../assets/icon/detailservice_goverment/monitoring_icon.png";
import repoicon from "../assets/icon/detailservice_goverment/repository_icon.png";
import workflowicon from "../assets/icon/detailservice_goverment/workflow_icon.png";
import portalicon from "../assets/icon/detailservice_goverment/portal_icon.png";
import gmbgoverment1 from "../assets/gambar/detailservice_goverment/goverment_detail.png";
import gmbgoverment2 from "../assets/gambar/detailservice_goverment/goverment_detail-1.png";
import gmbaioffer from "../assets/gambar/detailservice_ml/other offer/ai_other offer.png";
import gmbblockchainoffer from "../assets/gambar/detailservice_ml/other offer/blockchain_otheroffer.png";
import gmbbusinessoffer from "../assets/gambar/detailservice_ml/other offer/business_otheroffer.png";

export default function DetailServiceGoverment() {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <main className="main mt-30 mr-10 ml-10">
      
    <div className='md:mb-30 mb-30'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>
              Goverment Digital Platform
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-15 md:mr-15'>
              The Government Digital Platform offers an integrated solution for managing human resources, finance, monitoring, legal documents, and citizen services. Features include automated payroll, budget planning, performance tracking, and public complaint management, all within a secure, user friendly portal designed to enhance efficiency, transparency, and public access.
              </p>
          </div>

          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2 md:mb-20'>Explore Our Goverment Digital Platform</h1>
            </div>

          <div className="w-full mb-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={hrmicon} alt="datamanage Icon" className="w-[170px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Human Resources Management (HRM)</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We offer an integrated system to efficiently manage human resource processes. This includes features for attendance using selfie and geolocation, automated payroll and payslip generation, and performance management through KPI monitoring and evaluations.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={financeicon} alt="Software Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Finance Management (RKA-KL)</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Our digital finance management system enables ministries and government agencies to streamline budgeting and reporting processes. It supports automated planning and financial reporting, ensures secure and consistent data integration across units, and provides real-time monitoring and financial tracking.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={monitoringicon} alt="datamanage Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Monitoring System</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We provide internal supervision (SPI) and budget proposal systems to improve transparency and accountability. This includes tracking audit results, follow-up actions, and recommendations, as well as documenting operational activities effectively.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={repoicon} alt="Software Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Repository Management</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Our repository services allow secure and collaborative cloud-based file storage across devices. The JDIH Management feature helps organize legal documents structurally, while AI and Executive AI Chatbots provide fast access to legal information for the public, government staff, and legal institutions.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 5 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={workflowicon} alt="datamanage Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Workflow Automation</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We digitize public service processes through features such as OCR-based registration for automatic document scanning and a WhatsApp-based complaint system that automates notifications and allows direct interaction with administrators for efficient issue resolution.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={portalicon} alt="Software Icon" className="w-[200px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Portal Services</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Our portal solutions include SSO (Single Sign-On) for seamless access to multiple services with one login. We provide e-Government landing pages that are informative and responsive, and a user-friendly CMS that allows content management without coding. 
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
      <img src={gmbgoverment1} alt="Connect" className="w-full h-full rounded-lg" />
      <img src={gmbgoverment2} alt="Tablet AR" className="md:w-110 md:h-110 rounded-lg" />
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
          to="./"
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
          to="/service/"
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