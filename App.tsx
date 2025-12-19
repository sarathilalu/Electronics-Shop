
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import AIAdvisor from './components/AIAdvisor';
import { Product, CartItem, Category } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const categories: Category[] = ['All', 'Laptops', 'Phones', 'Audio', 'Gaming', 'Accessories'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onCartToggle={() => setIsCartOpen(!isCartOpen)} 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-1">
        <Hero />

        <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 pb-20">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Featured Collections</h2>
                <p className="text-slate-500 text-sm">Browse our hand-picked selection of premium gadgets.</p>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                      activeCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <ProductGrid 
              products={filteredProducts} 
              onAddToCart={handleAddToCart} 
            />
          </div>
        </div>

        <section className="bg-slate-900 py-24 px-4 overflow-hidden relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-4 block">Newsletter</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Unlock Exclusive Tech Deals & Updates.
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Join 50,000+ tech enthusiasts and stay ahead of the curve with our weekly curated gadget insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                     <img src="https://picsum.photos/seed/tech1/300/400" className="rounded-2xl w-full h-48 object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                     <img src="https://picsum.photos/seed/tech2/300/400" className="rounded-2xl w-full h-64 object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                  </div>
                  <div className="space-y-4">
                     <img src="https://picsum.photos/seed/tech3/300/400" className="rounded-2xl w-full h-64 object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                     <img src="https://picsum.photos/seed/tech4/300/400" className="rounded-2xl w-full h-48 object-cover opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                  </div>
               </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full" />
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-slate-900">ElectroPulse</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
                Empowering your digital life with the world's most innovative electronics. Experience precision, performance, and excellence.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram'].map(platform => (
                  <a key={platform} href="#" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                    <span className="sr-only">{platform}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Product</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Laptops</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Phones</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Audio Gear</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Company</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2024 ElectroPulse Hub. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Made with <span className="text-rose-500">❤️</span> for tech lovers
            </p>
          </div>
        </div>
      </footer>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <AIAdvisor />
    </div>
  );
};

export default App;
