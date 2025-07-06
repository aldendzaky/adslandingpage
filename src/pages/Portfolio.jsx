import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gmbscripmatic from "../assets/gambar/portofolio_saas/scripmatic.png";
import scripmaticlogo from "../assets/logo/portofolio_saas/scripmatic_logo.png";
import cursuslogo from "../assets/logo/portofolio_saas/cursus_logo.png";
import gmbcursus from "../assets/gambar/portofolio_saas/cursus.id.png";
import sharekuylogo from "../assets/logo/portofolio_saas/sharekuy_logo.png";
import gmbsharekuy from "../assets/gambar/portofolio_saas/sharekuy.png";
import forwardinlogo from "../assets/logo/portofolio_saas/forwadin_logo.png";
import gmbforwardin from "../assets/gambar/portofolio_saas/forwardin.png";
import shareinlogo from "../assets/logo/portofolio_saas/sharein_logo.png";
import gmbsharein from "../assets/gambar/portofolio_saas/sharein.png";
import onegetlogo from "../assets/logo/portofolio_saas/oneget_logo.png";
import gmboneget from "../assets/gambar/portofolio_saas/oneget.png";
import alllinkerlogo from "../assets/logo/portofolio_saas/alllinker_logo.png";
import gmballinker from "../assets/gambar/portofolio_saas/alllinker.png";
import panenpanenlogo from "../assets/logo/portofolio_startup/panenpanen_logo.png";
import gmbpanenpanen from "../assets/gambar/portofolio_startup/panenpanen_img.png";
import panenpanenclient from "../assets/logo/portofolio_startup/panenpanen_clientlogo.png";
import indocomlogo from "../assets/logo/portofolio_startup/indocomunity_logo.png";
import gmbindocom from "../assets/gambar/portofolio_startup/indocomuhub_img.png";
import indocomclient from "../assets/logo/portofolio_startup/indocomunity_clientlogo.png";
import donexpresslogo from "../assets/logo/portofolio_startup/donexpress_logo.png";
import gmbdonexpress from "../assets/gambar/portofolio_startup/Group 6963.png";
import donexpressclient from "../assets/logo/portofolio_startup/donexpress_clientlogo.png";
import binisologo from "../assets/logo/portofolio_startup/sniso_logo.png";
import gmbbiniso from "../assets/gambar/portofolio_startup/Group 6963-1.png";
import binisoclient from "../assets/logo/portofolio_startup/sniso_clientlogo.png";
import fotosingometal from "../assets/foto/portofolio_training/singometal_img.png";
import fotothematic2022 from "../assets/foto/portofolio_training/thematic2022_img.png";
import fotobumdes from "../assets/foto/portofolio_training/bumdes_img.png";
import fotothematic from "../assets/foto/portofolio_training/thematic_img.png";
import fotosmarteco from "../assets/foto/portofolio_training/smarteconomy_img.png";
import fotodigitalent2021 from "../assets/foto/portofolio_training/digitalentre2021_img.png";
import fotodigitalent2020 from "../assets/foto/portofolio_training/digitalentre2020.png";



const tabs = [
  { name: "Saas Product", id: "saas" },
  { name: "Startup Incubator", id: "incubator" },
  { name: "Training Center", id: "training" },
];

