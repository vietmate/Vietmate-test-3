import React from 'react';
import { reviews } from '../mockData';

const ExperienceDetail: React.FC = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40 py-6">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 mb-4 items-center">
        <a href="#" className="text-slate-500 dark:text-gray-400 text-xs font-medium hover:underline">Vietnam</a>
        <span className="text-slate-300 text-xs">/</span>
        <a href="#" className="text-slate-500 dark:text-gray-400 text-xs font-medium hover:underline">Hanoi</a>
        <span className="text-slate-300 text-xs">/</span>
        <span className="text-primary text-xs font-bold uppercase tracking-wider">Tours</span>
      </div>

      {/* Page Heading */}
      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div className="flex flex-col gap-2 flex-1 min-w-[300px]">
          <h1 className="text-3xl md:text-4xl font-black leading-tight tracking-tight dark:text-white">
            Hanoi Street Food Tour: <span className="text-primary">Authentic Flavors</span> of the Old Quarter
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex items-center bg-yellow-400/20 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded font-bold">
              <span className="material-symbols-outlined text-[16px] mr-1 fill-current">star</span> 4.9
            </div>
            <span className="text-slate-500 dark:text-gray-400">2,150 reviews • Hanoi, Vietnam</span>
          </div>
        </div>
        <div className="flex gap-2">
           <button className="flex items-center gap-2 rounded-xl h-10 px-4 bg-slate-100 dark:bg-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors dark:text-white">
             <span className="material-symbols-outlined text-[18px]">share</span> Share
           </button>
           <button className="flex items-center gap-2 rounded-xl h-10 px-4 bg-slate-100 dark:bg-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors dark:text-white">
             <span className="material-symbols-outlined text-[18px]">favorite</span> Save
           </button>
        </div>
      </div>

      {/* Bento Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] mb-10">
        <div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden group relative">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgcBshQ5JWYMdZL2mLLHwzLk4Xw1wCB8ox4xjFrcjYxytc_ghlhllKo_GYdL8cyftkVRvAavL27QICbUMfafLBYjOExozvd9mAE2oNprv1EMCINZiZgjyKXRawl35hFCf48sYcVNETYjYMWXZqmLLj1PVFERlDB5WHcVODideJCWOzQPJYYh6BLV4f720crWsOaoVI4-svk7G39pMH7QvDQTfBW8q9k_TET4JB-NkckAiOCdWFvCjtvsJRRyxKS-LRnDOksPsuvnc')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div className="md:col-span-2 rounded-xl overflow-hidden group relative">
           <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBlAwFyTu_0Uuy_z-ohzJLhPh2w5vuui50ds9vvVLvLGiQgvUEEI4jXpf4xHZwIR0k9sQm17iaFd9a0obOMj3b0a3D3SBTJg4JesInc6rHqvUB7pUPiCQoVPA8Vpzdkwq3RY8Li1JIyW2b9CCNFzrb3JWMNsnVwbZAeDl-6aXnWmZliAKyJSYKov6viNoh539UovIsw1Js1GK2MIqFhamRumQqmwH8qOoxtEpambz8KBUeTO8V_qyj2xeuqGhOOChmplW62X-ZRcvQ')" }}></div>
        </div>
        <div className="rounded-xl overflow-hidden group relative">
           <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDu5dhroVTHVrW93EaBWzTDguCr9OEzHP1mgsnNbpqKCbbi9_VANNdnrNvgz_yW9l0YFuMYjbEe-igofccndhrQTzGVuxTvvIKd13iJzIW7p0UruGEg4A-zJInP7AStiPtj4HeMkBHdgQ0QLdJ7QZlGuLUILQWF4JgxGiVT_MbG2dchYVqZoRyyXkJdZcdX6nbcbbbfBMmVER3wV88wx7thpVFu7_xDYoY3g0EEuk2SjcIUFAdxCDHEOq5tbIum2VehclR5h7GFhv0')" }}></div>
        </div>
        <div className="rounded-xl overflow-hidden group relative">
          <div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105 flex items-center justify-center relative" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-_KfgUf2dKqndreKo0nae2UIMmebmdSLccSZR5D30DgQ27vbC3pMsQzk2VJ8zSHUGTcBuPwiGwpa5Sipx84HpIxlf9ijEKWDGi4Tx2gvcaR-FZoGrhliINqMS6nZS0UsNSdF-yttZqUhQcclCQQDU9ZA2jQiDqdJl-1nu1Zkqpo_snP5WkrbMPSc2XWGWmbrHOLyJ3073ywXmXx10gQrF0wB_CX4ozXnd2S--BQLzJiMxXiw9Ay9aksf7JnHCN473RZw8zB3-bVY')" }}>
             <div className="absolute inset-0 bg-black/50"></div>
             <span className="text-white font-bold text-lg relative z-10">+12 Photos</span>
          </div>
        </div>
      </div>

      {/* Sticky Tabs */}
      <div className="sticky top-[80px] z-40 bg-background-light/95 dark:bg-background-dark/95 border-b border-slate-200 dark:border-slate-800 -mx-4 px-4 md:px-0 mb-8 backdrop-blur-sm">
        <div className="flex gap-8 max-w-[1200px] mx-auto overflow-x-auto hide-scrollbar">
          <a href="#overview" className="border-b-2 border-primary text-primary py-4 text-sm font-bold whitespace-nowrap">Overview</a>
          <a href="#itinerary" className="border-b-2 border-transparent text-slate-500 dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors whitespace-nowrap">Itinerary</a>
          <a href="#included" className="border-b-2 border-transparent text-slate-500 dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors whitespace-nowrap">Included</a>
          <a href="#reviews" className="border-b-2 border-transparent text-slate-500 dark:text-gray-400 py-4 text-sm font-bold hover:text-primary transition-colors whitespace-nowrap">Reviews</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Column Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <section id="overview" className="space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">About this experience</h2>
            <p className="text-slate-900 dark:text-gray-300 leading-relaxed text-lg font-light">
               Discover the hidden gems of Hanoi's legendary food scene on this guided walking tour. We'll navigate the labyrinthine alleys of the Old Quarter to find the best bun cha, banh mi, and egg coffee—places where locals eat, far from the tourist traps. Our expert guides tell the stories behind each dish, connecting you to the heart of Vietnamese culture.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                {icon: 'schedule', label: 'Duration', val: '4 Hours'},
                {icon: 'group', label: 'Size', val: 'Max 8 people'},
                {icon: 'translate', label: 'Language', val: 'English'},
                {icon: 'flash_on', label: 'Booking', val: 'Instant'},
              ].map(item => (
                <div key={item.label} className="flex flex-col items-center p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
                   <span className="material-symbols-outlined text-primary mb-2">{item.icon}</span>
                   <span className="text-xs font-bold uppercase text-slate-500 dark:text-gray-400">{item.label}</span>
                   <span className="text-sm font-semibold dark:text-white">{item.val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section id="itinerary" className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">The Journey</h2>
            <div className="space-y-8 relative before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/20">
               {[
                 { title: 'Meeting Point: Cathedral Area', desc: 'Start your journey with a brief orientation and your first snack: Bánh Mì at a local favorite spot.' },
                 { title: 'Hàng Bạc Alley Exploration', desc: 'Taste authentic Bún Chả (Grilled Pork with Vermicelli) in a spot that hasn\'t changed its recipe in 30 years.' },
                 { title: 'Dong Xuan Market', desc: 'Navigate the busy market to try seasonal fruits and local sweets (Chè).' },
                 { title: 'The Grand Finale', desc: 'Visit a hidden rooftop café for the iconic Vietnamese Egg Coffee while overlooking the city lights.' },
               ].map((item, i) => (
                 <div key={i} className="relative pl-10">
                    <div className="absolute left-0 top-1 size-[24px] rounded-full bg-primary border-4 border-background-light dark:border-background-dark z-10"></div>
                    <h4 className="font-bold text-lg dark:text-white">{item.title}</h4>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          {/* Included */}
          <section id="included" className="p-8 rounded-2xl bg-slate-100/50 dark:bg-gray-800/30 border border-slate-100 dark:border-gray-800">
             <h2 className="text-2xl font-bold mb-6 dark:text-white">What's Included</h2>
             <div className="grid md:grid-cols-2 gap-6">
               <ul className="space-y-3">
                 {[
                   '6-8 authentic food tastings',
                   'Professional English-speaking guide',
                   'Unlimited bottled water',
                   'Famous Hanoi Egg Coffee'
                 ].map(item => (
                   <li key={item} className="flex items-center gap-3 dark:text-gray-300"><span className="material-symbols-outlined text-green-500">check_circle</span> {item}</li>
                 ))}
               </ul>
               <ul className="space-y-3">
                 {[
                   'Hotel pickup & drop-off',
                   'Additional beverages',
                   'Gratuities/Tips'
                 ].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-500"><span className="material-symbols-outlined text-primary">cancel</span> {item}</li>
                 ))}
               </ul>
             </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="space-y-8">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-bold dark:text-white">Traveler Reviews</h2>
              <button className="text-primary font-bold text-sm hover:underline">See all 2,150</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map(review => (
                <div key={review.id} className="p-6 rounded-2xl border border-slate-100 dark:border-gray-800 space-y-4 bg-white dark:bg-gray-900">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-cover" style={{ backgroundImage: `url('${review.avatar}')` }}></div>
                    <div>
                      <p className="font-bold text-sm dark:text-white">{review.user}</p>
                      <div className="flex text-amber-500">
                         {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-[14px] fill-current">star</span>)}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm italic leading-relaxed text-slate-600 dark:text-gray-400">{review.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="lg:sticky lg:top-28">
           <div className="rounded-2xl border border-slate-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-xl shadow-primary/5">
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-sm font-bold text-slate-500 dark:text-gray-400 uppercase tracking-widest">Starting from</span>
                <div className="text-right">
                  <span className="text-3xl font-black text-primary">$35</span>
                  <span className="block text-xs text-slate-500 dark:text-gray-400">per person</span>
                </div>
              </div>
              
              <div className="space-y-4">
                 <div className="space-y-1">
                   <label className="text-xs font-bold uppercase text-slate-500 dark:text-gray-400">Date</label>
                   <div className="flex items-center gap-2 w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-800 border border-transparent focus-within:border-primary transition-colors cursor-pointer hover:bg-slate-100 dark:hover:bg-gray-700">
                     <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                     <span className="text-sm font-medium dark:text-white">Select a date</span>
                   </div>
                 </div>

                 <div className="space-y-1">
                    <label className="text-xs font-bold uppercase text-slate-500 dark:text-gray-400">Travelers</label>
                    <div className="flex items-center justify-between w-full p-3 rounded-xl bg-slate-50 dark:bg-gray-800">
                       <span className="text-sm font-medium dark:text-white">2 Persons</span>
                       <div className="flex items-center gap-3">
                         <button className="size-6 rounded-full bg-white dark:bg-black flex items-center justify-center border border-slate-200 dark:border-gray-700 hover:border-primary transition-colors">-</button>
                         <span className="text-sm font-bold dark:text-white">2</span>
                         <button className="size-6 rounded-full bg-white dark:bg-black flex items-center justify-center border border-slate-200 dark:border-gray-700 hover:border-primary transition-colors">+</button>
                       </div>
                    </div>
                 </div>

                 <div className="pt-4 space-y-3 dark:text-gray-300">
                    <div className="flex justify-between text-sm">
                      <span>$35.00 x 2 travelers</span>
                      <span>$70.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Service fee</span>
                      <span>$0.00</span>
                    </div>
                    <div className="h-px bg-slate-100 dark:bg-gray-800"></div>
                    <div className="flex justify-between font-bold text-lg dark:text-white">
                      <span>Total</span>
                      <span>$70.00</span>
                    </div>
                 </div>

                 <button className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
                    Book Now
                 </button>

                 <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">bolt</span> Instant confirmation
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">verified_user</span> Best Price Guarantee
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-gray-400">
                      <span className="material-symbols-outlined text-[14px]">event_busy</span> Free cancellation up to 24h before
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <div className="flex gap-4">
                 <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">local_offer</span>
                 </div>
                 <div>
                    <p className="font-bold text-sm dark:text-white">Vietmate Exclusive</p>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">Get a free digital Hanoi food guide with every booking today!</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
};

export default ExperienceDetail;
