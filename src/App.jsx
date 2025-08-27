import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => setCartCount((c) => c + 1);

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <section id="products" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Shop Robots</h2>
            <p className="mt-2 text-neutral-400">From home companions to warehouse workhorses, find your perfect bot.</p>
            <div className="mt-8">
              <ProductGrid onAddToCart={handleAddToCart} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