const TabContent = ({ tab }) => {
  switch (tab) {
    case "saas":
      return (
        <div className="space-y-10 mb-30">
          {/* Scriptmatic */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <img src={gmbscripmatic} alt="Scriptmatic" className="w-full md:w-100 md:h-100 rounded-lg" />
            <div>
              <img src={scripmaticlogo} alt="Scriptmatic Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Scriptmatic is a Customer Relationship Management (CRM) platform that simplifies customer service by assisting in generating response scripts for their customers. With Scriptmatic, users can create and send campaigns on a regular schedule to registered customer numbers.
              </p>
            </div>
          </div>

          {/* Cursus.id */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <div>
              <img src={cursuslogo} alt="Cursus.id Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Cursus.id is an e-learning management platform that offers a variety of valuable features. One of its main features is live classes, which enable users to engage in interactive learning. Additionally, there is a subscription option that provides access to high-quality content within the platform.
              </p>
            </div>
            <img src={gmbcursus} alt="Cursus.id" className="w-full md:w-100 md:h-100 rounded-lg" />
          </div>

          {/* Share Kuy */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <img src={gmbsharekuy} alt="Share Kuy" className="w-full md:w-100 md:h-100 rounded-lg" /> 
            <div>
              <img src={sharekuylogo} alt="Share Kuy Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Sharekuy is a platform that provides convenience for publishers to promote their products, create engaging campaigns, and establish connections with a wide range of social media influencers. With its comprehensive features, Sharekuy assists publishers in enhancing the exposure of their products and reaching a broader audience.
              </p>
            </div>
          </div>

          {/* Forwardin */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6">
            <div>
              <img src={forwardinlogo} alt="Forwardin Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Forwardin is a WhatsApp message management tool designed to help you send messages to many WhatsApp numbers and groups simultaneously. Forwardin also provides various advanced features such as auto-reply, broadcast features, campaign management, and synchronization of WhatsApp contacts and Google contacts.
              </p>
            </div>
            <img src={gmbforwardin} alt="Forwardin" className="w-full md:w-100 md:h-100 rounded-lg" />
          </div>

          {/* Sharein */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6">
            <img src={gmbsharein} alt="Sharein" className="w-full md:w-100 md:h-100 rounded-lg" />
            <div>
              <img src={shareinlogo} alt="Sharein Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Sharein is an innovative solution designed to streamline and expedite the management of posts on the Facebook platform. With advanced auto-post technology, Sharein enables users to easily organize and schedule posts across various Facebook pages and groups.
              </p>
            </div>
          </div>

          {/* Oneget */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6">
            <div>
              <img src={onegetlogo} alt="Oneget Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Oneget is a revolutionary web-based application for managing and maximizing the user experience on social media. This application assists users in integrating various social media platforms, analyzing their account performance, generating informative analytical reports, and delivering fresh content with its innovative idea generator feature.
              </p>
            </div>
            <img src={gmboneget} alt="Oneget" className="w-full md:w-100 md:h-100 rounded-lg" />
          </div>

           {/* AllLinker */}
           <div className="flex flex-col md:flex-row md:items-center items-start gap-6">
           <img src={gmballinker} alt="allinker" className="w-full md:w-100 md:h-100 rounded-lg" />
            <div>
              <img src={alllinkerlogo} alt="alllinker Logo" className="md:h-20 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Oneget is a revolutionary web-based application for managing and maximizing the user experience on social media. This application assists users in integrating various social media platforms, analyzing their account performance, generating informative analytical reports, and delivering fresh content with its innovative idea generator feature.
              </p>
            </div>
          </div>
        </div>
      );
    case "incubator":
      return <div className="text-gray-500">

      <div className="space-y-10 mb-30">
          {/* Panen Panen */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <img src={gmbpanenpanen} alt="panenpanen" className="w-full md:w-100 md:h-100 rounded-lg" />
            <div>
              <img src={panenpanenlogo} alt="panenpanen Logo" className="md:h-10 h-10 mb-10" />
              <p className="text-m text-gray-700">
              PanenPanen.id is a Supply Chain Management Platform Ecosystem Specific to Agricultural Products. Directly supplied by farmers, ranchers, and cultivators. Supported by the Warung Panen Program as a reseller partner.
              </p>
              <div className="pt-10">
              <h3 className="text-m font-medium text-gray-700">
              Our Client
              </h3>
              <img src={panenpanenclient} alt="panenpanen client Logo" className="md:h-15 h-10 mb-10" />
            </div>
            </div>
          </div>

          {/* Indo Community */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <div>
              <img src={indocomlogo} alt="indocomunity Logo" className="md:h-15 h-10 mb-10" />
              <p className="text-m text-gray-700">
              ICoHub (Indonesia Community Hub) creates synergy between communities throuhout Indonesia through MSME empowerment and development programs
              </p>
              <div className="pt-10">
              <h3 className="text-m font-medium text-gray-700">
              Our Client
              </h3>
              <img src={indocomclient} alt="indocomunity client Logo" className="md:h-15 h-10 mb-10" />
            </div>
            </div>
            <img src={gmbindocom} alt="indocomuhub" className="w-full md:w-100 md:h-100 rounded-lg" />
          </div>

          {/* Done Express */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-20">
            <img src={gmbdonexpress} alt="Donexpress" className="w-full md:w-100 md:h-100 rounded-lg" /> 
            <div>
              <img src={donexpresslogo} alt="Donexpress Logo" className="md:h-10 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Don Express Netwok is a platform that facilities expedition agents throghout Indonesia to export and import worldwide.
              </p>
              <div className="pt-10">
              <h3 className="text-m font-medium text-gray-700">
              Our Client
              </h3>
              <img src={donexpressclient} alt="donexpress client Logo" className="md:h-15 h-10 mb-10" />
            </div>
            </div>
          </div>

          {/* Bisniso */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6">
            <div>
              <img src={binisologo} alt="bisniso" className="md:h-15 h-10 mb-10" />
              <p className="text-sm text-gray-700">
              Binsisomall.com is an innovation of the Digital Business Ecosystem Platform that brings together suppliers, MSMEs, and resellers made easier and faster to develop business through an integrated digital marketing strategy.
              </p>
              <div className="pt-10">
              <h3 className="text-m font-medium text-gray-700">
              Our Client
              </h3>
              <img src={binisoclient} alt="donexpress client Logo" className="md:h-15 h-10 mb-10" />
            </div>
            </div>
            <img src={gmbbiniso} alt="bisniso" className="w-full md:w-100 md:h-100 rounded-lg" />
          </div>
        </div>
      </div>;
    case "training":
      return <div className="text-gray-500">
      <div className="space-y-10 mb-30">
          {/* Singometal */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <img src={fotosingometal} alt="singometal" className="w-full md:w-80 md:h-80 rounded-lg" />
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Launching of the</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">SINGOMETAL in Malang</h1>
              </div> 
              <p className="text-sm text-gray-700">
              ADS Digital Partner officially launched its newest venture, Singometal, in Malang. This new initiative is part of the company’s commitment to supporting industrial innovation and strengthening the manufacturing ecosystem in Indonesia. With Singometal, ADS aims to bring smart digital solutions to the metalworking industry, helping businesses improve efficiency, quality, and competitiveness.
              </p>
            </div>
          </div>

          {/* thematic 2022 */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Thematic Academy 2022</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">ADS X BDSMP KOMINFO</h1>
              </div> 
              <p className="text-sm text-gray-700">
              ADS Digital Partner collaborated with BPSDMP KOMINFO for Thematic Academy 2022, a government-supported program aimed at enhancing digital skills among the youth and workforce. Held across several regions, the academy focused on practical training in digital marketing. Through this initiative, ADS contributed to empowering local talent and supporting Indonesia’s digital transformation goals.
              </p>
            </div>
            <img src={fotothematic2022} alt="thematic2022" className="w-full md:w-80 md:h-80 rounded-lg" />
          </div>

          {/* Bumdes */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <img src={fotobumdes} alt="bumdes" className="w-full md:w-80 md:h-80 rounded-lg" />
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">BUMDES Training and</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">Assistance with Singosari</h1>
              </div> 
              <p className="text-sm text-gray-700">
              ADS Digital Partner provided training and assistance and also collaboration with the Singosari district. This initiative aimed to strengthen the capacity of local village enterprises through digital tools, business mentoring, and hands-on guidance. ADS supports sustainable rural development and promotes inclusive digital growth at the grassroots level.
              </p>
            </div>
          </div>

          {/* Digital Ecosystem */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Thematic Academy</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">Digital Ecosystem Training</h1>
              </div> 
              <p className="text-sm text-gray-700">
              As part of Thematic Academy, ADS Digital Partner conducted Digital Ecosystem Training to equip participants with essential skills in today’s digital landscape. The program covered topics like digital collaboration, platform development, and ecosystem thinking—helping individuals and communities become active players in Indonesia’s growing digital economy.
              </p>
            </div>
            <img src={fotothematic} alt="thematic2022" className="w-full md:w-80 md:h-80 rounded-lg" />
          </div>


          {/* smart economy */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <img src={fotosmarteco} alt="smarteconomy" className="w-full md:w-80 md:h-80 rounded-lg" />
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Smart Economy</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">Digital Economy Training</h1>
              </div> 
              <p className="text-sm text-gray-700">
              ADS Digital Partner held a Digital Economy Training under the Smart Economy initiative, focusing on empowering MSMEs and individuals to thrive in the digital marketplace. The program introduced participants to e-commerce, digital payments, and online business strategies, supporting inclusive economic growth through digital transformation.
              </p>
            </div>
          </div>

          {/* Digital Ecosystem */}
          <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <div className=" md:">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Digital Entrepreneurship</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">Academy 2021</h1>
              </div> 
              <p className="text-sm text-gray-700">
              In 2021, ADS Digital Partner participated in the Digital Entrepreneurship Academy (DEA), a program by KOMINFO aimed at developing entrepreneurial skills in the digital era. Through this initiative, ADS provided training in digital business models, branding, and marketing strategies—helping participants build and grow their own online businesses effectively.
              </p>
            </div>
            <img src={fotodigitalent2021} alt="digitalentre2021" className="w-full md:w-80 md:h-80 rounded-lg" />
          </div>

       {/* smart economy */}
       <div className="flex flex-col md:flex-row md:items-center items-start gap-6 mb-30">
            <img src={fotodigitalent2020} alt="digitalentre" className="w-full md:w-80 md:h-80 rounded-lg" />
            <div className="">
              <div className="mb-10">
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-blue-500">Digital Entrepreneurship</h1>
              <h1 className="md:text-5xl md:text-left text-center text-3xl font-bold text-neutral-900 pt-5">Academy 2020</h1>
              </div> 
              <p className="text-sm text-gray-700">
              ADS Digital Partner held a Digital Economy Training under the Smart Economy initiative, focusing on empowering MSMEs and individuals to thrive in the digital marketplace. The program introduced participants to e-commerce, digital payments, and online business strategies, supporting inclusive economic growth through digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>;
    default:
      return null;
  }
};

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("saas");

  return (
    <>
      <Navbar />

    <div className="main mt-30">

    <div className='mb-10' >
              <h1 className='md:text-6xl text-3xl text-center font-bold'>
                Our Portfolio
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-95 md:mr-95'>
              We showcase successful digital projects across IT consulting, SaaS platforms, training programs, and startup innovations empowering businesses nationwide.
              </p>
          </div>

      <div className="px-4 py-10 max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:mb-20 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-blue-600 border-blue-600"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <TabContent tab={activeTab} />
      </div>
   </div>

      <Footer />
    </>
  );
}
