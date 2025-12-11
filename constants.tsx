import { Product, Service } from './types';
import { Shirt, Factory, Handshake, ShieldCheck, Truck, Droplets, Users, Globe, CheckCircle } from 'lucide-react';
import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Factory', path: '/factory' },
  { name: 'Design Lab', path: '/design-lab' },
  { name: 'Contact', path: '/contact' },
];

// --- BRANDING ---
export const COMPANY_LOGO = "https://github.com/mimrahmanmim1117-oss/logo/blob/main/ar_logo_download.png?raw=true";

// --- IMAGE COLLECTIONS ---

export const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1565538420870-da587c47f96a?q=80&w=2000&auto=format&fit=crop', // Hero - Denim Stack/Texture
  'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2003_21_03%20PM.png?raw=true', // Who We Are 1 - Corporate Meeting
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop', // Who We Are 2 - Factory Sewing
];

export const DENIM_COLLECTION: Product[] = [
  // Jackets (4)
  { 
    id: 'dj1', 
    name: 'Vintage Wash Trucker', 
    category: 'Denim Jacket', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/Showroom.png?raw=true',
    description: 'A timeless classic featuring a heavy stone wash for a vintage aesthetic. Reinforced stitching at stress points ensures durability.',
    fabric: '13.5oz Rigid Denim, 100% Cotton',
    features: ['Button-flap chest pockets', 'Adjustable waist tabs', 'Copper hardware'],
    moq: '200 pcs'
  },
  { 
    id: 'dj2', 
    name: 'Classic Blue Denim Jacket', 
    category: 'Denim Jacket', 
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=800&auto=format&fit=crop',
    description: 'The essential layer for any season. Features a clean mid-blue wash suitable for casual or semi-formal wear.',
    fabric: '12oz Denim, 98% Cotton 2% Elastane',
    features: ['Comfort stretch', 'Welt side pockets', 'Classic collar'],
    moq: '200 pcs'
  },
  { 
    id: 'dj3', 
    name: 'Black Denim Jacket', 
    category: 'Denim Jacket', 
    image: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=800&auto=format&fit=crop',
    description: 'Sleek black denim jacket with tonal stitching for a modern, monochromatic look.',
    fabric: '11oz Black Denim, 100% Cotton',
    features: ['Matte black buttons', 'Slim fit silhouette', 'Fade-resistant dye'],
    moq: '200 pcs'
  },
  { 
    id: 'dj4', 
    name: 'Oversized Denim Coat', 
    category: 'Denim Jacket', 
    image: 'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=800&auto=format&fit=crop',
    description: 'Trendy oversized fit inspired by streetwear fashion. Perfect for layering over hoodies.',
    fabric: '14oz Heavyweight Denim',
    features: ['Dropped shoulders', 'Extended length', 'Distressed hem details'],
    moq: '200 pcs'
  },
  
  // Jeans & Trousers (4)
  { 
    id: 'dp1', 
    name: 'Slim Fit Selvedge', 
    category: 'Denim Pants', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2003_45_02%20PM.png?raw=true',
    description: 'Premium selvedge denim tailored in a sharp slim fit. Designed for the denim enthusiast who appreciates quality.',
    fabric: '13oz Japanese Selvedge Denim',
    features: ['Red-line selvedge ID', 'Leather back patch', 'Chain stitched hem'],
    moq: '200 pcs'
  },
  { 
    id: 'dp2', 
    name: 'Distressed Wash Jeans', 
    category: 'Denim Pants', 
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop',
    description: 'Artfully distressed jeans with hand-sanded whiskers and rips. Each pair is uniquely finished.',
    fabric: '11.5oz Stretch Denim',
    features: ['Hand-distressed details', 'YKK Zipper fly', 'Skinny fit'],
    moq: '200 pcs'
  },
  { 
    id: 'dp3', 
    name: 'Classic Straight Cut', 
    category: 'Denim Pants', 
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop',
    description: 'Traditional straight leg cut that sits at the waist. Comfortable through the thigh and leg.',
    fabric: '12oz 100% Cotton Denim',
    features: ['5-pocket styling', 'Riveted front pockets', 'Relaxed fit'],
    moq: '200 pcs'
  },
  { 
    id: 'dp4', 
    name: 'Raw Denim Trousers', 
    category: 'Denim Pants', 
    image: 'https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=800&auto=format&fit=crop',
    description: 'Untreated raw denim that conforms to the wearer’s body over time, developing unique fade patterns.',
    fabric: '14.5oz Raw Indigo Denim',
    features: ['Button fly', 'Contrast stitching', 'Deep indigo color'],
    moq: '200 pcs'
  },

  // Shirts (4)
  { 
    id: 'ds1', 
    name: 'Western Denim Shirt', 
    category: 'Denim Shirt', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_02_30%20PM.png?raw=true',
    description: 'Iconic western styling with pointed yokes and snap buttons. A rugged staple for any wardrobe.',
    fabric: '6oz Lightweight Denim',
    features: ['Pearl snap buttons', 'Western yoke', 'Double chest pockets'],
    moq: '200 pcs'
  },
  { 
    id: 'ds2', 
    name: 'Chambray Button Down', 
    category: 'Denim Shirt', 
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop',
    description: 'A refined chambray shirt suitable for office or casual wear. Breathable and soft.',
    fabric: '4.5oz Cotton Chambray',
    features: ['Button-down collar', 'Single pocket', 'Curved hem'],
    moq: '200 pcs'
  },
  { 
    id: 'ds3', 
    name: 'Light Wash Shirt', 
    category: 'Denim Shirt', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_08_35%20PM.png?raw=true',
    description: 'Heavily bleached wash for a summer-ready look. Soft hand feel.',
    fabric: '5.5oz Slub Denim',
    features: ['Bleach wash finish', 'Soft hand-feel', 'Spread collar'],
    moq: '200 pcs'
  },
  { 
    id: 'ds4', 
    name: 'Casual Indigo Shirt', 
    category: 'Denim Shirt', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_02_48%20PM.png?raw=true',
    description: 'Deep indigo shirt with a clean finish. Versatile for layering or wearing solo.',
    fabric: '6oz Indigo Dyed Cotton',
    features: ['Contrast buttons', 'Barrel cuffs', 'Regular fit'],
    moq: '200 pcs'
  },
];

export const KNITWEAR_COLLECTION: Product[] = [
  // Lifestyle (6)
  { 
    id: 'k1', 
    name: 'Premium Cotton Tee', 
    category: 'Knitwear', 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    description: 'Essential crew neck t-shirt made from high-grade combed cotton. Bio-washed for extra softness.',
    fabric: '160 GSM, 100% Combed Cotton',
    features: ['Bio-wash finish', 'Ribbed neck', 'Double-needle hem'],
    moq: '500 pcs'
  },
  { 
    id: 'k2', 
    name: 'Urban Streetwear Hoodie', 
    category: 'Knitwear', 
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop',
    description: 'Heavyweight hoodie with a boxy fit, perfect for streetwear brands.',
    fabric: '350 GSM French Terry or Fleece',
    features: ['Kangaroo pocket', 'Adjustable drawstring hood', 'Ribbed cuffs'],
    moq: '300 pcs'
  },
  { 
    id: 'k3', 
    name: 'Classic Polo Shirt', 
    category: 'Knitwear', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_26_47%20PM.png?raw=true',
    description: 'Smart-casual polo with a structured collar and durable pique fabric.',
    fabric: '220 GSM Cotton Pique',
    features: ['2-button placket', 'Side vents', 'Flat knit collar'],
    moq: '300 pcs'
  },
  { 
    id: 'k4', 
    name: 'Long Sleeve Henley', 
    category: 'Knitwear', 
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
    description: 'Vintage-inspired henley with a buttoned placket. Great for layering.',
    fabric: '180 GSM Slub Jersey',
    features: ['3-button placket', 'Raglan sleeves', 'Raw edge details optional'],
    moq: '500 pcs'
  },
  { 
    id: 'k5', 
    name: 'Athletic Performance Top', 
    category: 'Knitwear', 
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
    description: 'Moisture-wicking activewear top designed for high performance.',
    fabric: '100% Polyester Mesh / Dry-Fit',
    features: ['Quick-dry technology', 'Breathable panels', 'Reflective logo print'],
    moq: '500 pcs'
  },
  { 
    id: 'k6', 
    name: 'Casual Knit Sweatshirt', 
    category: 'Knitwear', 
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=800&auto=format&fit=crop',
    description: 'Cozy crewneck sweatshirt for everyday comfort.',
    fabric: '280 GSM Cotton/Poly Fleece',
    features: ['Soft brushed interior', 'Elasticated cuffs', 'Relaxed fit'],
    moq: '300 pcs'
  },

  // Fabric Details (2)
  { 
    id: 'k7', 
    name: 'Fabric Texture Detail', 
    category: 'Fabric', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_27_48%20PM.png?raw=true',
    description: 'Close-up of our premium knit textures, showing the quality and density of the weave.',
    fabric: 'Various Textures',
    features: ['High color retention', 'Low shrinkage', 'Soft touch'],
    moq: 'N/A'
  },
  { 
    id: 'k8', 
    name: 'Stitching Quality Zoom', 
    category: 'Fabric', 
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    description: 'Demonstrating our precision stitching standards (SPI) used across all garments.',
    fabric: 'N/A',
    features: ['High SPI (Stitch Per Inch)', 'Reinforced seams', 'Quality thread'],
    moq: 'N/A'
  },
];

export const WOMENS_KIDS_COLLECTION: Product[] = [
  { 
    id: 'wk1', 
    name: 'Kids Trendy Wear', 
    category: 'Kids', 
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800&auto=format&fit=crop',
    description: 'Fashion-forward outfits for children, combining style with durability.',
    fabric: 'Organic Cotton / Blends',
    features: ['Child-safe accessories', 'Bright reactive dyes', 'Comfort fit'],
    moq: '300 pcs'
  },
  { 
    id: 'wk2', 
    name: 'Kids Casual Set', 
    category: 'Kids', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_37_37%20PM.png?raw=true',
    description: 'Coordinated matching sets for kids. Perfect for summer and playtime.',
    fabric: '100% Cotton Jersey',
    features: ['Elastic waistband', 'Screen print graphics', 'Breathable fabric'],
    moq: '300 pcs'
  },
  { 
    id: 'wk3', 
    name: 'Womens Fashion Denim', 
    category: 'Womens', 
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop',
    description: 'Chic women’s denim featuring modern cuts like mom jeans, flared, and wide-leg.',
    fabric: 'Stretch Denim',
    features: ['High-waisted', 'Sculpting fit', 'Fashion washes'],
    moq: '200 pcs'
  },
  { 
    id: 'wk4', 
    name: 'Womens High Fashion', 
    category: 'Womens', 
    image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ChatGPT%20Image%20Dec%2010,%202025,%2010_44_36%20PM.png?raw=true',
    description: 'Elegant high-fashion pieces tailored for the contemporary woman.',
    fabric: 'Premium Woven Fabric',
    features: ['Intricate detailing', 'Custom silhouette', 'Luxury finish'],
    moq: '200 pcs'
  },
];

