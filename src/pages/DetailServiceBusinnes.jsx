import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import dataintegicon from "../assets/icon/detailservice_businnessintellegence/dataintegration_icon.png";
import gisicon from "../assets/icon/detailservice_businnessintellegence/gis_icon.png";
import fieldanalysticon from "../assets/icon/detailservice_businnessintellegence/fieldanalyst_icon.png";
import forecasticon from "../assets/icon/detailservice_businnessintellegence/forecasting_icon.png";
import dataengineericon from "../assets/icon/detailservice_businnessintellegence/dataengineering_icon.png";
import gmbbusiness1 from "../assets/gambar/detailservice_businnessintellegence/business_detail1.png";
import gmbbusiness2 from "../assets/gambar/detailservice_businnessintellegence/business_detail.png";
import gmbaioffer from "../assets/gambar/detailservice_ml/other offer/ai_other offer.png";
import gmbblockchainoffer from "../assets/gambar/detailservice_ml/other offer/blockchain_otheroffer.png";
import gmbbusinessoffer from "../assets/gambar/detailservice_ml/other offer/business_otheroffer.png";


export default function DetailServiceBusinnes() {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <main className="main mt-30 mr-10 ml-10">
      
    <div className='md:mb-30 mb-30'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>
              Business Intelligence Services
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-15 md:mr-15'>
              As IT consultants, our commitment is to assist you in taking the first steps toward transforming your business ideas into exceptional application products. With our profound knowledge of information technology, we will collaborate with you from idea conception to product development, to create software solutions that can fulfill your business objectives.
              </p>
          </div>

          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2 md:mb-20'>Explore Our Business Intelligence Solutions</h1>
            </div>

          <div className="w-full mb-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={dataintegicon} alt="datamanage Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Data Integration</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Integrate various data sources (relational, cloud, data warehouse) in real time. Supports RESTful APIs, semantic graphs, and Python integration for automation, machine learning, and data cleansing.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={gisicon} alt="Software Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">GIS (Geospatial Intelligence Services)</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We utilize Mapbox to deliver dynamic and customizable location-based visualizations. We also integrate ESRI technologies for advanced spatial analysis, including 3D mapping, remote sensing, and field operations.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={fieldanalysticon} alt="datamanage Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Field of Analytics</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We provide interactive and dynamic dashboards with high level security and realtime data access. Our reporting tools enable deep analytical insights to support smarter business decisions. 
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={forecasticon} alt="Software Icon" className="w-[130px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Forecasting Services</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Uses statistical and machine learning algorithms to predict future trends. Useful for strategic planning such as inventory management and market analysis.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 5 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={dataengineericon} alt="datamanage Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Data Engineering</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We streamline the preparation of raw data into clean, structured, and analysis ready information through cleansing, transformation, and merging. 
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
      <img src={gmbbusiness1} alt="Connect" className="w-full h-full rounded-lg" />
      <img src={gmbbusiness2} alt="Tablet AR" className="md:w-110 md:h-110 rounded-lg" />
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