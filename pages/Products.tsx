
import React, { useState } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES, COMPANY_DETAILS } from '../constants';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Product Catalog</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            High-quality roofing materials and architectural salvage. We ensure every product meets ISI standards or has been safely recovered.
          </p>
        </header>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${selectedCategory === 'All'
              ? 'bg-blue-900 text-white shadow-lg'
              : 'bg-white text-slate-600 hover:bg-gray-100'
              }`}
          >
            All Products
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${selectedCategory === cat
                ? 'bg-blue-900 text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col group">
              <div className="h-72 relative overflow-hidden">
                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {p.availabilityDate && (
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-blue-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
                    Avail: {p.availabilityDate}
                  </div>
                )}
              </div>
              <div className="p-8 flex-grow">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2 block">{p.category}</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.name}</h3>
                <p className="text-slate-500 mb-8 line-clamp-3 text-sm leading-relaxed">{p.description}</p>

                <div className="space-y-3 mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Specifications</h4>
                  {p.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 shrink-0"></span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsapp.replace('+', '')}?text=Hello VSK Traders, I am interested in the ${p.name} from your catalog.`}
                  className="block w-full text-center bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-md hover:shadow-xl active:scale-95"
                >
                  Request Price & Specs
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-slate-300 text-6xl mb-4">Empty</div>
            <p className="text-slate-500 text-xl font-medium">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
