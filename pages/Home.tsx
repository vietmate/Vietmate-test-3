import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../mockData';
import { ExperienceCard } from '../components/Shared';

const Home: React.FC = () => {
  const featuredExperiences = experiences.slice(0, 3);
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[640px] flex items-center justify-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="w-full h-full bg-cover bg-center animate-subtle-zoom" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRLjqAb1vPHwp_-KI-JUeXkkFGFNP8hNNU8UfLN8jDC0C8dUImOge6vZt-rIS9P2aLQv01zeyl8_ViZYEzHMe3rGua0-3VtPwID9TugfcJBvU3i9KuIIr8m5Em1cj7beP4-hP538JSKTOf3DHL1_X3vN_8ZVG54E7oFrCLLR3iCSAVgcGqtkMvwEb42MH3FCNc13vTxuqK81I2mUPYlU7Dn49fZDSRPykcucnvj6ujTV20WVWHxSOAGawBZKc8BGw4MfxH1lzw3eU')" }}></div>
        </div>
        <div className="relative z-20 w-full max-w-4xl text-center">
          <h2 className="text-white text-5xl md:text-7xl font-black mb-6 drop-shadow-lg tracking-tight">
            Discover the Soul <br/> of Vietnam
          </h2>
          <p className="text-white/90 text-lg md:text-xl font-medium mb-10 drop-shadow-md max-w-2xl mx-auto">
            Hand-picked local experiences and hidden gems across the dragon land.
          </p>
          
          {/* Centered Search Bar */}
          <div className="bg-white dark:bg-background-dark p-2 md:p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Destination</span>
                <input className="p-0 border-none focus:ring-0 bg-transparent text-sm font-semibold w-full placeholder:text-slate-300 dark:text-white" placeholder="Where to?" type="text"/>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary">calendar_today</span>
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Dates</span>
                <input className="p-0 border-none focus:ring-0 bg-transparent text-sm font-semibold w-full placeholder:text-slate-300 dark:text-white" placeholder="When?" type="text"/>
              </div>
            </div>
             <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full">
              <span className="material-symbols-outlined text-primary">confirmation_number</span>
              <div className="flex flex-col items-start w-full">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none mb-1">Activity</span>
                <input className="p-0 border-none focus:ring-0 bg-transparent text-sm font-semibold w-full placeholder:text-slate-300 dark:text-white" placeholder="What to do?" type="text"/>
              </div>
            </div>
            <button className="w-full md:w-auto bg-primary text-white p-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all font-bold shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">search</span>
              <span className="md:hidden lg:inline">Find Experiences</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: 'Tours', icon: 'map', color: 'text-primary', bg: 'bg-red-50 dark:bg-red-950/30' },
            { name: 'Transport', icon: 'directions_car', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/30' },
            { name: 'Food', icon: 'restaurant', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-950/30' },
            { name: 'Attractions', icon: 'local_activity', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/30' },
          ].map((cat) => (
            <Link to="/experiences" key={cat.name} className="group cursor-pointer bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary/20 transition-all text-center">
              <div className={`size-14 ${cat.bg} ${cat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined !text-3xl">{cat.icon}</span>
              </div>
              <h3 className="font-bold text-lg dark:text-white">{cat.name}</h3>
              <p className="text-xs text-slate-500 mt-1">Explore {cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight mb-2 dark:text-white">Featured Experiences</h2>
            <p className="text-slate-500 font-medium">Top-rated activities recommended by travelers</p>
          </div>
          <Link to="/experiences" className="hidden md:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            View all <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map(exp => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-black tracking-tight mb-12 text-center dark:text-white">Explore Destinations</h2>
        <div className="flex overflow-x-auto gap-8 pb-10 hide-scrollbar justify-start md:justify-center">
          {[
            { name: 'Hanoi', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmHsLbGGxJMrpGLPSj5OoF9ufuswlYwMjWIEptQAMLFaJMN8fb555xr1vn5OdGQ5MnoS_wWwVawDvyniSlt0zgO-xwpXhK3HVDLWoynU6E4ZYlXt9U8AmSE23gXJejqtv2QosX5PkqAmuQ15AsWcxadIWTIb48d4ttJ7AnN9102sMS2MJVF_V6lG4CJKDCTQ34R2JqMn6HxapyTCgSBv5BuED0k49CPqxYsBxGRN_KxkAQniFNtLH__4HxrXheG2p96f-B71NvMIM' },
            { name: 'Da Nang', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfL7YDaoT6wSBksNXSKrqscji07Bgy-Ugp9bLVd5aeXDELJvnb6Ox_s1b6483LXaE4ZDHDhoz9L4H9VTHdiWglhjiZM6Y1DWPKyQtHy0U8EraslHY7LQglg4fJU0_pEq_C0z_SAfhFtB2jpOIsbiPRZh_gZdGLz6F2ScVZYRvL6m81MElNacHxGp57YmndG2Kd6j-TjykP-BJiIOtBKSqt5vUn0nbPVjblmRYbwR6NCtqTRsYlFhfkS6f_P3lKVunUhnnbLUZPHVA' },
            { name: 'HCMC', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvDRx6kDVpJO1m56IP1lrkA5eLAPEKlsra3hdhevuFYhmjmk7_Xcb3E0x4CV6viPqpV9GchVAveqtRsw_Dg8coDNA0q9UWl4Mw4iKSv0Fz3FYPrC7e-uJ3dDXF2sWVpUB5hZnVfD33kEImKGFCyn0Z9k65bkDN8JRhtSET6HJHsMOXYxJA2YVzVVZkU7d6JkQkjrYgRfYTl2gyQh7RsCm3pNsmZLIINnSHklo76fWnmlIwxKuLFet8R_KT9J7Lhc3Fh7OCXY3KjF0' },
            { name: 'Hoi An', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAvTgwiy3G5VxMdHr0PkSeZEwdQysZ2goyhMV7frqftJjAhWZJMEMRm6rinMHDYf_Yer5Iv80JH8OvnOLlZS5bj7vMt1flINF9wUq1eRZ7-7xskffcaIh9WbnB0Jg5OXaCiof3pIufbfCdGbpayMfgUDnZReKDexyrjXMPwkbVfFPktHBkQNjWNoLi5f2tOVmFmx2CfXa1gGqvRHnhoTUIDwzLiTOCV1ctacfh132DtTg5L_aEsoAfoOQBlH-lS06lqfIPj9rGyPQ' },
            { name: 'Sapa', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS8vBmvoyxqt48iqdE0xOOPMLZN8nVCGJaJDAwXcvDPgK22Rd1p1TyfFJm5hbTY7NL8Cvrcm1ABdwEqkcWCzB3OISRAvG7iU3QnffBOWjD5lMFa8Yuq9ewBPF8lPZLAVoqPQaEJueElRl4f2g5R21y4P5TNJLInUshudd-2WY0OIiNQuKwpoLn7s8BVFZFp01zLSfa1wj6BvuhmSFip8-5T_qWa55j_MvAr0_oFgCEOe1ayEBS4oxtQ1y48mWIymY8TBEn5NAFnnw' },
          ].map((dest) => (
             <Link to="/experiences" key={dest.name} className="flex-shrink-0 flex flex-col items-center gap-4 group cursor-pointer">
              <div className="size-32 md:size-44 rounded-full border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden group-hover:border-primary transition-all">
                <div className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{ backgroundImage: `url('${dest.img}')` }}></div>
              </div>
              <span className="font-bold text-lg group-hover:text-primary transition-colors dark:text-white">{dest.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-16 text-center text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Get $10 Off Your First Trip</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">Subscribe to our newsletter and join 50,000+ travelers getting weekly local tips and exclusive deals.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder:text-slate-500 focus:ring-primary focus:border-primary backdrop-blur" placeholder="Enter your email address" type="email"/>
            <button className="bg-primary hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-xl shadow-primary/20">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
