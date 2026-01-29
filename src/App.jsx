import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ContactForm from './components/ContactForm';
import BlackBoxRecorder from './components/BlackBoxRecorder';

export default function App() {
  // We added state to track the cart number
  const [cartCount, setCartCount] = useState(0);

  // This function works perfectly... if it ever gets called!
  const handleAddToCart = () => {
    setClickCount(prev => prev + 1); // logic is ready
  };
  
  // FIX: We need a wrapper to actually update the state
  const incrementCart = () => {
    setCartCount(prev => prev + 1);
  };

  const products = [
    { id: 1, title: "Quantum Debugger", price: "99.99" },
    { id: 2, title: "Neural Net Coffee", price: "24.50" },
    { id: 3, title: "Hackathon Hoodie", price: "45.00" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      <BlackBoxRecorder />
      
      {/* Pass the count to the header so we can see it */}
      <Header cartCount={cartCount} />

      <main className="flex-grow max-w-6xl mx-auto p-6 w-full">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                title={product.title} 
                price={product.price}
                // We pass the function down, BUT the ProductCard will ignore it (The Bug)
                onAddToCart={incrementCart} 
              />
            ))}
          </div>
        </section>

        {/* The Form is now fixed so it won't distract the agent */}
        <ContactForm />
        
      </main>

      <Footer />
    </div>
  );
}