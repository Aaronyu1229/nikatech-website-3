import { Link } from 'react-router-dom';
import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

/* ── Branded Animated SVG Illustration ── */
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-16 md:mt-24">
      <svg
        viewBox="0 0 800 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-label="NikaTech AI 自動行銷系統示意圖"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="hero-card-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1C1C20" />
            <stop offset="100%" stopColor="#141416" />
          </linearGradient>
          <linearGradient id="hero-accent-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8944C" stopOpacity="0" />
            <stop offset="50%" stopColor="#E8944C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E8944C" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-bar-fill" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#E8944C" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F0A86A" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hero-line-chart" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E8944C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8944C" stopOpacity="1" />
          </linearGradient>
          <filter id="hero-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main dashboard card */}
        <rect x="100" y="30" width="600" height="340" rx="16" fill="url(#hero-card-bg)" stroke="rgba(242,239,232,0.06)" strokeWidth="1" />

        {/* Header bar */}
        <rect x="100" y="30" width="600" height="50" rx="16" fill="#1C1C20" />
        <rect x="100" y="64" width="600" height="16" fill="#1C1C20" />
        {/* Window dots */}
        <circle cx="130" cy="55" r="5" fill="#E24B4A" opacity="0.6" />
        <circle cx="148" cy="55" r="5" fill="#E8944C" opacity="0.6" />
        <circle cx="166" cy="55" r="5" fill="#5DCAA5" opacity="0.6" />
        {/* Title text placeholder */}
        <rect x="200" y="48" width="120" height="14" rx="4" fill="rgba(242,239,232,0.08)" />

        {/* ── Left panel: Traffic growth chart ── */}
        <rect x="130" y="100" width="240" height="140" rx="10" fill="rgba(242,239,232,0.02)" stroke="rgba(242,239,232,0.04)" strokeWidth="0.5" />
        <text x="145" y="122" fill="#9B978E" fontSize="10" fontFamily="var(--font-mono)">自然流量成長</text>

        {/* Bar chart with growth animation */}
        {[
          { x: 155, h: 30 },
          { x: 185, h: 45 },
          { x: 215, h: 38 },
          { x: 245, h: 58 },
          { x: 275, h: 52 },
          { x: 305, h: 72 },
          { x: 335, h: 85 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={230 - bar.h}
            width="18"
            height={bar.h}
            rx="3"
            fill="url(#hero-bar-fill)"
            opacity="0.8"
          >
            <animate
              attributeName="height"
              from="0"
              to={bar.h}
              dur="1.2s"
              begin={`${0.5 + i * 0.1}s`}
              fill="freeze"
            />
            <animate
              attributeName="y"
              from="230"
              to={230 - bar.h}
              dur="1.2s"
              begin={`${0.5 + i * 0.1}s`}
              fill="freeze"
            />
          </rect>
        ))}
        {/* Growth arrow */}
        <path d="M150 215 L350 145" stroke="#5DCAA5" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5">
          <animate attributeName="stroke-dashoffset" from="28" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <text x="310" y="140" fill="#5DCAA5" fontSize="11" fontWeight="600" fontFamily="var(--font-mono)">+147%</text>

        {/* ── Right panel: AI keyword analysis ── */}
        <rect x="400" y="100" width="270" height="140" rx="10" fill="rgba(242,239,232,0.02)" stroke="rgba(242,239,232,0.04)" strokeWidth="0.5" />
        <text x="415" y="122" fill="#9B978E" fontSize="10" fontFamily="var(--font-mono)">AI 關鍵字分析</text>

        {/* Keyword rows */}
        {[
          { y: 138, w: 180, label: '台北花店推薦', score: '92' },
          { y: 160, w: 145, label: '婚禮花藝設計', score: '87' },
          { y: 182, w: 120, label: '開幕送花', score: '78' },
          { y: 204, w: 95, label: '花束訂購', score: '65' },
        ].map((row, i) => (
          <g key={i}>
            <rect x="415" y={row.y} width={row.w} height="14" rx="3" fill="rgba(232,148,76,0.12)">
              <animate attributeName="width" from="0" to={row.w} dur="0.8s" begin={`${0.8 + i * 0.15}s`} fill="freeze" />
            </rect>
            <text x="420" y={row.y + 11} fill="#F2EFE8" fontSize="9" fontFamily="var(--font-body)" opacity="0.7">{row.label}</text>
            <text x={640} y={row.y + 11} fill="#E8944C" fontSize="9" fontFamily="var(--font-mono)" textAnchor="end">{row.score}</text>
          </g>
        ))}

        {/* ── Bottom panel: Auto-publishing status ── */}
        <rect x="130" y="260" width="540" height="90" rx="10" fill="rgba(242,239,232,0.02)" stroke="rgba(242,239,232,0.04)" strokeWidth="0.5" />
        <text x="145" y="282" fill="#9B978E" fontSize="10" fontFamily="var(--font-mono)">自動發布狀態</text>

        {/* Status items */}
        {[
          { x: 145, icon: '✓', label: '關鍵字研究', color: '#5DCAA5' },
          { x: 280, icon: '✓', label: 'SEO 文章產出', color: '#5DCAA5' },
          { x: 415, icon: '◎', label: '排程上架中', color: '#E8944C' },
          { x: 545, icon: '○', label: '成效追蹤', color: '#5E5B55' },
        ].map((item, i) => (
          <g key={i}>
            <circle cx={item.x + 8} cy={310} r="8" fill="rgba(242,239,232,0.04)" stroke={item.color} strokeWidth="1" opacity="0.6" />
            <text x={item.x + 8} y={313} fill={item.color} fontSize="8" textAnchor="middle" fontFamily="var(--font-mono)">{item.icon}</text>
            <text x={item.x + 22} y={313} fill="#9B978E" fontSize="9" fontFamily="var(--font-body)">{item.label}</text>
            {i < 3 && (
              <line x1={item.x + 100} y1={310} x2={item.x + 120} y2={310} stroke="rgba(242,239,232,0.08)" strokeWidth="1" strokeDasharray="3 2" />
            )}
          </g>
        ))}

        {/* Scanning line effect */}
        <line x1="100" y1="0" x2="700" y2="0" stroke="url(#hero-accent-line)" strokeWidth="1.5">
          <animate attributeName="y1" values="80;370;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="80;370;80" dur="4s" repeatCount="indefinite" />
        </line>

        {/* Pulse dot on active item */}
        <circle cx="423" cy="310" r="3" fill="#E8944C" filter="url(#hero-glow)">
          <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Glow effect under illustration */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 rounded-full" style={{ background: 'rgba(232,148,76,0.2)', filter: 'blur(40px)' }} />
      {/* Top reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(232,148,76,0.05)] via-transparent to-transparent rounded-2xl pointer-events-none" />
      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0C0C0E] to-transparent pointer-events-none" />
    </div>
  );
}

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const headlineWords = ['廣告越來越貴，', '客人可以不花錢', '就來。'];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  // #16: Parallax with RAF throttle
  const rafId = useRef<number>(0);
  const handleMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const hero = heroRef.current;
      if (!hero) return;
      const orb = hero.querySelector('.hero-orb') as HTMLElement;
      const floats = hero.querySelectorAll('.float-parallax') as NodeListOf<HTMLElement>;
      if (!orb) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

      floats.forEach((el, i) => {
        const speed = (i + 1) * 0.4;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [handleMove]);

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

      {/* #5: Grid pattern — slightly more visible */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.035,
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

      {/* #3: Enhanced animated orb — higher opacity */}
      <div
        className="hero-orb hidden md:block absolute top-[45%] left-[50%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, rgba(232,148,76,0.18), rgba(232,148,76,0.04), rgba(232,148,76,0.12), rgba(232,148,76,0.04), rgba(232,148,76,0.18))',
          filter: 'blur(80px)',
          opacity: 0.65,
          animation: 'orb-rotate 25s linear infinite',
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease-out',
        }}
      />
      {/* Inner breathing orb — enhanced */}
      <div
        className="hidden md:block absolute top-[45%] left-[50%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(232,148,76,0.35), transparent 70%)',
          animation: 'orb-breathe 5s ease-in-out infinite',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* #2 & #15: Simplified floating elements (5 total, 2 visible on mobile) */}
      {/* Mobile + Desktop: amber dot */}
      <div className="float-parallax absolute top-[18%] left-[12%] w-2 h-2 rounded-full transition-transform duration-700" style={{ background: '#E8944C', opacity: 0.5, animation: 'float 4s ease-in-out infinite' }} />
      {/* Mobile + Desktop: small ring */}
      <div className="float-parallax absolute top-[25%] right-[10%] w-3 h-3 rounded-full transition-transform duration-700" style={{ border: '1px solid rgba(232,148,76,0.3)', animation: 'float 5s ease-in-out infinite 2s' }} />
      {/* Desktop only */}
      <div className="float-parallax hidden md:block absolute bottom-[30%] right-[15%] w-4 h-4 rotate-45 transition-transform duration-700" style={{ border: '1px solid rgba(242,239,232,0.15)', animation: 'float-slow 6s ease-in-out infinite' }} />
      <div className="float-parallax hidden md:block absolute top-[35%] right-[8%] transition-transform duration-700" style={{ opacity: 0.15 }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ animation: 'float-slow 8s ease-in-out infinite 1s' }}>
          <circle cx="20" cy="20" r="19" stroke="#E8944C" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      </div>
      <div className="float-parallax hidden md:block absolute bottom-[25%] left-[20%] w-px h-12 transition-transform duration-700" style={{ background: 'rgba(242,239,232,0.12)' }} />

      {/* Content — #13: Unified with Framer Motion */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] text-center pt-[72px]">
        {/* #4: Badge in Chinese */}
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.08em] mb-8"
          style={{ fontFamily: 'var(--font-mono)', color: '#E8944C', background: 'rgba(232,148,76,0.08)', border: '1px solid rgba(232,148,76,0.15)', backdropFilter: 'blur(8px)' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          AI 自動集客系統
        </motion.span>

        {/* #6: Headline with pain point opening */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mx-auto" style={{ maxWidth: '18ch' }}>
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className={i === 0 ? 'text-text-primary' : i === 1 ? 'text-gradient-animated' : 'text-text-primary'}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* #7: Simplified subtitle */}
        <motion.p
          className="mt-8 mx-auto leading-relaxed max-w-xl"
          style={{ color: '#9B978E', fontSize: '1.125rem' }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          AI 自動寫文章、自動做 SEO，讓 Google 每個月免費幫你帶客人進來。
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-10 relative"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.9}
        >
          {/* #12: Fixed pulse glow — explicit hex, no CSS var */}
          <div className="absolute -inset-4 rounded-full blur-2xl animate-pulse" style={{ background: 'rgba(232,148,76,0.1)' }} />
          {/* #9: Shortened main CTA */}
          <Link
            to="/contact"
            className="btn-shimmer group inline-flex items-center gap-2 px-10 py-5 rounded-xl text-lg font-bold tracking-[0.03em] no-underline transition-all duration-300 hover:-translate-y-px hover:shadow-lg relative z-10"
            style={{ fontFamily: 'var(--font-body)', background: '#E8944C', color: '#0f0e0d', boxShadow: '0 4px 30px rgba(232,148,76,0.35), 0 0 60px rgba(232,148,76,0.15)' }}
          >
            免費幫我評估
            <ArrowRight size={18} className="inline-block transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          {/* #10: Secondary CTA with brand-colored border */}
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 px-8 py-[0.875rem] rounded-xl text-base font-medium no-underline transition-all duration-300 hover:-translate-y-px relative z-10"
            style={{
              fontFamily: 'var(--font-body)',
              color: '#E8944C',
              background: 'transparent',
              border: '1px solid rgba(232,148,76,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(232,148,76,0.08)';
              e.currentTarget.style.borderColor = 'rgba(232,148,76,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(232,148,76,0.35)';
            }}
          >
            看看怎麼做到的
          </Link>
        </motion.div>

        {/* #8: Stronger social proof */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-3"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.1}
        >
          <div className="flex items-center gap-6 text-xs" style={{ color: '#5E5B55', fontFamily: 'var(--font-mono)' }}>
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: '#5DCAA5' }} />
              10+ 台灣品牌使用中
            </span>
            <span className="w-px h-3" style={{ background: 'rgba(242,239,232,0.1)' }} />
            <span>平均 3-6 個月見效</span>
            <span className="w-px h-3 hidden sm:block" style={{ background: 'rgba(242,239,232,0.1)' }} />
            <span className="hidden sm:inline">不綁約</span>
          </div>
        </motion.div>

        {/* #1 & #14: Branded animated SVG illustration instead of Unsplash */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.3}
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* #11: Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs" style={{ color: '#5E5B55', fontFamily: 'var(--font-mono)' }}>
          了解更多
        </span>
        <ChevronDown size={16} className="text-[#5E5B55]" style={{ animation: 'float 2s ease-in-out infinite' }} />
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{
        background: 'linear-gradient(to top, #0C0C0E, transparent)',
      }} />
    </section>
  );
}
