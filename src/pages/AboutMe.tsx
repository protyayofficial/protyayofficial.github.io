import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const AboutMe: React.FC = () => {
  const navigate = useNavigate();

  const researchInterests = [
    { title: 'Computer Vision' },
    { title: 'Deep Learning' },
    { title: 'Federated Learning' },
    { title: 'Generative AI' },
    { title: 'Few-Shot Learning' },
    { title: 'Vision Transformers' },
  ];

  const hobbies = [
    { title: 'Singing' },
    { title: 'Cooking'},
    { title: 'Gaming'},
    { title: 'Soccer'},
    { title: 'Table Tennis'},
    { title: 'Photography'},
  ];

  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section remains the same */}
      <section className="relative-1/2 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient-x"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-blue-500 shadow-lg mb-4">
            <img 
              src="/profilepic.jpg"
              alt="Protyay Dey"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6 animate-fade-in">
            Protyay sends you regards!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            I am Computer Vision and AI enthusiast. 
          </p>
          <p className="text-lg md:text-m text-gray-300 max-w-3m mx-auto leading-relaxed animate-fade-in-delayed">
            Unveiling the world one research paper at a time. 
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-delayed">
            <button 
              onClick={() => navigate('/connect')} 
              className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all transform hover:-translate-y-1">
              Get in Touch
            </button>
            <button 
              onClick={() => navigate('/projects')} 
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400/10 transition-all transform hover:-translate-y-1">
              View My Work
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-32">
        {/* Educational Background - Left aligned */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">Educational Background</h2>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I recently graduated from Indian Institute of Technology Ropar with a masters degree in Artificial Intelligence. Prior to joining IIT, I completed my undergraduate studies from University of Engineering & Management, Jaipur.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/graduation.png"
              alt="Graduation Ceremony at IIT Ropar"
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform transition duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </section>

        {/* Research Interests - Right aligned */}
        <section className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative group order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {researchInterests.map((interest) => (
                <div 
                  key={interest.title}
                  className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-400/50"
                >
                  <h3 className="text-blue-400 font-semibold text-xl text-center">{interest.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6 order-1 lg:order-2">
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 text-right">Research Interests</h2>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I'm always exploring innovative ideas to solve problems. I completed my master's thesis in Digital Image Forensics and I explored Source Camera Model Identification and social media shared DeepFake Image detection. Recently, I started delving in Federated Learning and Few-shot Learning in the Source Camera Identification domain.
              </p>
            </div>
          </div>
        </section>

        {/* Beyond Research Section */}
        <section className="space-y-8">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">Beyond Research</h2>
            
            {/* Reduced spacing in Hobbies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {hobbies.map(({ title }) => (
                <div 
                  key={title}
                  className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-400/50 flex flex-col items-center text-center"
                >
                  <h3 className="text-blue-400 font-semibold text-base mb-1">{title}</h3>
                </div>
              ))}
            </div>

            {/* Reduced spacing for Gallery Title */}
            <div className="text-center mb-4">
              <p className="text-gray-300 text-base max-w-2xl mx-auto">
                Here are some glimpses into my life outside of work.
              </p>
            </div>

            {/* Smaller Image Gallery */}
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  effect="fade"
                  autoplay={{ delay: 3000 }}
                  modules={[Navigation, Pagination, EffectFade, Autoplay]}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  {['/dashami.jpg', '/jaipur1.jpg', 'jaipur2.jpg', '/ropar1.jpg', '/ropar2.jpg', '/ropar3.jpg', '/ropar4.jpg'].map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative">
                        <img
                          src={src}
                          alt={`Life Beyond Research ${index + 1}`}
                          className="w-full h-auto max-h-[500px] object-contain bg-gray-900"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutMe;