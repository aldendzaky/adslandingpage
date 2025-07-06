import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import datamanageicon from "../assets/icon/detailservice_ml/datamanage_icon.png";
import datascienceicon from "../assets/icon/detailservice_ml/data science_icon.png";
import aigenerateicon from "../assets/icon/detailservice_ml/aigenerate_icon.png";
import codingicon from "../assets/icon/detailservice_ml/coding_icon.png";
import piplineicon from "../assets/icon/detailservice_ml/pipline_icon.png";
import mlopsicon from "../assets/icon/detailservice_ml/mlops_icon.png";
import visualitationicon from "../assets/icon/detailservice_ml/visualization_icon.png";
import serviceicon from "../assets/icon/detailservice_ml/services_icon.png";
import gmbai1 from "../assets/gambar/detailservice_ml/Detail/ai_detailimg1.png";
import gmbai2 from "../assets/gambar/detailservice_ml/Detail/ai_detailimg2.png";
import gmbaioffer from "../assets/gambar/detailservice_ml/other offer/ai_other offer.png";
import gmbblockchainoffer from "../assets/gambar/detailservice_ml/other offer/blockchain_otheroffer.png";
import gmbbusinessoffer from "../assets/gambar/detailservice_ml/other offer/business_otheroffer.png";


export default function DetailServiceAi() {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <main className="main mt-30 mr-10 ml-10">
      
    <div className='md:mb-30 mb-30'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>
              Artificial Intelligence & Machine Learning Services
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-15 md:mr-15'>
              Provides comprehensive AI & Machine Learning services, from data preparation and model development (AutoML, NLP, CV, deep learning) to pipeline automation and MLOps. The platform also supports generative AI, data visualization, and interactive application development, and has been applied in real world projects such as chatbots, OCR, and commodity analysis.
              </p>
          </div>

          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2 md:mb-20'>Explore Our AI & ML Solutions</h1>
            </div>

          <div className="w-full mb-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={datamanageicon} alt="datamanage Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Data Management & Preparation</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Empower teams with intuitive tools to access, analyze, and transform data through visual or code based interfaces. Our built-in Exploratory Data Analysis (EDA) helps uncover data characteristics with ease.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={datascienceicon} alt="Software Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Data Science & Visual Machine Learning</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Simplify model building with AutoML, supporting both supervised and unsupervised learning. Unlock advanced capabilities like time series forecasting, NLP, computer vision, and low-code deep learning.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={aigenerateicon} alt="datamanage Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Generative AI</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Seamlessly integrate Large Language Models (LLM) via LLM Mesh for building scalable enterprise generative AI applications.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={codingicon} alt="Software Icon" className="w-[130px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Coding & Extensibility</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Enable deeper exploration and transformation of data through custom coding. Integrate with Snowflake using Snowpark Python and Snowpark ML for enhanced data processing.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 5 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={piplineicon} alt="datamanage Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Pipeline & Production Automation (DataOps)</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Automate end to end data workflows using context-aware pipelines, quality rules, and retraining scenarios for continuously improving models.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={mlopsicon} alt="Software Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">MLOps</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Cover the full ML lifecycle from data collection and preprocessing, to model training, deployment (CI/CD), and monitoring (alerts, retraining).
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 7 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={visualitationicon} alt="datamanage Icon" className="w-[100px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Visualization & Applications</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Deliver insights through dynamic visualizations, interactive dashboards, and tailored web applications for end users.
            </p>
          </div>
        </div>

        {/* Card 8 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={serviceicon} alt="Software Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Already-Built Services</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Accelerate deployment with pre-built solutions including Chatbot JDIH KKP (Scraping, Metadata, Embedding, RAG), Text Similarity Analysis, OCR for KTP, Food Commodity Analysis for DKI Jakarta
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
      <img src={gmbai1} alt="Connect" className="w-full h-full rounded-lg" />
      <img src={gmbai2} alt="Tablet AR" className="md:w-110 md:h-110 rounded-lg" />
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