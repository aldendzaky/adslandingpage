import React from "react";
import gmbitconsul from "../assets/gambar/index/weprovide/itconsul_img.png"
import gmbstartupincb from "../assets/gambar/index/weprovide/startup_img.png"
import gmbsaasproduct from "../assets/gambar/index/weprovide/saasproduct_img.png"
import gmbtraining from "../assets/gambar/index/weprovide/trainingcenter_img.png"

const services = [
  {
    title: "IT Consultant",
    description:
      "From AutoML, NLP, and computer vision to MLOps and generative AI—applied in real-world use cases like chatbots, OCR, and market analytics.",
    image: gmbitconsul,
  },
  {
    title: "Startup Incubator",
    description:
      "Enterprise-grade blockchain networks, smart contracts, and Web3 applications for secure and transparent digital ecosystems.",
    image: gmbstartupincb,
  },
  {
    title: "Saas Product",
    description:
      "IT consulting and digital product development to turn business ideas into impactful, user-focused software.",
    image: gmbsaasproduct,
  },
  {
    title: "Training Center",
    description:
      "Enterprise-grade blockchain networks, smart contracts, and Web3 applications for secure and transparent digital ecosystems.",
    image: gmbtraining,
  },
];

export default function Weprovidecard() {
  return (
    <div className="px-4 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-30 h-30 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
