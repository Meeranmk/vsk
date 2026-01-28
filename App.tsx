
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PROJECTS } from './constants';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

// Simple loading fallback
const Loader = () => (
  <div className="h-screen w-full flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-900"></div>
  </div>
);

// Fallback pages
const About = () => (
  <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
    <h1 className="text-5xl font-extrabold mb-8">About VSK Traders</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
        <p>Founded on the principles of trust and safety, VSK Traders has grown from a local supplier to one of Chennai's premier names in demolition and construction materials.</p>
        <p>We believe that every structure has a story, and every new build deserves the best foundation. Our team of experts brings decades of combined experience to every demolition site, ensuring that projects are completed on time, within budget, and with zero accidents.</p>
        <p>Our material supply division ensures that contractors across Tamil Nadu have access to ISI-certified metal sheets, cement sheets, and high-strength pipes at wholesale prices.</p>
      </div>
      <div className="rounded-[3rem] overflow-hidden shadow-2xl h-96">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" alt="Team Work" className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
    <h1 className="text-5xl font-extrabold mb-12 text-center">Our Specialized Services</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div id="demolition" className="space-y-6">
        <img src="/demolition-service.png" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="Demolition" />
        <h2 className="text-3xl font-bold text-blue-900">Building Demolition</h2>
        <p className="text-slate-600 leading-relaxed text-lg">We provide end-to-end demolition solutions. From securing government permissions to safe execution and debris recycling, we handle it all.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Structural Demolition', 'Internal Strip-outs', 'Site Clearing', 'Salvage Recovery'].map(item => (
            <li key={item} className="bg-blue-50 p-4 rounded-xl font-bold text-blue-900 flex items-center">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div id="roofing" className="space-y-6">
        <img src="https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-80 w-full object-cover shadow-lg" alt="Roofing" />
        <h2 className="text-3xl font-bold text-orange-600">Roofing Services</h2>
        <p className="text-slate-600 leading-relaxed text-lg">Protection starts from the top. We specialize in industrial roofing, warehouse sheds, and domestic roofing repairs using premium materials.</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {['Sheet Installation', 'Leak Detection', 'Structure Maintenance', 'New Shed Construction'].map(item => (
            <li key={item} className="bg-orange-50 p-4 rounded-xl font-bold text-orange-700 flex items-center">
              <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Gallery = () => (
  <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h1 className="text-5xl font-extrabold mb-4">Building Demolition Projects</h1>
      <p className="text-slate-500 text-lg">Real-world snapshots of our site operations and structural clearing across Chennai.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROJECTS.map(project => (
        <div key={project.id} className="group relative rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-white">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{project.type}</span>
              <span className="text-xs text-slate-400 font-medium">{project.location}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{project.description}</p>
          </div>
          <div className="absolute top-4 right-4 bg-blue-900/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Completed Site
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
