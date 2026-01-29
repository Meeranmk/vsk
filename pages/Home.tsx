
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';
import { SERVICES, PRODUCTS, TESTIMONIALS } from '../constants';

const Hero = () => (
  <section className="relative h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <video
        src="/buildingdemo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/60"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-left">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Precision <span className="text-orange-500">Demolition</span>. <br />
          Quality <span className="text-blue-400">Materials</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light">
          Chennai's trusted partner for safe structural demolition and premium building supplies. We build trust by bringing structures down safely and supplying the best.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="/quote"
            className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all text-center shadow-xl hover:shadow-orange-900/40"
          >
            Get Free Quote
          </Link>
          <Link
            to="/products"
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    { icon: <WrenchScrewdriverIcon className="h-8 w-8" />, title: '30+ Years Experience', desc: 'Expertise in complex industrial and residential projects.' },
    { icon: <CheckBadgeIcon className="h-8 w-8" />, title: 'ISI Certified Materials', desc: 'We only supply materials that meet high-quality standards.' },
    { icon: <TruckIcon className="h-8 w-8" />, title: 'Fast Delivery', desc: 'Strategic logistics to ensure your site never stops working.' },
    { icon: <CurrencyDollarIcon className="h-8 w-8" />, title: 'Competitive Pricing', desc: 'Direct supply chain ensuring the best market rates.' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 group text-left">
              <div className="text-blue-900 mb-6 group-hover:scale-110 transition-transform origin-left inline-block">{f.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // Check if we are near the end
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-0">
      <Hero />

      {/* Statistics Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        {/* Animated background stars */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-pulse"></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[60%] left-[85%] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] right-[25%] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-1 h-1 bg-white rounded-full bottom-[30%] left-[40%] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Years of Experience */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group text-center">
              <div className="text-6xl md:text-7xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  30+
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Years of Experience</h3>
              <p className="text-sm text-orange-400 font-semibold">Since 1996</p>
            </div>

            {/* Projects Completed */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group text-center">
              <div className="text-6xl md:text-7xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  500+
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Projects Completed</h3>
              <p className="text-sm text-orange-400 font-semibold">Across Chennai</p>
            </div>

            {/* Quality Commitment */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 group text-center">
              <div className="text-6xl md:text-7xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  100%
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">Quality Commitment</h3>
              <p className="text-sm text-orange-400 font-semibold">Best in Class</p>
            </div>
          </div>
        </div>
      </section>

      <Features />

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Specialized Services</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <div key={service.id} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="h-80 overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-10">
                    {service.features.slice(0, 3).map((f, i) => (
                      <li key={i} className="flex items-center text-sm font-medium text-slate-500">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center font-bold text-blue-900 hover:text-orange-600 transition-colors group"
                  >
                    View Service Details
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Roofing Materials</h2>
              <p className="text-slate-500 text-lg">Top-grade industrial supplies for durable projects.</p>
            </div>
            <Link to="/products" className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all">
              View All Products
            </Link>
          </div>

          <div className="relative group">
            {/* Scroll Buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Carousel Container */}
            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {PRODUCTS.map((p) => (
                <div key={p.id} className="min-w-[300px] md:min-w-[400px] snap-center bg-gray-50 rounded-2xl p-4 group/card border border-transparent hover:border-blue-100 hover:bg-white transition-all shadow-sm hover:shadow-xl">
                  <div className="h-64 rounded-xl overflow-hidden mb-6 relative">
                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                      {p.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-500 mb-6 line-clamp-2">{p.description}</p>
                  <Link to="/products" className="block text-center border-2 border-slate-200 py-3 rounded-xl font-bold text-slate-700 hover:border-blue-900 hover:text-blue-900 transition-all">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="w-16 h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Client Success Stories</h2>
            <p className="text-slate-500">Trusted by top developers and homeowners across Chennai.</p>
          </div>

          <div className="relative group">
            {/* Scroll Buttons */}
            <button
              onClick={() => {
                const container = document.getElementById('testimonials-scroll');
                if (container) {
                  container.scrollBy({ left: -400, behavior: 'smooth' });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={() => {
                const container = document.getElementById('testimonials-scroll');
                if (container) {
                  container.scrollBy({ left: 400, behavior: 'smooth' });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-white p-3 rounded-full shadow-lg text-blue-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Carousel Container */}
            <div
              id="testimonials-scroll"
              className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="min-w-[300px] md:min-w-[450px] snap-center bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex space-x-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl">★</span>
                      ))}
                    </div>
                    <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-md">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex justify-center mt-4 md:hidden">
              <div className="flex space-x-2">
                {TESTIMONIALS.slice(0, 5).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-slate-300 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8">Ready to start your project?</h2>
          <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto font-light">
            Whether it's a small home renovation or a large-scale industrial demolition, VSK Traders has the expertise and resources to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all shadow-2xl">
              Contact Team
            </Link>
            <Link to="/quote" className="bg-blue-900 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-blue-800 transition-all shadow-2xl">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
