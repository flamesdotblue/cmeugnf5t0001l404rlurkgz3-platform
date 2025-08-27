import { ShoppingCart, Bot, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header({ cartCount = 0 }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-white">Astra Robotics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm text-neutral-300 hover:text-white transition">Shop</a>
            <a href="#features" className="text-sm text-neutral-300 hover:text-white transition">Features</a>
            <a href="#support" className="text-sm text-neutral-300 hover:text-white transition">Support</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cart" className="relative inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-800 transition">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 rounded-full bg-fuchsia-500 text-white text-xs grid place-items-center">
                  {cartCount}
                </span>
              )}
            </a>
            <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-900 p-2 hover:bg-neutral-800 transition">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col gap-2">
              <a href="#products" className="px-2 py-2 rounded-md hover:bg-neutral-900 text-neutral-300 hover:text-white transition">Shop</a>
              <a href="#features" className="px-2 py-2 rounded-md hover:bg-neutral-900 text-neutral-300 hover:text-white transition">Features</a>
              <a href="#support" className="px-2 py-2 rounded-md hover:bg-neutral-900 text-neutral-300 hover:text-white transition">Support</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
