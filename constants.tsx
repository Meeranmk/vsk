
import React from 'react';
import { Product, Service, Testimonial, Project } from './types';

export const COLORS = {
  primary: '#1E3A8A', // Industrial Blue
  secondary: '#EA580C', // Construction Orange
  neutral: '#475569', // Gray
};

export const SERVICES: Service[] = [
  {
    id: 'demolition',
    title: 'Building Demolition',
    description: 'Expert demolition services for residential, commercial, and industrial structures with a focus on safety and precision.',
    features: [
      'Residential & Commercial Demolition',
      'Site Clearing & Excavation',
      'Structural Salvaging',
      'Safe Debris Management',
      'High-Rise Demolition Experts'
    ],
    imageUrl: '/demolition-1.jpg'
  },
  {
    id: 'roofing',
    title: 'Roofing Services',
    description: 'Comprehensive roofing solutions including installation, repair, and maintenance using high-quality materials.',
    features: [
      'New Roof Installation',
      'Leak Repairs & Waterproofing',
      'Industrial Roofing Solutions',
      'Commercial Shed Construction',
      'Routine Maintenance Packages'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCT_CATEGORIES = [
  'Metal Sheets',
  'Cement Sheets',
  'MS Pipes',
  'GP Pipes',
  'Polycarbonate Sheets',
  'Iron Gates'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Industrial Metal Sheets (Blue)',
    category: 'Metal Sheets',
    description: 'Profiled blue metal sheets for industrial sheds and modern roofing applications.',
    specs: ['Color: Royal Blue', 'Profile: Trapezoidal', 'Durability: 20+ years'],
    imageUrl: '/metal-sh.jpg',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '1a',
    name: 'Alloy Metal Sheets',
    category: 'Metal Sheets',
    description: 'Premium alloy metal sheets with superior strength and corrosion resistance.',
    specs: ['Material: Aluminum Alloy', 'Finish: Polished', 'Thickness: 0.5mm - 3mm'],
    imageUrl: '/alloy-sh.jpg',
    availabilityDate: 'In Stock',
    isNew: false
  },
  {
    id: '2',
    name: 'Corrugated Cement Sheets',
    category: 'Cement Sheets',
    description: 'Heavy-duty grey corrugated asbestos-free cement sheets for large-scale warehouses.',
    specs: ['Texture: Corrugated', 'Weight: Standard Industrial', 'Weatherproof'],
    imageUrl: '/cement.png',
    availabilityDate: 'In Stock'
  },
  {
    id: '3',
    name: 'Industrial MS Pipes (Large)',
    category: 'MS Pipes',
    description: 'Heavy-gauge Mild Steel pipes for structural frameworks and heavy machinery supports.',
    specs: ['Finish: Black/Oiled', 'Diameter: 4" to 12"', 'Grade: ASTM Standard'],
    imageUrl: '/pipes.jpg',
    availabilityDate: 'In Stock'
  },
  {
    id: '4',
    name: 'Galvanized GP Pipes (Stack)',
    category: 'GP Pipes',
    description: 'High-quality galvanized pipes for rust-free construction and piping systems.',
    specs: ['Finish: Silver Galvanized', 'Corrosion Resistance: High', 'Multiple Sizes'],
    imageUrl: '/gp-pipes.jpg',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '5',
    name: 'Polycarbonate Clear Sheets',
    category: 'Polycarbonate Sheets',
    description: 'Lightweight, impact-resistant sheets for natural lighting solutions.',
    specs: ['UV Protected', 'Transparency: 85%+', 'Colors: Clear'],
    imageUrl: '/polycarbonate.png',
    availabilityDate: 'In Stock'
  },
  {
    id: '6',
    name: 'Ornate Iron Gates (Salvage)',
    category: 'Iron Gates',
    description: 'Beautifully crafted second-hand ornate iron gates. Perfect for heritage looks or high-security residential entry.',
    specs: ['Material: Cast Iron', 'Style: Ornate/Vintage', 'Condition: Refurbished available'],
    imageUrl: '/iron-gate-1.jpg',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '7',
    name: 'Designer Iron Gates (Premium)',
    category: 'Iron Gates',
    description: 'Premium designer iron gates with intricate patterns. Ideal for luxury homes and commercial properties.',
    specs: ['Material: Wrought Iron', 'Style: Contemporary/Designer', 'Finish: Powder Coated'],
    imageUrl: '/iron-gate-2.jpg',
    availabilityDate: 'In Stock',
    isNew: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Industrial Complex Demolition',
    location: 'Guindy, Chennai',
    description: 'Complete controlled demolition of a multi-storey industrial unit using heavy excavators and JCB breakers.',
    imageUrl: '/demolition-2.jpg',
    type: 'Demolition'
  },
  {
    id: 'p2',
    title: 'Warehouse Structural Clearance',
    location: 'Ambattur, Chennai',
    description: 'Safe removal of metal roofing and internal strip-out for a large logistics warehouse.',
    imageUrl: '/warehouse-clearance.png',
    type: 'Demolition'
  },
  {
    id: 'p3',
    title: 'Residential Site Prep',
    location: 'Perambur, Chennai',
    description: 'Clearing of old structural rubble and foundation prep for a new residential development.',
    imageUrl: '/demolition-1.jpg',
    type: 'Demolition'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Arun Kumar',
    role: 'Property Developer',
    content: 'VSK Traders handled the demolition of our old commercial building with extreme professionalism. Safety was their priority.',
    rating: 5
  },
  {
    id: 't2',
    name: 'Suresh',
    role: 'Homeowner',
    content: 'Excellent quality metal sheets for our new roof. The pricing was competitive and delivery was right on time.',
    rating: 5
  }
];

export const COMPANY_DETAILS = {
  name: 'VSK Traders',
  address: 'No: 28, Perambur High Road, Jamalia, Chennai',
  phone: '+91 73588 78713',
  email: 'info@vsktraders.com',
  hours: 'Mon - Sat: 9:00 AM - 8:00 PM',
  whatsapp: '+917358878713'
};
