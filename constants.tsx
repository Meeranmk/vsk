
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
    imageUrl: '/demolition-service.png'
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
    imageUrl: '/shed-work.png'
  }
];

export const PRODUCT_CATEGORIES = [
  'Metal Sheets',
  'Cement Sheets',
  'MS Pipes',
  'MS Square Tubes',
  'GP Pipes',
  'Polycarbonate Sheets',
  'Puff Sheets',
  'UPVC Roofing Sheets',
  'UPVC Gutters',
  'Metal Angles',
  'PA Channels',
  'Steel Racks',
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
    id: '3b',
    name: 'MS Square Tubes',
    category: 'MS Square Tubes',
    description: 'High-strength Mild Steel square hollow sections for fabrication, frames, and structural supports.',
    specs: ['Shape: Square Box', 'Sizes: 19mm to 100mm', 'Thickness: 1.2mm - 4mm'],
    imageUrl: '/ms-square-tubes.png',
    availabilityDate: 'In Stock',
    isNew: true
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
    id: '8',
    name: 'PUF Insulated Sheets',
    category: 'Puff Sheets',
    description: 'High-efficiency Polyurethane Foam (PUF) sandwich sheets for superior thermal insulation in industrial roofing and cold storage.',
    specs: ['Insulation: High Density PUF', 'Thickness: 50mm - 100mm', 'Heat Resistance: Excellent'],
    imageUrl: '/puff-sheets.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '9',
    name: 'UPVC Roofing Sheets',
    category: 'UPVC Roofing Sheets',
    description: 'Multi-layer UPVC roofing sheets that offer excellent heat insulation, soundproofing, and chemical resistance.',
    specs: ['Material: UPVC', 'Layers: 3-Layer Tech', 'Colors: White/Blue/Terracotta'],
    imageUrl: '/upvc-roofing.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '10',
    name: 'UPVC Rainwater Gutters',
    category: 'UPVC Gutters',
    description: 'Durable and leak-proof UPVC rainwater gutter systems with easy installation fittings for efficient roof drainage.',
    specs: ['Shape: Half-Round/Square', 'Fittings: Complete Kit', 'Warranty: 10 Years'],
    imageUrl: '/upvc-gutter.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '11',
    name: 'MS Metal Angles (L-Angle)',
    category: 'Metal Angles',
    description: 'Hot-rolled Mild Steel L-shaped angles for structural framing, brackets, and general fabrication.',
    specs: ['Sizes: 25x25mm to 100x100mm', 'Thickness: 3mm - 10mm', 'Grade: IS 2062'],
    imageUrl: '/metal-angles.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '12',
    name: 'PA Channels (C-Purlins)',
    category: 'PA Channels',
    description: 'Structural steel C-channels/purlins (PA Channels) for industrial shed supports and heavy-duty frameworks.',
    specs: ['Profile: C-Section', 'Size: 75x40mm to 200x75mm', 'Finish: Primer Coated'],
    imageUrl: '/steel-channels.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '13',
    name: 'Steel Racks',
    category: 'Steel Racks',
    description: 'Heavy-duty slotted angle steel racks for warehouse storage, industrial shelving, and retail display.',
    specs: ['Type: Slotted Angle', 'Load: 100kg-500kg/shelf', 'Finish: Powder Coated Grey'],
    imageUrl: '/steel-racks.png',
    availabilityDate: 'In Stock',
    isNew: true
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