export const FACTORY_IMAGES_SET = [
  { id: 'f1', title: 'Modern Machinery', image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/ITMACutSewFig6.jpg?raw=true' },
  { id: 'f2', title: 'Factory Floor', image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/A-unidirectional-layout-%E2%80%98A%E2%80%99.jpg?raw=true' },
  { id: 'f3', title: 'Quality Control', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop' },
  { id: 'f4', title: 'Fabric Warehouse', image: 'https://github.com/mimrahmanmim1114-boop/dbimage/blob/main/kumas-depo-raf-sistemleri.jpg?raw=true' },
];

// Main Products array for the featured section (mixed)
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Classic Denim Jacket',
    category: 'Woven',
    image: DENIM_COLLECTION[0].image,
    description: 'High-quality denim jacket with custom washes. In-house washing available.',
    fabric: '13.5oz Rigid Denim',
    features: ['Button-flap pockets', 'Classic fit'],
    moq: '200 pcs'
  },
  {
    id: '2',
    name: '5-Pocket Denim Jeans',
    category: 'Woven',
    image: DENIM_COLLECTION[4].image,
    description: 'Standard 5-pocket jeans, various fits (Slim, Straight, Skinny). Heavy to lightweight denim.',
    fabric: '12oz Denim',
    features: ['YKK Zip', 'Rivets'],
    moq: '200 pcs'
  },
  {
    id: '3',
    name: 'Ladies Denim Wear',
    category: 'Woven',
    image: WOMENS_KIDS_COLLECTION[3].image,
    description: 'Stylish ladies denim jackets, jeans, and skirts. Custom fit and washes available.',
    fabric: 'Stretch Denim',
    features: ['High fashion cuts', 'Soft handfeel'],
    moq: '200 pcs'
  },
  {
    id: '4',
    name: 'Cotton Crew Neck T-Shirt',
    category: 'Knitwear',
    image: KNITWEAR_COLLECTION[0].image,
    description: '100% Cotton or Cotton/Poly blend. Single jersey, various GSM options.',
    fabric: '160 GSM Single Jersey',
    features: ['Bio-polish', 'Neck rib'],
    moq: '200 pcs'
  },
  {
    id: '5',
    name: 'Kids Wear Collection',
    category: 'Kids',
    image: WOMENS_KIDS_COLLECTION[0].image,
    description: 'Comfortable and durable kids wear. Organic cotton options available.',
    fabric: 'Organic Cotton',
    features: ['Safety compliant', 'Soft seams'],
    moq: '200 pcs'
  },
  {
    id: '6',
    name: 'Woven Casual Trousers',
    category: 'Woven',
    image: DENIM_COLLECTION[7].image,
    description: 'Chinos and cargo pants. Twill, Poplin, or Canvas fabrics.',
    fabric: 'Cotton Twill',
    features: ['Cargo pockets', 'Durable stitch'],
    moq: '200 pcs'
  },
];

export const SERVICES = [
  {
    title: 'Custom Manufacturing',
    description: 'We manufacture as per your requirements. You select the fabric and design; we handle sampling to finishing.',
    icon: <Factory className="w-8 h-8 text-accent-500" />
  },
  {
    title: 'Buying House (Sourcing)',
    description: 'Full sourcing support: Supplier selection, Cost negotiation, and Production follow-up for large volume orders.',
    icon: <Handshake className="w-8 h-8 text-accent-500" />
  },
  {
    title: 'Quality Control (QC & QA)',
    description: 'Strict AQL 1.5/2.5 standards. Fabric inspection, inline checks, and final random inspection.',
    icon: <ShieldCheck className="w-8 h-8 text-accent-500" />
  },
  {
    title: 'Logistics & Shipping',
    description: 'FOB, CIF & EXW shipment handling. Worldwide courier sample delivery and export documentation.',
    icon: <Truck className="w-8 h-8 text-accent-500" />
  },
];

export const STRENGTHS = [
  { label: 'Own Manufacturing', sub: 'Direct Factory Control', icon: <Factory size={24} /> },
  { label: 'In-house Washing', sub: 'Denim Specialist', icon: <Droplets size={24} /> },
  { label: 'Low MOQ', sub: 'From 200 Pcs', icon: <CheckCircle size={24} /> },
  { label: 'High Capacity', sub: '150k Pcs/Month', icon: <Users size={24} /> },
  { label: 'Global Standard', sub: 'AQL 1.5 / 2.5', icon: <ShieldCheck size={24} /> },
  { label: 'Export Ready', sub: 'EU & USA Focus', icon: <Globe size={24} /> },
];

export const PRODUCTION_DATA = [
  { name: 'Denim & Woven', output: 100000 },
  { name: 'Knits', output: 50000 },
];
