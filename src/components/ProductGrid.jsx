import { Plus, Star } from 'lucide-react';

const products = [
  {
    id: 'orb-1',
    name: 'ORB-1 Companion',
    price: 1299,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1400&auto=format&fit=crop',
    desc: 'Friendly home assistant with voice and gesture controls.'
  },
  {
    id: 'atlas-mini',
    name: 'Atlas Mini Pro',
    price: 3499,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1549237511-6d70a4c9eea2?q=80&w=1400&auto=format&fit=crop',
    desc: 'Agile mobile base for research and education labs.'
  },
  {
    id: 'cargo-x',
    name: 'Cargo X',
    price: 5999,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?q=80&w=1400&auto=format&fit=crop',
    desc: 'Autonomous indoor delivery with dynamic routing.'
  },
  {
    id: 'sentinel',
    name: 'Sentinel S',
    price: 7999,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1596445836561-991daf8d2c86?q=80&w=1400&auto=format&fit=crop',
    desc: '24/7 patrol and monitoring with encrypted cloud sync.'
  }
];

export default function ProductGrid({ onAddToCart }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <article key={p.id} className="group flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-900 transition">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-[1.03] transition-transform duration-300" loading="lazy" />
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold leading-tight text-white">{p.name}</h3>
              <span className="text-sm font-semibold text-cyan-400">${p.price.toLocaleString()}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-400 line-clamp-2">{p.desc}</p>
            <div className="mt-3 flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-amber-400' : 'fill-transparent'} stroke-amber-400`} />
              ))}
              <span className="ml-2 text-xs text-neutral-400">{p.rating.toFixed(1)}</span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => onAddToCart && onAddToCart(p)}
                className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-200 transition"
              >
                <Plus className="h-4 w-4" />
                Add to cart
              </button>
              <a
                href="#support"
                className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-800 transition"
              >
                Learn more
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
