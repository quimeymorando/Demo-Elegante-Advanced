import { motion } from 'framer-motion'
import { MapPin, Instagram, Phone, ChevronRight } from 'lucide-react'

// Utilidad para unir clases de tailwind elegantemente
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function App() {
  return (
    <div className="min-h-screen bg-brand-black w-full text-brand-white selection:bg-brand-gold selection:text-brand-black">
      {/* Navbar Minimalista */}
      <nav className="fixed top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference">
        <div className="text-2xl font-heading tracking-widest text-brand-white">LUCE MARE</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-brand-white/80">
          <a href="#about" className="hover:text-brand-gold transition-colors">Story</a>
          <a href="#menu" className="hover:text-brand-gold transition-colors">Menu</a>
          <a href="#gallery" className="hover:text-brand-gold transition-colors">Gallery</a>
        </div>
        <button className="text-sm uppercase tracking-widest border border-brand-white/30 px-6 py-2 rounded-full hover:bg-brand-white hover:text-brand-black transition-all duration-300">
          Reservations
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Placeholder alta calidad Fine Dining */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop" 
            alt="Fine Dining Atmosphere" 
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/40 via-transparent to-brand-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
          >
            Mediterranean Fine Dining Experience
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-6xl md:text-8xl lg:text-9xl font-heading mb-12"
          >
            Luce Mare
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <button className="bg-brand-gold text-brand-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-500">
              Reserve a Table
            </button>
            <button className="border border-brand-white/20 px-10 py-4 uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-500">
              View Menu
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 w-full order-2 md:order-1">
          <img 
            src="/about_dish.png" 
            alt="Iberico Pork Pluma" 
            className="w-full aspect-[3/4] object-cover grayscale transition-all duration-700"
          />
        </div>
        <div className="flex-1 order-1 md:order-2">
          <h2 className="text-4xl md:text-6xl font-heading text-brand-gold mb-8">Culinary Poetry</h2>
          <p className="text-brand-white/70 leading-relaxed font-light text-lg mb-6">
            Luce Mare was born from an unyielding passion for Mediterranean heritage and modern gastronomy. Every dish we conceptualize is an homage to the sea and the earth, crafted with absolute precision.
          </p>
          <p className="text-brand-white/70 leading-relaxed font-light text-lg mb-10">
            Guided by our Michelin-starred Executive Chef, we transform the finest seasonal ingredients into an unforgettable dining experience where elegance meets authentic flavors.
          </p>
          <button className="group flex items-center gap-4 text-brand-gold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300">
            Discover our Story 
            <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="featured" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-16 tracking-wide">Signature Masterpieces</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { img: "/truffle.png", title: "Truffle Tagliolini", desc: "Fresh handmade pasta, Parmigiano-Reggiano, shaved white truffles." },
            { img: "/wagyu.png", title: "Wagyu Tenderloin", desc: "Grade A5 Wagyu, smoked eggplant purée, balsamic caviar." },
            { img: "/lobster.png", title: "Lobster Ravioli", desc: "Maine lobster filling, saffron bisque, micro basil." },
            { img: "/scallops.png", title: "Golden Scallops", desc: "Pan-seared sea scallops, citrus beurre blanc, edible gold flakes." }
          ].map((dish, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              key={i} 
              className="group cursor-pointer relative overflow-hidden"
            >
              <div className="overflow-hidden w-full aspect-square mb-6">
                <img 
                  src={dish.img} 
                  alt={dish.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
              <h3 className="text-2xl font-heading text-brand-gold mb-2">{dish.title}</h3>
              <p className="text-brand-white/70 font-light max-w-sm">{dish.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button className="border-b border-brand-gold pb-1 text-brand-gold uppercase tracking-widest text-sm hover:text-white transition-colors duration-300">
            View Complete Menu
          </button>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="py-24 md:py-32 bg-zinc-950 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading mb-16 tracking-wide">Tasting Menu</h2>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-brand-gold uppercase tracking-[0.2em] mb-8 text-sm">Starters</h3>
              <div className="space-y-6">
                {[ 
                  { name: "Oysters Pearl", price: "$45", desc: "Mignonette pearls, finger lime, champagne foam" },
                  { name: "Wagyu Carpaccio", price: "$52", desc: "Truffle aioli, aged parmesan, crispy capers" },
                  { name: "Burrata & Fig", price: "$35", desc: "Heirloom tomato, balsamic glaze, basil oil" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-brand-white/10 pb-4">
                    <div className="text-left">
                      <p className="font-heading text-xl">{item.name}</p>
                      <p className="text-brand-white/50 text-sm font-light">{item.desc}</p>
                    </div>
                    <span className="text-brand-gold font-light tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-brand-gold uppercase tracking-[0.2em] mb-8 text-sm">Main Courses</h3>
              <div className="space-y-6">
                {[ 
                  { name: "Dover Sole", price: "$85", desc: "Meunière sauce, confit potatoes, brown butter" },
                  { name: "Iberico Pork Pluma", price: "$92", desc: "Charred leeks, apple purée, mustard seed jus" },
                  { name: "Risotto Acquerello", price: "$75", desc: "36-month parmesan, black winter truffle" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-brand-white/10 pb-4">
                    <div className="text-left">
                      <p className="font-heading text-xl">{item.name}</p>
                      <p className="text-brand-white/50 text-sm font-light">{item.desc}</p>
                    </div>
                    <span className="text-brand-gold font-light tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-brand-gold uppercase tracking-[0.2em] mb-8 text-sm">Desserts</h3>
              <div className="space-y-6">
                {[ 
                  { name: "Valrhona Soufflé", price: "$28", desc: "70% Guanacoa chocolate, Tahitian vanilla bean ice cream" },
                  { name: "Lemon Sphere", price: "$24", desc: "Meyer lemon mousse, basil gel, shortbread crumble" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-brand-white/10 pb-4">
                    <div className="text-left">
                      <p className="font-heading text-xl">{item.name}</p>
                      <p className="text-brand-white/50 text-sm font-light">{item.desc}</p>
                    </div>
                    <span className="text-brand-gold font-light tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="w-full flex">
          <div className="grid grid-cols-2 md:grid-cols-4 aspect-[4/1]">
            <div className="relative overflow-hidden group">
              <img src="/gallery1.png" alt="Restaurant Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
            </div>
            <div className="relative overflow-hidden group">
              <img src="/gallery2.png" alt="Cocktail Bar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
            </div>
            <div className="relative overflow-hidden group">
              <img src="/gallery3.png" alt="Wine Tasting" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
            </div>
            <div className="relative overflow-hidden group">
              <img src="/gallery4.png" alt="Chef Cooking" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" />
            </div>
          </div>
      </section>

      {/* Reservation & Location Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Reservation CTA */}
        <div className="flex-1 bg-zinc-950 p-12 md:p-16 flex flex-col justify-center border border-white/5">
          <h2 className="text-4xl md:text-5xl font-heading text-brand-gold mb-6">Reserve your table tonight</h2>
          <p className="text-brand-white/60 font-light mb-12">Join us for an evening of culinary excellence. For parties larger than 6, please call us directly.</p>
          
          <div className="flex flex-col gap-4">
            <button className="bg-brand-gold text-brand-black w-full py-4 uppercase tracking-widest text-sm font-medium hover:bg-white transition-colors duration-500">
              Online Reservation
            </button>
            <button className="border border-brand-white/20 w-full py-4 uppercase tracking-widest text-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-500 rounded-none">
              WhatsApp Reservation
            </button>
          </div>
        </div>
        
        {/* Location Info */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-2xl font-heading mb-8 opacity-80">Our Sanctuary</h3>
          <div className="space-y-8 font-light text-brand-white/70">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <p>123 Marina Bay Boulevard, Suite 89</p>
                <p>Elegant District, City, 90210</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-brand-gold shrink-0 mt-1" />
              <div>
                <p>+1 (555) 123-4567</p>
                <p>reservations@lucemare.com</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <p className="text-brand-white mb-2">Opening Hours</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p>Tuesday - Thursday</p>
                  <p className="text-brand-gold">18:00 - 23:30</p>
                </div>
                <div>
                  <p>Friday - Sunday</p>
                  <p className="text-brand-gold">17:00 - 00:00</p>
                </div>
              </div>
              <p className="text-xs mt-4 text-white/40">Closed on Mondays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="w-full py-12 border-t border-white/5 px-6 md:px-12 flex flex-col md:flex-row items-center text-sm font-light text-brand-white/40 gap-8">
        <div className="flex-1 w-full text-center md:text-left order-3 md:order-1 mt-4 md:mt-0">
          <p>© 2026 Luce Mare. All rights reserved.</p>
        </div>
        <div className="flex-1 w-full text-center text-2xl font-heading tracking-widest text-brand-white/80 order-1 md:order-2">
          LUCE MARE
        </div>
        <div className="flex-1 w-full flex justify-center md:justify-end gap-6 order-2 md:order-3">
          <a href="#" className="hover:text-brand-gold transition-colors flex items-center gap-2">
            <Instagram className="w-4 h-4" /> Instagram
          </a>
        </div>
      </footer>

    </div>
  )
}

export default App
