import React from 'react';
import { teamMembers } from '../mockData';

const About: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative px-4 md:px-6 lg:px-20 py-10 max-w-[1280px] mx-auto">
        <div className="relative overflow-hidden rounded-3xl min-h-[560px] flex items-end p-8 lg:p-16 shadow-2xl">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4n96awBUYm8Bc1Cji_Yd6fB2llNouobeu3yZhbUM4nnuACBnKK3hGF5r62bW_nb6AG4P4K8on8R3QhRhueV9x6SMIjngREydQk82borCUUGj2aGnVieS2dDza_rLCGTA2Qb94g6iwPb0h_HPrC1klRMt6mGwhGZRbmgU4atJ-OZXwqMUIDDHI8gDPsXg6PEVOGzEYBu6hNZSDU6482IAH-KVYWxu0HGO2kuyqleZ3X14jDDoIGjB-HmsqG4V5IEceGjITClRmD3U')" }}>
          </div>
          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            <div className="inline-flex px-3 py-1 bg-primary/90 text-white text-xs font-bold uppercase tracking-widest rounded-full w-fit backdrop-blur-sm">Meet Our People</div>
            <h2 className="text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                Real Vietnam,<br/>Real People.
            </h2>
            <p className="text-gray-200 text-lg lg:text-xl font-medium leading-relaxed max-w-lg">
                We don't just show you the sights; we connect you with the heartbeat of our culture through the people who live it every day.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                  Explore Our Mission
                  <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                  Watch Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="px-6 lg:px-20 py-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-xl">
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">Our DNA</h3>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal dark:text-white leading-tight">The Three Pillars of Vietmate</h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-sm">Our commitment to providing the most authentic travel experience across the S-shaped land.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Authentic Experiences', icon: 'map', desc: 'Hand-picked tours that bypass the usual tourist traps. We take you to the hidden coffee shops and secret alleyways only locals know.' },
            { title: 'Local Support 24/7', icon: 'support_agent', desc: 'Real human beings on the ground in Hanoi, Saigon, and Da Nang. We\'re your local best friend, available whenever you need a hand.' },
            { title: 'Sustainable Travel', icon: 'eco', desc: 'We invest 10% of our profits back into local community projects. Travel with us to support a greener and fairer Vietnam.' },
          ].map(pillar => (
            <div key={pillar.title} className="group p-8 bg-background-light dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
               <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                 <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
               </div>
               <h4 className="text-xl font-black mb-4 dark:text-white">{pillar.title}</h4>
               <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
         <div className="max-w-[1280px] mx-auto px-6 lg:px-20 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { val: '50k+', label: 'Happy Travelers' },
              { val: '200+', label: 'Local Experts' },
              { val: '1.2k+', label: 'Verified Tours' },
              { val: '98%', label: 'Positive Feedback' },
            ].map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${i > 0 ? 'border-l border-gray-200 dark:border-gray-800' : ''}`}>
                 <span className="text-5xl lg:text-6xl font-black text-primary mb-2">{stat.val}</span>
                 <p className="text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Team Carousel */}
      <section className="px-6 lg:px-20 py-24 max-w-[1280px] mx-auto overflow-hidden">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-charcoal dark:text-white tracking-tighter">Meet the Team</h2>
          <div className="flex gap-4">
             <button className="size-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all dark:text-white">
               <span className="material-symbols-outlined">chevron_left</span>
             </button>
             <button className="size-12 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-all shadow-lg shadow-primary/20">
               <span className="material-symbols-outlined">chevron_right</span>
             </button>
          </div>
        </div>
        <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-10 -mx-4 px-4 snap-x">
          {teamMembers.map(member => (
            <div key={member.id} className="min-w-[320px] snap-center bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-gray-700">
               <div className="h-[380px] bg-cover bg-center" style={{ backgroundImage: `url('${member.image}')` }}></div>
               <div className="p-6">
                 <h5 className="text-2xl font-black dark:text-white">{member.name}</h5>
                 <p className="text-primary font-bold text-sm mb-4">{member.role}</p>
                 <div className="flex items-center gap-2 py-2 px-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                   <span className="material-symbols-outlined text-sm text-gray-500">push_pin</span>
                   <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">Favorite spot: {member.favoriteSpot}</span>
                 </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="px-6 lg:px-20 py-20 bg-white dark:bg-background-dark">
         <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <p className="text-gray-400 font-bold text-sm uppercase tracking-widest mb-2">Our Trusted Partners</p>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all dark:text-gray-300">
               {[
                 { icon: 'verified_user', label: 'Cert. Excellence' },
                 { icon: 'travel_explore', label: 'VNAT Certified' },
                 { icon: 'public', label: 'Global Sustainable Board' },
                 { icon: 'workspace_premium', label: 'Top Pick 2024' },
               ].map(partner => (
                 <div key={partner.label} className="flex flex-col items-center gap-2">
                   <span className="material-symbols-outlined text-4xl">{partner.icon}</span>
                   <span className="text-sm font-black">{partner.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-20 py-20">
         <div className="max-w-[1280px] mx-auto bg-charcoal dark:bg-gray-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <span className="material-symbols-outlined text-[10rem]">auto_awesome</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight relative z-10">Ready to see the real<br/><span className="text-primary italic">Vietnam?</span></h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed relative z-10">Join thousands of travelers who discovered the soul of Vietnam with a local friend. Your story starts here.</p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
               <button className="px-10 py-5 bg-primary text-white rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-primary/20">
                  Book Your First Tour
               </button>
               <button className="px-10 py-5 bg-white text-charcoal rounded-2xl font-black text-xl hover:bg-gray-100 transition-all">
                  Talk to an Expert
               </button>
            </div>
         </div>
      </section>
    </main>
  );
};

export default About;
