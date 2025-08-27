import { Bot, Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="support" className="border-t border-neutral-900 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 grid place-items-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold">Astra Robotics</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 max-w-md">We build dependable robots that empower people and businesses to do more. Designed in California, shipped worldwide.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-900 transition">
                <Github className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-800 hover:bg-neutral-900 transition">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition">Docs</a></li>
              <li><a href="#" className="hover:text-white transition">Warranty</a></li>
              <li><a href="#" className="hover:text-white transition">Repairs</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
              <li><a href="#" className="hover:text-white transition">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Astra Robotics, Inc. All rights reserved.</p>
          <form className="w-full sm:w-auto">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="flex gap-2">
              <input id="email" type="email" placeholder="Get product updates" className="w-full sm:w-64 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button className="rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-semibold hover:bg-neutral-200 transition">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
