import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import gmbmlslider from '../assets/gambar/index/whatwedoslider/ML_img.png';
import gmbbusinessslider from '../assets/gambar/index/whatwedoslider/businness_img.png';
import gmbblockchainslider from '../assets/gambar/index/whatwedoslider/blockchain_img.png';

import 'swiper/css';
import 'swiper/css/autoplay';

const Indexslider = () => {
  return (
    <div className="w-full px-4 py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {/* Card 1 */}
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-md p-6 h-80">
            <img src={gmbmlslider} alt="AI" className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">AI & Machine Learning</h3>
            <p className="text-sm text-gray-500 mt-2">
              From AutoML, NLP, and computer vision to MLOps and generative AI—applied in real-world use cases like chatbots, OCR, and market analytics.
            </p>
          </div>
        </SwiperSlide>

        {/* Card 2 */}
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-md p-6 h-80">
            <img src={gmbbusinessslider} alt="Blockchain" className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Blockchain Development</h3>
            <p className="text-sm text-gray-500 mt-2">
              Enterprise-grade blockchain networks, smart contracts, and Web3 applications for secure and transparent digital ecosystems.
            </p>
          </div>
        </SwiperSlide>

        {/* Card 3 */}
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-md p-6 h-80">
            <img src={gmbblockchainslider} alt="BI" className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Business Intelligence</h3>
            <p className="text-sm text-gray-500 mt-2">
              IT consulting and digital product development to turn business ideas into impactful, user-focused software.
            </p>
          </div>
        </SwiperSlide>

         {/* Card 4 */}
         <SwiperSlide>
          <div className="bg-white rounded-xl shadow-md p-6 h-80">
            <img src={gmbblockchainslider} alt="BI" className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Citizen Relationship Management</h3>
            <p className="text-sm text-gray-500 mt-2">
            Platform offers an integrated digital communication solution to help governments and businesses connect with citizens.
            </p>
          </div>
        </SwiperSlide>

        {/* Card 5 */}
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-md p-6 h-80">
            <img src={gmbblockchainslider} alt="BI" className="w-full h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">Goverment Digital Platform</h3>
            <p className="text-sm text-gray-500 mt-2">
            The Government Digital Platform offers an integrated solution for managing human resources, finance, monitoring, legal documents, and citizen services.
            </p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Indexslider;