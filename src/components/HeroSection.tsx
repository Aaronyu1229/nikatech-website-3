import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const headlineWords = ['你顧好生意，', '客人讓系統', '幫你找。'];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax mouse effect on orb + floating elements
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const orb = hero.querySelector('.hero-orb') as HTMLElement;
    const floats = hero.querySelectorAll('.float-parallax') as NodeListOf<HTMLElement>;
    if (!orb) return;

    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

      floats.forEach((el, i) => {
        const speed = (i + 1) * 0.3;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0C0C0E' }}
    >
      {/* Aurora gradient mesh overlay */}
      <div className="absolute inset-0 pointer-events-none aurora-bg" />

      {/* Atmospheric gradient layers */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232,148,76,0.07) 0%, transparent 60%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 70% 60%, rgba(232,148,76,0.04) 0%, transparent 50%)',
      }} />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.015,
        backgroundImage: `
          linear-gradient(rgba(242,239,232,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(242,239,232,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      {/* Center vertical line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px opacity-40" style={{
        background: 'linear-gradient(to bottom, transparent, rgba(242,239,232,0.06) 20%, rgba(242,239,232,0.06) 80%, transparent)',
      }} />

      {/* Animated orb */}
      <div
        className="hero-orb hidden md:block absolute top-[45%] left-[50%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, rgba(232,148,76,0.12), rgba(232,148,76,0.03), rgba(232,148,76,0.08), rgba(232,148,76,0.03), rgba(232,148,76,0.12))',
          filter: 'blur(80px)',
          opacity: 0.5,
          animation: 'orb-rotate 25s linear infinite',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease-out',
        }}
      />
      {/* Inner breathing orb */}
      <div
        className="hidden md:block absolute top-[45%] left-[50%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,148,76,0.3), transparent 70%)',
          animation: 'orb-breathe 5s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating geometric elements */}
      <div className="float-parallax hidden md:block absolute top-[18%] left-[12%] w-2 h-2 rounded-full transition-transform duration-700" style={{ background: '#E8944C', opacity: 0.5, animation: 'float 4s ease-in-out infinite' }} />
      <div className="float-parallax hidden md:block absolute top-[25%] right-[18%] w-12 h-px transition-transform duration-700" style={{ background: 'rgba(242,239,232,0.15)' }} />
      <div className="float-parallax hidden md:block absolute bottom-[25%] left-[20%] w-px h-12 transition-transform duration-700" style={{ background: 'rgba(242,239,232,0.1)' }} />
      <div className="float-parallax hidden md:block absolute bottom-[30%] right-[15%] w-4 h-4 rotate-45 transition-transform duration-700" style={{ border: '1px solid rgba(242,239,232,0.12)', animation: 'float-slow 6s ease-in-out infinite' }} />
      <div className="float-parallax hidden md:block absolute top-[60%] left-[8%] w-3 h-3 rounded-full transition-transform duration-700" style={{ border: '1px solid rgba(232,148,76,0.25)', animation: 'float 5s ease-in-out infinite 2s' }} />
      <div className="float-parallax hidden md:block absolute top-[35%] right-[8%] transition-transform duration-700" style={{ opacity: 0.12 }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ animation: 'float-slow 8s ease-in-out infinite 1s' }}>
          <circle cx="20" cy="20" r="19" stroke="#E8944C" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="float-parallax hidden md:block absolute bottom-[20%] right-[25%] transition-transform duration-700" style={{ opacity: 0.08 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ animation: 'float 7s ease-in-out infinite 3s' }}>
          <path d="M12 2L22 12L12 22L2 12Z" stroke="#F2EFE8" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="float-parallax hidden md:block absolute top-[70%] left-[15%] w-6 h-px transition-transform duration-700" style={{ background: 'rgba(232,148,76,0.2)', animation: 'float-slow 5s ease-in-out infinite 1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] text-center pt-[72px]">
        <span
          data-animate
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.08em] mb-8"
          style={{ fontFamily: 'var(--font-mono)', color: '#E8944C', background: 'rgba(232,148,76,0.08)', border: '1px solid rgba(232,148,76,0.15)', backdropFilter: 'blur(8px)' }}
        >
          AI-POWERED GROWTH ENGINE
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mx-auto" style={{ maxWidth: '18ch' }}>
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className={i === 1 ? 'text-gradient-animated' : 'text-text-primary'}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <p
          data-animate
          data-delay="2"
          className="mt-8 mx-auto leading-relaxed max-w-2xl"
          style={{ color: '#9B978E', fontSize: '1.125rem' }}
        >
          從關鍵字研究到文章上架，全部 AI 自動搞定。不用請人、不用學技術，每個月穩穩幫你從 Google 帶客人進來。
        </p>

        <div data-animate data-delay="3" className="flex flex-wrap justify-center gap-4 mt-10 relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl animate-pulse" />
          <Link
            to="/contact"
            className="btn-shimmer group inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold tracking-[0.03em] no-underline transition-all duration-300 hover:-translate-y-px hover:shadow-lg relative z-10"
            style={{ fontFamily: 'var(--font-body)', background: '#E8944C', color: '#fff', boxShadow: '0 4px 30px rgba(232,148,76,0.35), 0 0 60px rgba(232,148,76,0.15)' }}
          >
            免費幫你的網站做健檢
            <ArrowRight size={18} className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded-xl text-base font-medium no-underline transition-all duration-300 hover:-translate-y-px hover:bg-white/5 border border-white/20 relative z-10"
            style={{ fontFamily: 'var(--font-body)', color: '#F2EFE8', background: 'transparent' }}
          >
            先看看方案內容
          </Link>
        </div>

        <p
          data-animate
          data-delay="4"
          className="mt-6 text-xs"
          style={{ color: '#5E5B55', fontFamily: 'var(--font-mono)' }}
        >
          台灣已有超過 10 組品牌正在使用
        </p>

        {/* Hero Visual */}
        <div className="relative mt-16 md:mt-24 max-w-4xl mx-auto" data-animate data-delay="5">
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-accent/5">
            {/* Gradient overlay on top */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-transparent z-10" />
            {/* Reflection gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,148,76,0.1)] via-transparent to-transparent z-10" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="NikaTech 數據分析儀表板"
              className="w-full h-auto opacity-80"
              loading="lazy"
            />
          </div>
          {/* Glow effect under image */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[rgba(232,148,76,0.2)] blur-3xl rounded-full" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
        background: 'linear-gradient(to top, #0C0C0E, transparent)',
      }} />
    </section>
  );
}
