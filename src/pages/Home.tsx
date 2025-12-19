import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Phone, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const Home = () => {
  const location = useLocation();
  const state = location.state as { scrollTo?: string };
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  React.useEffect(() => {
    if (state?.scrollTo) {
      const element = document.getElementById(state.scrollTo);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
      // Clear the state to prevent scrolling on subsequent renders
      window.history.replaceState({}, document.title);
    }
  }, [state?.scrollTo]);

  // Services data
  const services = [
    {
      title: "Home Organization",
      subtitle: "Space Optimization",
      description: "No matter the space, our personalized plans are designed to meet your specific organizational needs. We tackle every area of your home with tailored solutions that create harmony and functionality.",
      items: [
        'General Home Decluttering',
        'Closet Organization',
        'Kitchen and Pantry Organization',
        'Garage and Storage Solutions',
        'Office Organization',
        'Efficient Space Layouts & Innovative Storage Ideas'
      ],
      color: "bg-brand-blue",
      image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Add-On Services",
      subtitle: "Enhanced Experience",
      description: "Take your organizational experience to the next level with our thoughtful add-ons. These extra services ensure every detail of your project is perfectly handled, making the process seamless and stress-free.",
      items: [
        'Personal Shopping: Let us find the perfect organizational tools and containers for your space.',
        'Moving Assistance: From packing and unpacking to coordinating your move and organizing your new space, we have got you covered.',
        'Junk Removal and Donation Drop Off: Say goodbye to clutter with our eco-friendly disposal services.'
      ],
      color: "bg-brand-green",
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Subscription Services",
      subtitle: "Ongoing Maintenance",
      description: "For spaces that see heavy use, our subscription plans ensure consistent care and upkeep, so your home stays effortlessly organized year-round.",
      items: [
        'Clutter Clearance',
        'Regular Maintenance Plans',
        'Seasonal Organization Refreshes',
        'Regular Check-Ins and Updates'
      ],
      color: "bg-brand-beige",
      image: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="min-h-[80vh] sm:min-h-[65vh] bg-cover bg-center relative flex flex-col"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1484329081568-bed9ba42a874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/90 to-brand-green/80" />
        <div className="flex-1 flex items-center justify-center relative z-10 pt-[calc(48px+theme(spacing.32))] sm:pt-[calc(48px+theme(spacing.40))] md:pt-[calc(48px+theme(spacing.48))] pb-16">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg transition-all duration-500 animate-fadeIn">
              Nashville Home Organization
            </h2>
            <p className="text-lg md:text-2xl mb-10 font-light max-w-3xl mx-auto">
              Transform your space into an organized, functional sanctuary
            </p>
            <a
              href="https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="font-bold">Schedule a Consultation</span> <ArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-verylightgray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Our Services</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-12 rounded-full"></div>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At Jane's Tidy Team, we specialize in creating peaceful, functional, and optimized spaces tailored to your unique needs.
              </p>
            </div>

            {/* Services Carousel */}
            <div className="relative">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                initialSlide={0}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Navigation]}
                onSlideChange={(swiper) => {
                  setActiveServiceIndex(swiper.activeIndex);
                }}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                }}
                onInit={(swiper) => {
                  setSwiperInstance(swiper);
                }}
                className="swiper-container py-6 sm:py-8 relative"
              >
                {services.map((service, index) => (
                  <SwiperSlide key={index} className="w-full sm:w-[80%] md:w-[70%]">
                    <div 
                      className="service-card group h-full bg-white rounded-2xl shadow-card overflow-hidden transition-all duration-500 hover:shadow-xl cursor-pointer relative"
                      onClick={() => {
                        const swiper = document.querySelector('.swiper-container')?.swiper;
                        if (swiper) swiper.slideTo(index);
                      }}
                    >
                      <div className="h-48 relative overflow-hidden">
                        {activeServiceIndex > 0 && (
                          <div className="absolute top-4 left-0 z-30">
                          <button
                            className="w-8 h-12 sm:w-16 sm:h-24 bg-white/30 hover:bg-white/50 flex items-center justify-center rounded-r-lg shadow-md backdrop-blur-sm"
                            aria-label="Previous slide"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (swiperInstance) swiperInstance.slidePrev();
                            }}
                          >
                            <ChevronLeft className="w-5 h-5 sm:w-10 sm:h-10 text-brand-blue" />
                          </button>
                          </div>
                        )}
                        {activeServiceIndex < services.length - 1 && (
                          <div className="absolute top-4 right-0 z-30">
                          <button
                            className="w-8 h-12 sm:w-16 sm:h-24 bg-white/30 hover:bg-white/50 flex items-center justify-center rounded-l-lg shadow-md backdrop-blur-sm"
                            aria-label="Next slide"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (swiperInstance) swiperInstance.slideNext();
                            }}
                          >
                            <ChevronRight className="w-5 h-5 sm:w-10 sm:h-10 text-brand-blue" />
                          </button>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                        <img 
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                          <p className="text-white/80 text-lg">{service.subtitle}</p>
                        </div>
                      </div>
                      <div className="p-6 md:p-8">
                        <p className="mb-6 text-gray-700">{service.description}</p>
                        <h4 className="font-semibold text-lg mb-4 text-brand-blue">What's Included:</h4>
                        <ul className="space-y-3">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <Check className="h-5 w-5 text-brand-green flex-shrink-0 mr-2 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Service Indicators */}
              <div className="flex justify-center mt-2 sm:mt-4 space-x-3">
                {services.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`h-4 rounded-full transition-all duration-300 ${
                      idx === activeServiceIndex ? 'w-10 bg-brand-green' : 'w-4 bg-brand-green/30'
                    }`}
                    onClick={() => {
                      if (swiperInstance) swiperInstance.slideTo(idx);
                    }}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <a
                href="https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-opacity-90 inline-flex items-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="font-bold">Schedule a Consultation</span> <ArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Our Process</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-16 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              {
                step: 1,
                title: 'Schedule a Consultation',
                description: 'If you have a project in mind, book a free 30-minute in-person consultation. We will assess the spaces you want organized and understand your specific needs and preferences.'
              },
              {
                step: 2,
                title: 'Customized Plan',
                description: 'After your consultation, we will create a personalized organization plan tailored to your space and preferences. We will send you a clear quote for each space, outlining the plan and cost for each space.'
              },
              {
                step: 3,
                title: 'Schedule Your Organization',
                description: 'Once you approve the quote, we will book your home visits at a time that works best for you. On your session day(s), our team will arrive ready to declutter, organize, and optimize your space, creating a calm and functional haven you will love.'
              },
              {
                step: 4,
                title: 'Review and Enjoy',
                description: 'After we are done organizing your space, we will review the results with you to ensure you are happy with the transformation. We will also provide tips and strategies to help you maintain your newly organized space.'
              }
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-soft p-6 md:p-8 transition-all duration-300 transform hover:shadow-card hover:-translate-y-1">
                <div className="w-14 h-14 bg-brand-blue rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-brand-blue">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-brand-verylightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">About Us</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-16 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-card p-8 md:p-10">
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Jane's Tidy Team, we're passionate about transforming homes into organized, functional spaces that bring peace and ease to your daily life. Our mission is simple: to take the stress out of organizing and create environments where you can truly feel at home. Whether you need a quick refresh or a complete overhaul, we provide professional, compassionate support tailored to your unique needs.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The inspiration for Jane's Tidy Team came from my personal journey growing up in a bustling Nashville household with seven siblings. Managing chaos became a way of life, but it wasn't until I helped my parents declutter and organize their home that I truly understood the power of a functional space. That moment of relief and joy sparked my dedication to helping others achieve the same peace of mind.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Combining years of experience managing shared spaces at Vanderbilt University with my passion for organization, Jane's Tidy Team was born. We specialize in creating personalized solutions that fit your lifestyle while optimizing your space efficiently and effectively. With a focus on kindness, community, and thoughtful service, we're here to do the heavy lifting so you can focus on what matters most. Let us help you create the home you've always envisioned for you and your family in Nashville!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Contact Us</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-16 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card p-8 md:p-10">
              <p className="text-center text-gray-700 mb-8 text-lg">
                If you have questions about your project, please call or email us anytime!
              </p>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-brand-verylightgray rounded-lg transition-all duration-300 hover:bg-brand-lightgray">
                    <Mail className="w-6 h-6 text-brand-blue mr-3" />
                    <a href="mailto:info@janestidyteam.com" className="text-gray-700 hover:text-brand-blue transition-colors duration-300">info@janestidyteam.com</a>
                  </div>
                  <div className="flex items-center p-4 bg-brand-verylightgray rounded-lg transition-all duration-300 hover:bg-brand-lightgray">
                    <Phone className="w-6 h-6 text-brand-blue mr-3" />
                    <span className="text-gray-700">(615) 466-7212</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="https://clienthub.getjobber.com/booking/cfb8885f-4a68-4736-a19e-f391989be14a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-blue text-white px-6 py-4 rounded-lg text-lg font-medium hover:bg-opacity-90 inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="font-bold">Schedule a Consultation</span> <ArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;