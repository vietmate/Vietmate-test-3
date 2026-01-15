import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Experience } from '../types';

export const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-primary font-bold' : 'text-slate-600 dark:text-slate-300 font-semibold hover:text-primary';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined !text-xl">explore</span>
              </div>
              <h1 className="text-xl font-black tracking-tight text-primary uppercase">Vietmate</h1>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link to="/experiences" className={`text-sm transition-colors ${isActive('/experiences')}`}>Tours</Link>
              <Link to="/experiences" className={`text-sm transition-colors ${isActive('/transport')}`}>Transport</Link>
              <Link to="/about" className={`text-sm transition-colors ${isActive('/about')}`}>About</Link>
              <Link to="/help" className={`text-sm transition-colors ${isActive('/help')}`}>Help</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
             <div className="hidden xl:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 border border-transparent focus-within:border-primary/30 transition-all">
                <span className="material-symbols-outlined text-slate-400 !text-lg">search</span>
                <input className="bg-transparent border-none focus:ring-0 text-sm w-48 placeholder:text-slate-500" placeholder="Search experiences..." type="text"/>
            </div>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-2 hidden md:block"></div>
            <button className="hidden md:block text-sm font-bold hover:text-primary px-3 py-2 dark:text-slate-300">Log In</button>
            <button className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-red-700 transition-all shadow-lg shadow-primary/20 active:scale-95">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined !text-sm">explore</span>
              </div>
              <h1 className="text-lg font-black tracking-tight text-primary uppercase">Vietmate</h1>
            </div>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed">Vietmate is Vietnam's leading curated travel marketplace, connecting global explorers with authentic local experiences since 2018.</p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:text-primary transition-colors text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined !text-xl">language</span></a>
              <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:text-primary transition-colors text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined !text-xl">share</span></a>
              <a href="#" className="size-10 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center hover:text-primary transition-colors text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined !text-xl">public</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-slate-200">Explore</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/experiences" className="hover:text-primary transition-colors">All Tours</Link></li>
              <li><Link to="/experiences" className="hover:text-primary transition-colors">Car Rental</Link></li>
              <li><Link to="/experiences" className="hover:text-primary transition-colors">Food Guides</Link></li>
              <li><Link to="/experiences" className="hover:text-primary transition-colors">Activities</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-slate-200">Partner</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Merchant Login</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Partner with Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Influencer Hub</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-slate-200">Support</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Safety Center</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2024 Vietmate Travel Technology Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <img alt="Visa" className="opacity-30 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxueoJzk2IsUzmDZvEis5ugu065L6FdzNNDWW8Vbu3bJYg8W3UmmAj_99Y3vqLxpNErUVLn-dPj4lwgYrWVDWcmZrXaJnanM4lkGabQUVo56g34577LglcAhq6ZEaW-s-x7Z9IfoCtnoM_vUJ3SZxu-J4dZtUHrYMWwn4UjqqP7Hh_v4hTnnlhOj6TM-f-t5nP4mr36RNVqa4Z7_o31SNO3WohV-VQfO0NildCR5uFjBGxlisgFj2ppGAa5kKwD0figAwbUe22qm0"/>
            <img alt="Mastercard" className="opacity-30 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8D__PIuIgzYGEM5q1uzgl9MQ1YATKhF9ZZebzTuu81PIf56ugK9T8k1achbGCU7rAQKqB2lNgJ6yM-RawQp-_GphhIeLBNY0z_JuvCUu6EfzVeNRNRGUWPNb9wKgE9GqCCxBRaVe2R7kOpSBA38VVB9SKidGOQAoW0CnEALsECeACX-5OMVWovkq3r8l75-GHIq6IlmXUlc1y9tf-LQgsdqqCjRHxRb6TC8-ZGynecdT7BkqzvD08ryHzP5fUwoE_8pW5nO8jn5c"/>
            <img alt="PayPal" className="opacity-30 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAimuh04KOAVOP90Lo2-8W-VNDkfq_j6eN-9R3c8wonJUXmTz9M6S9gsibByuICuKo2zPnWqu958W1MqBO4T72hqoowg-BgT10KJwBKCRwt6VozBnBWUcitLk3JYElyOrRwYnzH-c2Zv14UZfxMY9P4Te50vjVxJf8IVln9UgAIeVcAnYcFJ3C9FI69js4mHbvqsQO09FSq0H7DwV6eezb5sQPjpgJsi6D7Zct8ABXXs-RixcQCnDbf-45aMWnkCuElSgTK9X3EaM"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const ExperienceCard: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <Link to={`/experience/${experience.id}`} className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800 flex flex-col h-full hover:scale-[1.02] duration-300">
      <div className="relative h-64 overflow-hidden">
        {experience.badges && experience.badges.length > 0 && (
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur rounded-lg px-3 py-1 text-xs font-black uppercase text-primary shadow-sm">
            {experience.badges[0]}
          </div>
        )}
        <div 
          className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
          style={{ backgroundImage: `url('${experience.image}')` }}
        ></div>
        <div className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors">
            <span className="material-symbols-outlined text-xl">favorite</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 text-xs font-bold text-slate-500 mb-2">
            <span className="material-symbols-outlined !text-sm">location_on</span>
            {experience.location}
        </div>
        <div className="flex items-center gap-1 text-amber-500 mb-2">
          {[...Array(5)].map((_, i) => (
             <span key={i} className={`material-symbols-outlined !text-sm ${i < Math.floor(experience.rating) ? 'fill-current' : ''}`}>star</span>
          ))}
          <span className="text-xs font-bold text-slate-500 ml-1">{experience.rating} ({experience.reviewsCount >= 1000 ? (experience.reviewsCount/1000).toFixed(1) + 'k' : experience.reviewsCount} reviews)</span>
        </div>
        <h3 className="text-xl font-extrabold mb-2 line-clamp-2 group-hover:text-primary transition-colors dark:text-slate-100">{experience.title}</h3>
        {experience.description && <p className="text-slate-500 text-sm mb-6 line-clamp-2">{experience.description}</p>}
        
        <div className="mt-auto flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-4">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase block">From</span>
            <span className="text-2xl font-black text-primary">${experience.price.toFixed(2)}</span>
          </div>
          <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-primary/10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">Book Now</button>
        </div>
      </div>
    </Link>
  );
};
