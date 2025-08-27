import { Cpu, ShieldCheck, Cog, Wifi, BatteryCharging, Rocket } from 'lucide-react';

const features = [
  { icon: Cpu, title: 'On-device AI', desc: 'Dedicated edge TPU for real-time perception and planning.' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'Multi-sensor collision avoidance and human detection.' },
  { icon: Cog, title: 'Modular', desc: 'Swap payloads in seconds with magnetic mounts.' },
  { icon: Wifi, title: 'Connected', desc: 'Wi‑Fi 6E, BLE 5.3, and private 5G-ready control.' },
  { icon: BatteryCharging, title: 'All-day Power', desc: 'Smart dock with 90-minute fast charge to 80%.' },
  { icon: Rocket, title: 'Deploy Fast', desc: 'Setup wizard gets you operational in under 10 minutes.' },
];

export default function Features() {
  return (
    <section id="features" className="py-16 border-t border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Astra</h2>
        <p className="mt-2 text-neutral-400 max-w-2xl">Engineered for reliability, built for humans. Our platform blends cutting-edge robotics with delightful UX.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:bg-neutral-900 transition">
              <div className="h-10 w-10 rounded-md bg-neutral-800 grid place-items-center group-hover:bg-neutral-700 transition">
                <f.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
