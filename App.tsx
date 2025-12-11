import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Instagram, Linkedin, MessageCircle, ChevronUp, CheckCircle, ArrowRight, Factory, Wand2, Download, Loader2 } from 'lucide-react';
import { NAV_LINKS, PRODUCTS, SERVICES, PRODUCTION_DATA, STRENGTHS, HERO_IMAGES, DENIM_COLLECTION, KNITWEAR_COLLECTION, FACTORY_IMAGES_SET, WOMENS_KIDS_COLLECTION, COMPANY_LOGO } from './constants';
import { generateAssistantResponse, generateDesignImage } from './services/geminiService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Product } from './types';

// --- Shared Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <img 
                src={COMPANY_LOGO} 
                alt="AP Tex BD Logo" 
                className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg shadow-sm" 
              />
              <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl md:text-2xl text-corporate-900 leading-none tracking-tight">AP TEX BD</span>
                  <span className="text-[10px] md:text-xs font-bold text-accent-600 tracking-widest uppercase">Manufacturer & Buying House</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 uppercase ${
                  location.pathname === link.path 
                    ? 'text-accent-600 border-b-2 border-accent-500 pb-1' 
                    : 'text-gray-600 hover:text-corporate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-corporate-900 text-white px-6 py-2.5 rounded-sm hover:bg-accent-500 hover:text-white transition-all shadow-sm text-sm font-medium tracking-wide">
              GET QUOTE
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-corporate-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen z-50">
          <div className="px-6 pt-8 pb-3 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block text-lg font-serif font-medium text-gray-800 hover:text-accent-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-corporate-900 text-white pt-20 pb-10 border-t-4 border-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
               <img 
                src={COMPANY_LOGO} 
                alt="AP Tex BD Logo" 
                className="h-16 w-16 object-cover rounded-md bg-white p-0.5" 
              />
              <div className="flex flex-col">
                  <span className="font-serif font-bold text-xl text-white leading-none">AP TEX BD</span>
                  <span className="text-[10px] font-bold text-accent-500 tracking-widest uppercase">Manufacturer & Buying House</span>
              </div>
            </div>
            <p className="text-corporate-100 text-sm leading-relaxed max-w-xs font-light">
              Your trusted partner in global textile sourcing and manufacturing. 
              Specializing in Denim and Knitwear with in-house washing facilities.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent-400">Quick Links</h4>
            <ul className="space-y-3 text-sm text-corporate-100 font-light">
              <li><Link to="/about" className="hover:text-accent-400 transition-colors">Company Profile</Link></li>
              <li><Link to="/products" className="hover:text-accent-400 transition-colors">Product Catalog</Link></li>
              <li><Link to="/factory" className="hover:text-accent-400 transition-colors">Production Capability</Link></li>
              <li><Link to="/contact" className="hover:text-accent-400 transition-colors">Request Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent-400">Compliance</h4>
            <div className="flex flex-col gap-3 text-sm text-corporate-100 font-light">
               <p>Govt. Trade License</p>
               <p>Factory Safety Compliant</p>
               <p>Worker Welfare Policy</p>
               <p>Export Ready Documentation</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-accent-400">Contact</h4>
            <div className="space-y-4 text-sm text-corporate-100 font-light">
              <p className="flex items-center gap-3"><Phone size={16} className="text-accent-400" /> +880 195 430 1501</p>
              <p className="flex items-center gap-3"><Mail size={16} className="text-accent-400" /> ap.tex.bd95@gmail.com</p>
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs text-gray-400">Corporate Office & Factory:</p>
                <p>Uttara, Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-corporate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-corporate-200">
          <p>© {new Date().getFullYear()} AP Tex BD. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Garment Manufacturer</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/8801954301501"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center border-2 border-white"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

// --- AI Assistant Component ---
const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hello! I'm the AP Tex BD Assistant. How can I help you with your denim or knitwear sourcing today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await generateAssistantResponse(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end font-sans">
      {isOpen ? (
        <div className="bg-white w-80 h-[28rem] rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden mb-4">
          <div className="bg-corporate-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-sm">Sourcing Assistant</h3>
              <span className="text-xs text-green-400 flex items-center gap-1"><span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> Online</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 text-xs leading-relaxed ${
                  msg.role === 'user' ? 'bg-corporate-600 text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 shadow-sm rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg p-3 text-xs animate-pulse text-gray-500">Processing inquiry...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your inquiry..."
              className="flex-1 text-xs border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-corporate-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-corporate-600 text-white p-2 rounded-md hover:bg-corporate-700 disabled:opacity-50"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-corporate-900 text-white px-5 py-3 rounded-full shadow-lg hover:bg-corporate-800 transition-all text-sm font-semibold flex items-center gap-2 border-2 border-white"
        >
          <span>Ask AI Assistant</span>
        </button>
      )}
    </div>
  );
};

// --- Product Modal Component ---
const ProductDetailModal = ({ product, onClose }: { product: Product, onClose: () => void }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-sm shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full hover:bg-white text-gray-800 transition">
          <X size={24} />
        </button>
        
        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-100 relative flex items-center justify-center p-6">
          <img src={product.image} alt={product.name} className="max-h-[70vh] w-full object-contain rounded-sm" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 overflow-y-auto">
          <div className="mb-2">
            <span className="text-accent-600 font-bold tracking-widest text-xs uppercase">{product.category}</span>
          </div>
          <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-4">{product.name}</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed font-light">{product.description || "No description available."}</p>
            </div>

            {product.fabric && (
              <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Fabric Composition</h3>
                <p className="text-gray-600 font-medium bg-gray-50 p-3 rounded-sm border border-gray-100">{product.fabric}</p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
               <div>
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Key Features</h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <CheckCircle size={16} className="text-accent-500" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 uppercase">Minimum Order Qty</span>
                <p className="text-xl font-bold text-corporate-900">{product.moq || 'Negotiable'}</p>
              </div>
              <Link to="/contact" className="bg-corporate-900 text-white px-8 py-3 rounded-sm font-bold hover:bg-accent-500 transition shadow-md">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Pages ---

const HomePage = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section (16:9 Full Width) */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={HERO_IMAGES[0]}
            alt="Factory Floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-corporate-900/90 to-corporate-900/40"></div>
        </div>
        
        <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-10">
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 border border-accent-500 text-accent-400 text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-corporate-900/50 backdrop-blur-sm">
              Established Textile Manufacturer
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
              Trusted Denim & <br/> 
              <span className="text-accent-400">Knitwear Production</span> <br/>
              from Bangladesh
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-accent-500 pl-6">
              Own Factory | In-house Denim Washing | MOQ from 200 Pcs <br/>
              <span className="text-white font-medium mt-2 block">Monthly Capacity: 150,000 Pcs</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact" className="bg-accent-500 text-white font-bold py-4 px-10 rounded-sm hover:bg-accent-600 transition shadow-lg text-center tracking-wide text-sm uppercase">
                Request a Quote
              </Link>
              <Link to="/products" className="border border-white text-white font-bold py-4 px-10 rounded-sm hover:bg-white hover:text-corporate-900 transition text-center tracking-wide text-sm uppercase">
                View Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are (2 Images Side by Side) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="mt-8">
                     <img src={HERO_IMAGES[1]} alt="Corporate Meeting" className="w-full h-80 object-cover rounded-sm shadow-xl" />
                  </div>
                  <div>
                     <img src={HERO_IMAGES[2]} alt="Factory Sewing" className="w-full h-80 object-cover rounded-sm shadow-xl" />
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 border-accent-500 hidden md:block"></div>
             </div>
             <div className="order-1 md:order-2">
                <span className="text-accent-500 font-bold tracking-widest text-sm uppercase block mb-3">About AP Tex BD</span>
                <h2 className="text-4xl font-serif font-bold text-corporate-900 mb-6">World-Class Manufacturing & Sourcing</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                  AP Tex BD is a professional garment manufacturing and sourcing company based in Bangladesh, 
                  specializing in <span className="font-semibold text-corporate-900">denim and knitwear products</span> for European and American private-label brands. 
                </p>
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  With our own factory, 250 skilled workers, and in-house denim washing facility, we ensure high quality, 
                  competitive pricing, and on-time delivery.
                </p>
                <div className="flex gap-8">
                   <div>
                      <h4 className="text-3xl font-serif font-bold text-corporate-900">250+</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Skilled Workers</p>
                   </div>
                   <div>
                      <h4 className="text-3xl font-serif font-bold text-corporate-900">150k</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mt-1">Monthly Capacity</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Key Strengths Icons */}
      <section className="py-20 bg-corporate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-corporate-900">Why Choose Us</h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {STRENGTHS.map((strength, idx) => (
              <div key={idx} className="bg-white p-6 rounded-sm shadow-sm text-center hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-gray-100">
                <div className="text-accent-500 mb-4 flex justify-center">{strength.icon}</div>
                <div className="font-serif font-bold text-corporate-900 text-sm mb-2">{strength.label}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{strength.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Products Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <span className="text-accent-500 font-bold tracking-widest text-sm uppercase block mb-3">Our Expertise</span>
              <h2 className="text-4xl font-serif font-bold text-corporate-900 mb-4">Core Product Categories</h2>
              <p className="text-gray-600 font-light">
                Specializing in Denim, Knitwear & Woven Casuals. We manufacture these styles based on your specific designs.
              </p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-corporate-900 font-bold hover:text-accent-500 transition">
              VIEW ALL COLLECTIONS <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/products" className="group relative h-[520px] overflow-hidden cursor-pointer">
              <img src={DENIM_COLLECTION[0].image} alt="Denim" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 text-white">
                 <h3 className="text-2xl font-serif font-bold mb-2">Denim Collection</h3>
                 <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Jackets, Jeans & Shirts</p>
              </div>
            </Link>
            <Link to="/products" className="group relative h-[520px] overflow-hidden cursor-pointer">
              <img src={KNITWEAR_COLLECTION[0].image} alt="Knitwear" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-8 left-8 text-white">
                 <h3 className="text-2xl font-serif font-bold mb-2">Premium Knitwear</h3>
                 <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">T-Shirts, Polos & Hoodies</p>
              </div>
            </Link>
            <Link to="/products" className="group relative h-[520px] overflow-hidden cursor-pointer">
              <img src={WOMENS_KIDS_COLLECTION[0].image} alt="Kids" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
               <div className="absolute inset-0 bg-gradient-to-t from-corporate-900/90 via-transparent to-transparent opacity-90"></div>
               <div className="absolute bottom-8 left-8 text-white">
                 <h3 className="text-2xl font-serif font-bold mb-2">Women & Kids</h3>
                 <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Fashion & Comfort Wear</p>
              </div>
            </Link>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/products" className="inline-block border-b-2 border-corporate-900 text-corporate-900 font-bold pb-1">VIEW ALL COLLECTIONS</Link>
          </div>
        </div>
      </section>

      {/* Custom Manufacturing Box */}
      <section className="py-20 bg-corporate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
           <Factory size={400} />
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Custom Manufacturing Service</h2>
          <p className="text-corporate-100 mb-10 text-xl font-light max-w-3xl mx-auto leading-relaxed">
            We don't just sell products; we create your brand. You select the fabric and design — we manufacture exactly as per your choice and specifications.
          </p>
          <Link to="/contact" className="inline-block bg-white text-corporate-900 font-bold py-4 px-12 rounded-sm shadow hover:bg-accent-500 hover:text-white transition transform hover:-translate-y-1 tracking-wide uppercase text-sm">
            Start Production
          </Link>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="pb-20">
    <div className="bg-corporate-50 py-20 mb-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <span className="text-accent-500 font-bold tracking-widest text-sm uppercase block mb-3">Company Profile</span>
        <h1 className="text-5xl font-serif font-bold text-corporate-900 mb-4">About AP Tex BD</h1>
        <p className="text-xl text-gray-500 font-light">Manufacturer & Buying House | Denim & Knitwear Specialist</p>
      </div>
    </div>
    
    <div className="max-w-4xl mx-auto px-4 space-y-20">
      <section className="bg-white p-8 md:p-12 shadow-xl rounded-sm border-t-4 border-accent-500">
        <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-8">Our Story & Capabilities</h2>
        <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
          <p>
            AP Tex BD is a professionally managed apparel manufacturing and buying house company specializing in denim, knitwear, and woven garments. We support small and medium-sized fashion brands in Europe and North America with reliable production, strict quality control, and flexible order quantities.
          </p>
          <p>
            We operate our own production unit with <span className="font-semibold text-corporate-900">250 skilled employees</span> and maintain a monthly manufacturing capacity of <span className="font-semibold text-corporate-900">150,000 pieces</span>. Our <span className="font-semibold text-corporate-900">in-house denim washing facility</span> allows us to maintain full control over product quality, finishing, and lead time.
          </p>
          <p>
             We are working as a hybrid partner (Manufacturer + Buying House), which means we can handle both in-house production and large volume sourcing through our trusted partner factories when required.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-corporate-900 text-white p-10 rounded-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent-400">Our Mission</h3>
            <p className="text-corporate-100 leading-relaxed">To provide high-quality garments at competitive prices while maintaining ethical production, consistent quality, and on-time shipment for global buyers.</p>
          </div>
        </div>
        <div className="bg-gray-100 p-10 rounded-sm border border-gray-200">
          <h3 className="text-2xl font-serif font-bold text-corporate-900 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">To become a long-term manufacturing partner for international fashion brands through trust, transparency, and sustainable production.</p>
        </div>
      </section>

      <section className="pt-10">
         <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-8 text-center">Compliance & Legal Status</h2>
         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Government Trade License",
              "Factory Safety Compliance",
              "Worker Welfare Policy",
              "Export Documentation Ready",
              "Buyer Audit Support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm rounded-sm">
                 <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-500" size={20} /> 
                 </div>
                 <span className="font-medium text-gray-800">{item}</span>
              </div>
            ))}
         </div>
      </section>
    </div>
  </div>
);

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState<'Denim' | 'Knitwear' | 'Others'>('Denim');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-corporate-900 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Product Catalog</h1>
          <p className="text-xl text-corporate-100 font-light max-w-2xl mx-auto">
             Explore our manufacturing capabilities. We produce strictly according to your custom requirements and designs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-200 pb-1">
          {[
            { id: 'Denim', label: 'Denim Collection' },
            { id: 'Knitwear', label: 'Knitwear & Fabrics' },
            { id: 'Others', label: 'Women & Kids' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all border-b-4 ${
                activeTab === tab.id
                  ? 'border-accent-500 text-corporate-900 bg-gray-50' 
                  : 'border-transparent text-gray-500 hover:text-corporate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Denim Section */}
        {activeTab === 'Denim' && (
          <div className="animate-fadeIn">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-2">Denim Jackets, Jeans & Shirts</h2>
               <p className="text-gray-500">Premium washes, custom fits, and durable stitching.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DENIM_COLLECTION.map(product => (
                <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product)}>
                  <div className="relative h-96 overflow-hidden mb-4 rounded-sm bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="bg-white text-corporate-900 px-6 py-2 text-xs font-bold uppercase tracking-widest">View Details</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-xs font-semibold text-accent-600">MOQ: {product.moq || '200 pcs'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Knitwear Section */}
        {activeTab === 'Knitwear' && (
          <div className="animate-fadeIn">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-2">Knitwear Essentials</h2>
               <p className="text-gray-500">Comfortable cottons, blends, and high-quality textures.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {KNITWEAR_COLLECTION.map(product => (
                <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product)}>
                  <div className="relative h-96 overflow-hidden mb-4 rounded-sm bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="bg-white text-corporate-900 px-6 py-2 text-xs font-bold uppercase tracking-widest">View Details</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-xs font-semibold text-accent-600">MOQ: {product.moq || '200 pcs'}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Women & Kids Section */}
        {activeTab === 'Others' && (
          <div className="animate-fadeIn">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-2">Women & Kids Collection</h2>
               <p className="text-gray-500">Trendy styles for international markets.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WOMENS_KIDS_COLLECTION.map(product => (
                <div key={product.id} className="group cursor-pointer" onClick={() => handleProductClick(product)}>
                  <div className="relative h-96 overflow-hidden mb-4 rounded-sm bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="bg-white text-corporate-900 px-6 py-2 text-xs font-bold uppercase tracking-widest">View Details</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <p className="text-xs font-semibold text-accent-600">MOQ: {product.moq || '200 pcs'}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20 text-center">
        <div className="bg-gray-50 p-8 max-w-3xl mx-auto rounded-sm border border-gray-200">
           <p className="text-lg font-serif text-corporate-900 font-bold mb-4">Don't see what you're looking for?</p>
           <p className="text-gray-600 mb-6">We manufacture custom designs. Send us your tech pack or sample image.</p>
           <Link to="/contact" className="inline-block bg-corporate-900 text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wide hover:bg-accent-500 transition">
             Contact for Custom Order
           </Link>
        </div>
      </div>
      
      {/* Detail Modal */}
      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={closeProductModal} />}
    </div>
  );
};

const DesignLabPage = () => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const result = await generateDesignImage(prompt, size);
      if (result) {
        setGeneratedImage(result);
      } else {
        setError("Failed to generate image. Please try again.");
      }
    } catch (err) {
      setError("An error occurred during generation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-corporate-900 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
             <Wand2 size={48} className="text-accent-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Design Lab</h1>
          <p className="text-xl text-corporate-100 font-light max-w-2xl mx-auto">
             Visualize your custom clothing concepts instantly with our AI-powered design tool.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Controls */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white p-8 rounded-sm shadow-lg">
              <h2 className="text-xl font-bold text-corporate-900 mb-6 font-serif">Create Your Design</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Design Description</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="E.g., A vintage denim jacket with floral embroidery on the back and copper buttons..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none h-32 resize-none text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-2">Be specific about style, fabric, color, and details.</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Image Quality</label>
                  <div className="flex gap-4">
                    {['1K', '2K', '4K'].map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s as any)}
                        className={`flex-1 py-2 px-4 rounded-sm border text-sm font-bold transition-all ${
                          size === s 
                            ? 'bg-corporate-900 text-white border-corporate-900' 
                            : 'bg-white text-gray-600 border-gray-300 hover:border-corporate-500'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className="w-full bg-accent-500 text-white font-bold py-4 rounded-sm shadow-md hover:bg-accent-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Generating...
                    </>
                  ) : (
                    <>
                      <Wand2 size={20} /> Generate Design
                    </>
                  )}
                </button>
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-sm border border-blue-100">
              <h3 className="font-bold text-corporate-900 mb-2 text-sm">Pro Tips:</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                <li>Mention fabric type (e.g., "Raw Denim", "Cotton Jersey").</li>
                <li>Specify fit (e.g., "Oversized", "Slim fit").</li>
                <li>Add details like "Contrast stitching", "Distressed hem".</li>
              </ul>
            </div>
          </div>

          {/* Result Display */}
          <div className="md:col-span-3">
             <div className="bg-white p-4 rounded-sm shadow-lg h-full min-h-[500px] flex flex-col items-center justify-center relative">
                {generatedImage ? (
                  <div className="relative w-full h-full group">
                    <img src={generatedImage} alt="Generated Design" className="w-full max-h-[70vh] object-contain rounded-sm" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a 
                        href={generatedImage} 
                        download="my-design.png"
                        className="bg-white text-corporate-900 p-2 rounded-full shadow-lg hover:bg-accent-500 hover:text-white flex items-center justify-center"
                        title="Download Image"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-400 p-10">
                     <div className="bg-gray-50 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Wand2 size={40} className="text-gray-300" />
                     </div>
                     <p className="text-lg font-medium">Your design will appear here</p>
                     <p className="text-sm mt-2">Enter a description and click Generate to start.</p>
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => (
  <div className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-accent-500 font-bold tracking-widest text-sm uppercase block mb-3">What We Do</span>
        <h1 className="text-4xl font-serif font-bold text-corporate-900">Our Services</h1>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-20">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="bg-white p-10 rounded-sm shadow-xl border-l-4 border-accent-500 hover:-translate-y-1 transition duration-300">
            <div className="bg-corporate-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h2 className="text-2xl font-serif font-bold text-corporate-900 mb-4">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">{service.description}</p>
          </div>
        ))}
      </div>

       {/* QA Section */}
       <div className="bg-corporate-900 text-white p-12 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="md:flex justify-between items-start gap-12">
               <div className="md:w-1/3 mb-8 md:mb-0">
                  <h2 className="text-3xl font-serif font-bold mb-6 text-white">Quality Assurance Process</h2>
                  <p className="text-corporate-100 font-light text-lg">We strictly follow international quality standards to meet EU & USA buyer requirements.</p>
               </div>
               <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                 {[
                   { title: "Incoming QC", desc: "Fabric & Accessories Inspection" },
                   { title: "Process QC", desc: "Inline & Pre-production checks" },
                   { title: "Final QC", desc: "AQL 1.5 / 2.5 Standard" },
                   { title: "Testing", desc: "Color Fastness, Shrinkage, GSM" }
                 ].map((item, i) => (
                   <div key={i} className="bg-white/10 p-6 rounded-sm border border-white/10 backdrop-blur-sm">
                      <span className="text-accent-400 font-bold block mb-2 text-lg font-serif">{item.title}</span>
                      <span className="text-gray-300 text-sm">{item.desc}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>
       </div>
    </div>
  </div>
);

const FactoryPage = () => {
  return (
    <div className="pb-20 bg-white">
       <div className="relative h-[60vh] flex items-center justify-center">
         <img src={FACTORY_IMAGES_SET[1].image} alt="Factory Floor" className="absolute inset-0 w-full h-full object-cover" />
         <div className="absolute inset-0 bg-corporate-900/80"></div>
         <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl font-serif font-bold mb-4">Factory & Infrastructure</h1>
            <p className="text-xl text-corporate-100 font-light">250 Skilled Workers | 150,000 Pcs Monthly Capacity</p>
         </div>
       </div>

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-20">
        {/* Machinery Gallery (4 Corporate Images) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {FACTORY_IMAGES_SET.map((img) => (
            <div key={img.id} className="bg-white p-2 shadow-lg rounded-sm">
              <div className="h-80 overflow-hidden relative group">
                <img src={img.image} alt={img.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 bg-white/90 px-4 py-2 text-corporate-900 font-bold text-xs uppercase tracking-widest">
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
             <span className="text-accent-500 font-bold tracking-widest text-sm uppercase block mb-3">Our Strength</span>
             <h2 className="text-3xl font-serif font-bold text-corporate-900 mb-6">Production Capabilities</h2>
             <ul className="space-y-4">
               {[
                 'Own Garment Manufacturing Unit', 
                 '250 Skilled Workers', 
                 'In-house Denim Washing Facility',
                 'Modern Sewing Machines',
                 'Dedicated QC Team',
                 'Export Packing Section'
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 p-4 border-b border-gray-100">
                   <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                   <span className="text-gray-700 font-medium">{item}</span>
                 </li>
               ))}
             </ul>
          </div>
          
          {/* Capacity Chart */}
          <div className="bg-white p-8 rounded-sm shadow-xl border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-corporate-900 mb-8 text-center">Monthly Production Capacity</h2>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={PRODUCTION_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f4f8" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#4b5563', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a365d', color: '#fff', borderRadius: '4px', border: 'none' }}
                    itemStyle={{ color: '#fff' }}
                    cursor={{fill: '#f0f4f8'}}
                  />
                  <Bar dataKey="output" fill="#2c5282" radius={[2, 2, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    productType: '',
    fabricType: '',
    quantity: '',
    price: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our sales team will contact you within 24 hours at ap.tex.bd95@gmail.com');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-corporate-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-sm">
          <div className="bg-corporate-900 p-10 md:p-14 md:w-2/5 text-white flex flex-col justify-between">
             <div>
                <span className="text-accent-500 font-bold tracking-widest text-xs uppercase block mb-6">Get in Touch</span>
                <h1 className="text-4xl font-serif font-bold mb-6">Start Your Sourcing Journey</h1>
                <p className="text-corporate-100 font-light leading-relaxed mb-8">
                  We are ready to handle your production needs. Fill out the form and our team will get back to you within 24 hours.
                </p>
             </div>
             <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full"><Mail size={20} className="text-accent-400"/></div>
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Email Us</span>
                     ap.tex.bd95@gmail.com
                   </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-white/10 p-3 rounded-full"><Phone size={20} className="text-accent-400"/></div>
                   <div>
                     <span className="block text-gray-400 text-xs uppercase mb-1">Call / WhatsApp</span>
                     +880 195 430 1501
                   </div>
                </div>
             </div>
          </div>
          
          <div className="p-10 md:p-14 md:w-3/5 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input required type="text" name="name" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Business Email</label>
                  <input required type="email" name="email" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="email@company.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Product Type</label>
                  <input type="text" name="productType" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="e.g. Denim Jackets" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Quantity (Pcs)</label>
                  <input type="number" name="quantity" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="MOQ 200+" />
                </div>
              </div>

               <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Fabric Type</label>
                  <input type="text" name="fabricType" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="e.g. 100% Cotton" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Target Price (USD)</label>
                  <input type="text" name="price" onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="Optional" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea name="message" rows={4} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border-b-2 border-gray-200 focus:border-corporate-600 focus:outline-none transition-colors" placeholder="Please describe your requirements..."></textarea>
              </div>

              <button type="submit" className="w-full bg-corporate-900 text-white font-bold py-4 rounded-sm hover:bg-accent-500 transition shadow-lg uppercase tracking-widest text-sm">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

const App = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen text-gray-800 font-sans antialiased selection:bg-accent-200 selection:text-corporate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/factory" element={<FactoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/design-lab" element={<DesignLabPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <AIAssistant />
      </div>
    </HashRouter>
  );
};

export default App;
