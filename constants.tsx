
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
    title: 'Building Demolition Services Chennai',
    description: 'Expert building demolition services in Chennai for residential, commercial, and industrial structures. VSK Traders provides safe, professional demolition services across Chennai and Tamil Nadu with a focus on safety, precision, and environmental compliance. Serving Perambur, Guindy, Ambattur, and all Chennai areas since 1996.',
    features: [
      'Residential & Commercial Building Demolition Chennai',
      'Industrial Complex Demolition & Dismantling',
      'High-Rise Building Demolition Services',
      'Site Clearing & Excavation Chennai',
      'Structural Salvaging & Material Recovery',
      'Safe Debris Management & Disposal',
      'Warehouse & Factory Demolition',
      'Concrete Breaking & Foundation Removal'
    ],
    imageUrl: '/demolition-service.png'
  },
  {
    id: 'roofing',
    title: 'Roofing Services & Shed Construction Chennai',
    description: 'Comprehensive roofing services in Chennai including installation, repair, and maintenance using premium roofing materials. VSK Traders specializes in industrial shed construction, warehouse roofing, metal roofing installation, and commercial roofing solutions across Chennai and Tamil Nadu.',
    features: [
      'Industrial Shed Construction Chennai',
      'Metal Roofing Sheet Installation',
      'UPVC & PUF Roofing Solutions',
      'Warehouse & Factory Roofing',
      'Leak Repairs & Waterproofing Services',
      'Commercial Shed Fabrication & Erection',
      'Pre-Engineered Building (PEB) Structures',
      'Roofing Maintenance & Repair Chennai'
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
    name: 'Industrial Metal Roofing Sheets Chennai (Blue)',
    category: 'Metal Sheets',
    description: 'Premium profiled blue metal roofing sheets for industrial sheds, warehouses, and modern roofing applications in Chennai. Durable, weather-resistant metal sheets suitable for Chennai climate.',
    specs: ['Color: Royal Blue', 'Profile: Trapezoidal', 'Durability: 20+ years', 'Chennai Weather Resistant'],
    imageUrl: '/metal-sh.jpg',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '1a',
    name: 'GC Sheets Chennai (Galvanized Corrugated)',
    category: 'Metal Sheets',
    description: 'Premium GC (Galvanized Corrugated) roofing sheets with superior corrosion resistance and durability. Ideal for industrial sheds, warehouses, and commercial roofing in Chennai. Zinc-coated for long-lasting protection against coastal climate.',
    specs: ['Material: Galvanized Steel', 'Profile: Corrugated', 'Thickness: 0.3mm - 0.8mm', 'Zinc Coating: 120-275 GSM'],
    imageUrl: '/alloy-sh.jpg',
    availabilityDate: 'In Stock',
    isNew: false
  },
  {
    id: '1b',
    name: 'Curved Corrugated Metal Roofing Sheets Chennai (Blue)',
    category: 'Metal Sheets',
    description: 'Custom curved corrugated blue metal roofing sheets for curved roof applications, arched structures, and architectural designs in Chennai. Pre-bent corrugated sheets for curved roofing, canopies, and decorative applications. Vibrant blue metallic finish with corrugated profile.',
    specs: ['Color: Royal Blue', 'Material: Galvanized Steel', 'Profile: Corrugated', 'Custom Curve Radius'],
    imageUrl: '/curved-corrugated-blue.png',
    availabilityDate: 'In Stock',
    isNew: true
  },
  {
    id: '2',
    name: 'Corrugated Cement Roofing Sheets Chennai',
    category: 'Cement Sheets',
    description: 'Heavy-duty grey corrugated asbestos-free cement roofing sheets for large-scale warehouses, industrial buildings, and factory roofing in Chennai. Weatherproof and durable.',
    specs: ['Texture: Corrugated', 'Weight: Standard Industrial', 'Weatherproof', 'Asbestos-Free'],
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
    name: 'UPVC Roofing Sheets Chennai',
    category: 'UPVC Roofing Sheets',
    description: 'Multi-layer UPVC roofing sheets Chennai that offer excellent heat insulation, soundproofing, and chemical resistance. Perfect for Chennai climate with superior UV protection and thermal insulation for industrial and residential roofing.',
    specs: ['Material: UPVC', 'Layers: 3-Layer Tech', 'Colors: White/Blue/Terracotta', 'Heat Insulation'],
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
