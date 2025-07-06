import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blockchainicon from "../assets/icon/detailservice_blockchain/blockchain_icon.png";
import hardhat from "../assets/icon/detailservice_blockchain/hardhat_icon.png";
import blockchainexplor from "../assets/icon/detailservice_blockchain/blockchainexplore_icon.png";
import fullstackicon from "../assets/icon/detailservice_blockchain/fullstack_icon.png";
import gmbblockchain1 from "../assets/gambar/detailservice_blockchain/blockchain_detail.png";
import gmbblockchain2 from "../assets/gambar/detailservice_blockchain/blockchain_detail2.png";
import gmbaioffer from "../assets/gambar/detailservice_ml/other offer/ai_other offer.png";
import gmbblockchainoffer from "../assets/gambar/detailservice_ml/other offer/blockchain_otheroffer.png";
import gmbbusinessoffer from "../assets/gambar/detailservice_ml/other offer/business_otheroffer.png";

export default function DetailServiceBlockchain() {
  const { id } = useParams();

  return (
    <>
    <Navbar />
    <main className="main mt-30 mr-10 ml-10">
      
    <div className='md:mb-30 mb-30'>
              <h1 className='md:text-5xl text-3xl text-center font-bold'>
              Blockchain Development Services
              </h1>
              <p className='text-base/loose opacity-50 text-center md:pt-8 pt-4 md:ml-15 md:mr-15'>
              Provides blockchain technology development services including network setup with Hyperledger Besu for enterprise needs, smart contract development using the JavaScript based Hardhat framework, blockchain explorer integration for transparent transaction tracking, and fullstack Web3 development covering frontend, backend, and smart contracts to build secure and decentralized applications.
              </p>
          </div>

          <div className='items-center justify-center mb-6'>
            <h1 className='md:text-4xl text-3xl md:text-left text-center font-bold md:pt-6 pt-2 md:mb-20'>Explore Our Blockchain Solutions</h1>
            </div>

          <div className="w-full mb-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={blockchainicon} alt="datamanage Icon" className="w-[220px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Blockchain Network Setup</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We provide blockchain network setup using Hyperledger Besu, an Ethereum compatible client. Suitable for both public and permissioned networks, it supports consensus mechanisms like PoA and IBFT 2.0 ideal for enterprise applications requiring security, transparency, and flexibility.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={hardhat} alt="Software Icon" className="w-[150px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Hardhat Development Framework</h3>
            <p className="text-gray-500 mt-2 text-sm">
            Our services include development using Hardhat, a JavaScript-based framework tailored for Ethereum. It offers flexibility and comprehensive features to meet the diverse needs of Ethereum developers.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-20 mt-10">
        {/* Card 3 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
            <img src={blockchainexplor} alt="datamanage Icon" className="w-[220px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Blockchain Explorer</h3>
            <p className="text-gray-500 mt-2 text-sm">
            We offer blockchain explorer services that enable users to transparently track transactions on the blockchain functioning like a search engine for blockchain data. It is useful for verifying and viewing detailed information about transactions, blocks, and wallet addresses.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex items-start gap-10">
          <div className=" bg-blue-500 shadow-md rounded-lg">
          <img src={fullstackicon} alt="Software Icon" className="w-[220px]" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-black">Fullstack Web3 Development</h3>
            <p className="text-gray-500 mt-2 text-sm">
            End to end Web3 application development from frontend and backend to smart contracts. Our solutions focus on direct blockchain interaction, providing greater decentralization, security, and transparency than traditional Web2 applications.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
      <img src={gmbblockchain1} alt="Connect" className="w-full h-full rounded-lg" />
      <img src={gmbblockchain2} alt="Tablet AR" className="md:w-110 md:h-110 rounded-lg" />
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