import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const navLinks = [
  { label: '首頁', href: '/' },
  { label: '服務內容', href: '/services' },
  { label: '方案報價', href: '/pricing' },
  { label: '關於', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center transition-all duration-500 ${
        scrolled
          ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
      style={
        scrolled
          ? undefined
          : {
              background: 'rgba(12, 12, 14, 0.8)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid var(--border-subtle)',
            }
      }
    >
      <div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 no-underline">
          <span className="font-display text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Nika
          </span>
          <span
            className="w-[6px] h-[6px] rounded-full inline-block"
            style={{ background: '#E8944C' }}
          />
          <span className="font-display text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Tech
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className="animated-underline text-[0.8125rem] no-underline transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-body)',
                color: location.pathname === link.href ? '#E8944C' : '#9B978E',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://line.me/ti/p/nikatech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded transition-all duration-300"
            style={{
              background: '#06C755',
            }}
            aria-label="LINE"
          >
            <MessageCircle size={16} strokeWidth={1.5} style={{ color: '#fff' }} />
          </a>
          <Link
            to="/contact"
            className="px-5 py-2 text-[0.8125rem] rounded transition-all duration-300 no-underline"
            style={{
              fontFamily: 'var(--font-body)',
              background: '#E8944C',
              color: '#0C0C0E',
              fontWeight: 500,
            }}
          >
            免費評估
          </Link>
        </div>

        {/* Mobile CTA + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-[#E8944C] text-black text-sm px-3 py-1.5 rounded-lg font-medium no-underline"
          >
            免費評估
          </Link>
        <button
          className="flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[1.5px] transition-transform duration-300"
            style={{
              background: '#F2EFE8',
              transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-opacity duration-300"
            style={{
              background: '#F2EFE8',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-transform duration-300"
            style={{
              background: '#F2EFE8',
              transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
            }}
          />
        </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden absolute top-[72px] left-0 right-0 py-6 px-[clamp(1.5rem,4vw,4rem)] flex flex-col gap-4"
          style={{
            background: 'rgba(12, 12, 14, 0.95)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(242,239,232,0.06)',
          }}
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-base no-underline py-2"
              style={{
                fontFamily: 'var(--font-body)',
                color: location.pathname === link.href ? '#E8944C' : '#9B978E',
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="https://line.me/ti/p/nikatech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-5 py-3 rounded text-sm no-underline flex items-center justify-center gap-2"
              style={{ background: '#06C755', color: '#fff', fontFamily: 'var(--font-body)' }}
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              LINE 聊聊
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-center px-5 py-3 rounded text-sm no-underline"
              style={{ background: '#E8944C', color: '#0C0C0E', fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              免費評估
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
