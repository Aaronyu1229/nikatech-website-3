import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-16" style={{ background: '#141416', borderTop: '1px solid rgba(242,239,232,0.06)' }}>
      <div className="max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,4rem)]">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo + tagline */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-display text-xl" style={{ color: '#F2EFE8' }}>Nika</span>
              <span className="w-[6px] h-[6px] rounded-full" style={{ background: '#E8944C' }} />
              <span className="font-display text-xl" style={{ color: '#F2EFE8' }}>Tech</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#9B978E' }}>
              讓你不用再一個人扛所有行銷的事。
            </p>
          </div>

          {/* Links + LINE */}
          <div className="flex items-center gap-6 flex-wrap">
            <Link to="/" className="text-sm no-underline transition-colors duration-300" style={{ color: '#9B978E' }}>
              首頁
            </Link>
            <Link to="/about" className="text-sm no-underline transition-colors duration-300" style={{ color: '#9B978E' }}>
              關於
            </Link>
            <Link to="/quiz" className="text-sm no-underline transition-colors duration-300" style={{ color: '#9B978E' }}>
              免費測試
            </Link>
            <a
              href="https://line.me/ti/p/nikatech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm no-underline transition-colors duration-300"
              style={{ color: '#06C755' }}
            >
              <MessageCircle size={14} strokeWidth={1.5} />
              LINE
            </a>
          </div>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(242,239,232,0.06)' }}>
          <p className="text-xs" style={{ color: '#5E5B55' }}>
            &copy; 2026 NikaTech 尼卡科技
          </p>
        </div>
      </div>
    </footer>
  );
}
