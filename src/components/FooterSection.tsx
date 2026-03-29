import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const footerLinks = [
  { label: '首頁', href: '/' },
  { label: '服務內容', href: '/services' },
  { label: '方案報價', href: '/pricing' },
  { label: '關於', href: '/about' },
  { label: '聯絡我們', href: '/contact' },
];

export default function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16" style={{ background: '#141416', borderTop: '1px solid rgba(242,239,232,0.06)' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-display text-xl" style={{ color: '#F2EFE8' }}>Nika</span>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: '#E8944C' }} />
              <span className="font-display text-xl" style={{ color: '#F2EFE8' }}>Tech</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#5E5B55' }}>
              讓你不用再一個人扛行銷的事。
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap">
            {footerLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="animated-underline text-sm no-underline transition-colors duration-300 hover:text-[#F2EFE8]"
                style={{ color: '#9B978E' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* LINE button */}
          <a
            href="https://line.me/ti/p/nikatech"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
            style={{ background: '#06C755' }}
            aria-label="LINE"
          >
            <MessageCircle size={18} strokeWidth={1.5} style={{ color: '#fff' }} />
          </a>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(242,239,232,0.06)' }}>
          <p className="text-xs" style={{ color: '#5E5B55' }}>
            &copy; 2026 NikaTech 尼卡科技
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
