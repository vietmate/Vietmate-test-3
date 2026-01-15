import React, { useState } from 'react';
import { experiences } from '../mockData';
import { ExperienceCard } from '../components/Shared';

const Experiences: React.FC = () => {
  const [sort, setSort] = useState('Recommended');
  
  return (
    <main className="max-w-[1440px] mx-auto px-6 py-6">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-6">
        <a href="/" className="hover:text-primary">Home</a>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <a href="#" className="hover:text-primary">Vietnam</a>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-gray-900 dark:text-gray-200">Experiences</span>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <aside className="w-72 shrink-0 hidden lg:block">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm sticky top-28">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold dark:text-white">Filters</h3>
              <button className="text-xs font-bold text-primary hover:underline">Clear All</button>
            </div>
            
            {/* Location */}
            <div className="mb-8">
              <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Location</h4>
              <div className="space-y-3">
                {['Hanoi', 'Ha Long Bay', 'Da Nang', 'Ho Chi Minh City'].map(loc => (
                  <label key={loc} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/20 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" defaultChecked={loc === 'Hanoi'} />
                    <span className="text-sm font-medium group-hover:text-primary transition-colors dark:text-gray-300">{loc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
               <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Duration</h4>
               <div className="flex flex-wrap gap-2">
                 <button className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-bold">Half-day</button>
                 <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg text-xs font-bold hover:border-primary/20 dark:text-gray-300">Full-day</button>
                 <button className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 border border-transparent rounded-lg text-xs font-bold hover:border-primary/20 dark:text-gray-300">Multi-day</button>
               </div>
            </div>

            {/* Min Rating */}
             <div className="mb-8">
               <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Min. Rating</h4>
               <button className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex text-amber-400 gap-1">
                    {[1,2,3,4].map(s => <span key={s} className="material-symbols-outlined fill-1 text-lg">star</span>)}
                    <span className="text-gray-400 text-sm font-bold ml-1">4+</span>
                  </div>
               </button>
            </div>

             {/* Price Range */}
             <div>
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400 mb-4">Price Range</h4>
                <input type="range" min="0" max="500" className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between mt-3 text-xs font-bold dark:text-gray-300">
                  <span>$0</span>
                  <span className="text-primary">$250+</span>
                </div>
             </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
             <div>
               <h2 className="text-3xl font-extrabold tracking-tight mb-2 dark:text-white">150+ Experiences in Vietnam</h2>
               <p className="text-gray-500 text-sm">Discover the soul of the dragon with our curated tours.</p>
             </div>
             <div className="flex items-center gap-3">
               <span className="text-sm font-bold text-gray-400">Sort by:</span>
               <select 
                className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 rounded-lg text-sm font-bold focus:ring-primary/20 focus:border-primary cursor-pointer pr-10 dark:text-white"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
               >
                 <option>Recommended</option>
                 <option>Price: Low to High</option>
                 <option>Price: High to Low</option>
                 <option>Best Rated</option>
               </select>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {experiences.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 border-2 border-primary text-primary font-black rounded-xl hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">
                LOAD MORE ADVENTURES
                <span className="material-symbols-outlined">expand_more</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Experiences;
