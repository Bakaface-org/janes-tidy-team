const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="min-h-[80vh] sm:min-h-[65vh] bg-cover bg-center relative flex flex-col"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1484329081568-bed9ba42a874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
        }
        }
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex-1 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Professional Home Organization in Nashville
            </h1>
            <p className="text-xl sm:text-2xl text-white mb-8">
              Transform your space into an organized sanctuary with Jane's Tidy Team
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-blue text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-brand-darkblue transition-colors duration-300"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" aria-label="Our Services" className="py-24 bg-brand-verylightgray overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0">
                    <img 
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className={`${service.color} w-16 h-1 mb-4`}></div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-brand-blue mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" aria-label="Our Process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-blue flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" aria-label="About Us" className="py-24 bg-brand-verylightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Jane's Tidy Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Meet Jane</h3>
              <p className="text-gray-600 mb-4">
                With over a decade of experience in professional organization, Jane has helped hundreds of Nashville homes transform into organized, peaceful spaces. Her passion for organization and attention to detail ensures that every project is completed to the highest standards.
              </p>
              <p className="text-gray-600">
                Jane's Tidy Team consists of certified professional organizers who share her vision and commitment to excellence. Together, they bring order and harmony to homes across Nashville.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" aria-label="Contact Us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-brand-blue">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue"
                  />
                </div>
              </div>
              <div
  )
}