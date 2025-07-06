
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gmbAi from "../assets/gambar/service/Ai_img.png"
import gmbblockchain from "../assets/gambar/service/blockchain_img.png"
import gmbbusiness from "../assets/gambar/service/business_img.png"
import gmbcrm from "../assets/gambar/service/crm_img.png"
import gmbgoverment from "../assets/gambar/service/goverment_img.png"

const services = [
  {
    id: "ai",
    title: "Artificial Intelligence & Machine Learning Services",
    desc:
      "Provides comprehensive AI & Machine Learning services, from data preparation and model development (AutoML, NLP, CV, deep learning) to pipeline automation and MLOps. The platform also supports generative AI, data visualization, and interactive application development, and has been applied in real-world projects such as chatbots, OCR, and commodity analysis.",
    img: gmbAi,
  },
  {
    id: "blockchain",
    title: "Blockchain",
    desc:
      "Provides blockchain technology development services including network setup with Hyperledger Besu for enterprise needs, smart contract development using the JavaScript-based Hardhat framework, blockchain explorer integration for transparent transaction tracking, and fullstack Web3 development covering frontend, backend, and smart contracts to build secure and decentralized applications.",
    img: gmbblockchain,
  },
  {
    id: "bi",
    title: "Business Intelligence",
    desc:
      "As IT consultants, our commitment is to assist you in taking the first steps toward transforming your business ideas into exceptional application products. With our profound knowledge of information technology, we will collaborate with you from idea conception to product development, to create software solutions that can fulfill your business objectives.",
    img: gmbbusiness,
  },
  {
    id: "crm",
    title: "Citizen Relationship Management",
    desc:
      "The Citizen Relationship Management (CRM) platform offers an integrated digital communication solution to help governments and businesses connect with citizens. Featuring AI chatbots, VoIP call centers, and omnichannel support via WhatsApp, Telegram, Facebook, and Instagram, it enables responsive, automated, and secure public engagement in one seamless system.",
    img: gmbcrm,
  },
  {
    id: "goverment",
    title: "Goverment Digital Platform",
    desc:
      "The Government Digital Platform offers an integrated solution for managing human resources, finance, monitoring, legal documents, and citizen services. Features include automated payroll, budget planning, performance tracking, document storage, and public complaint management, all within a secure, user-friendly portal designed to enhance efficiency, transparency, and public access.",
    img: gmbgoverment,
  },
];

export default function Service() {
  return (
    <>
    <Navbar />
    <div className="mt-20">
    <div className="px-4 py-12 max-w-6xl mx-auto mb-30">
      <h2 className="md:text-6xl text-2xl font-bold text-center mb-6">Service We Offer</h2>
      <p className="text-center text-gray-600 mx-auto md:mb-30 mb-20">
      We provide a wide range of digital solutions tailored to meet your business needs. From AI and blockchain development to business intelligence, CRM systems, and government digital platforms ,our services are designed to drive innovation, improve efficiency, and support digital transformation across various sectors.


      </p>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={service.img}
              alt={service.title}
              className=" md:w-70 md:h-70 rounded-lg"
            />
            <div className="">
              <h3 className="text-lg md:text-3xl font-semibold text-blue-600 mb-2">
                {service.title.split("  ")[0]}{' '}
                <span className="text-gray-800">
                  {service.title.replace(service.title.split("  ")[0], "")}
                </span>
              </h3>
              <p className="text-sm text-gray-700 mb-10">{service.desc}</p>
              <Link
                to={`/service/${service.id}`}
                className="inline-block text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
    </>
  );
}
