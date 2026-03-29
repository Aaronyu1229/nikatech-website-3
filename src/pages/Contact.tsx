import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  MessageCircle,
  Clock,
  FileBarChart,
  Check,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

const LINE_URL = 'https://line.me/ti/p/nikatech';

const industryOptions = ['製造業', '專業服務', '電商零售', '物流貿易', '其他'];

const problemOptions = [
  '沒有自然流量',
  '網站太舊需要更新',
  '不知道怎麼做 SEO',
  '想了解 GEO 優化',
  '需要品牌官網',
  '其他',
];

const reportIncludes = [
  '網站 SEO 現狀分析',
  '關鍵字機會評估',
  '競爭對手比較',
  '具體改善建議',
  '預估成效與時程',
];

const inputClass =
  'bg-nika-bg-tertiary border border-white/[0.06] rounded-lg px-4 py-3 text-nika-text w-full focus:border-nika-accent focus:outline-none transition-colors font-body text-sm';

const labelClass = 'text-nika-text-secondary text-sm font-mono uppercase tracking-wider mb-2 block';

export default function Contact() {
  const [hasWebsite, setHasWebsite] = useState<string>('');
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleProblem = (p: string) => {
    setSelectedProblems((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.alert('已收到！我們會在 48 小時內回覆你。');
  };

  return (
    <div className="min-h-screen bg-nika-bg text-nika-text">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)] text-center">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.2em] text-nika-text-tertiary border border-white/[0.06] rounded-full px-4 py-1.5 inline-block"
            >
              CONTACT
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl mt-6"
            >
              免費評估你的網站
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-nika-text-secondary text-lg max-w-2xl mx-auto mt-6"
            >
              填寫表單，我們會在 48 小時內寄送一份網站健檢報告給你。有數據基礎，再決定要不要合作。
            </motion.p>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="pb-[var(--section-gap)]">
          <div className="max-w-[var(--container-max)] mx-auto px-[var(--container-padding)]">
            <div className="grid md:grid-cols-5 gap-[var(--grid-gap)]">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-3"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-nika-bg-secondary rounded-2xl border border-white/[0.06] p-8 space-y-6"
                >
                  {/* Name */}
                  <div>
                    <label className={labelClass}>姓名 *</label>
                    <input
                      type="text"
                      required
                      placeholder="你的姓名"
                      className={inputClass}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className={labelClass}>公司 / 品牌名稱 *</label>
                    <input
                      type="text"
                      required
                      placeholder="公司或品牌名稱"
                      className={inputClass}
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className={labelClass}>產業類型</label>
                    <select className={inputClass} defaultValue="">
                      <option value="" disabled>
                        請選擇
                      </option>
                      {industryOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Has website */}
                  <div>
                    <label className={labelClass}>目前有網站嗎？</label>
                    <div className="flex gap-6">
                      {['有', '沒有'].map((v) => (
                        <label key={v} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hasWebsite"
                            value={v}
                            checked={hasWebsite === v}
                            onChange={() => setHasWebsite(v)}
                            className="accent-nika-accent"
                          />
                          <span className="text-sm text-nika-text-secondary">{v}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Website URL (conditional) */}
                  {hasWebsite === '有' && (
                    <div>
                      <label className={labelClass}>網站網址</label>
                      <input
                        type="url"
                        placeholder="https://..."
                        className={inputClass}
                      />
                    </div>
                  )}

                  {/* Problems */}
                  <div>
                    <label className={labelClass}>最想解決的問題</label>
                    <div className="grid grid-cols-2 gap-3">
                      {problemOptions.map((p) => (
                        <label
                          key={p}
                          className={`flex items-center gap-2 cursor-pointer p-3 rounded-lg border transition-colors ${
                            selectedProblems.includes(p)
                              ? 'border-nika-accent bg-nika-accent-muted'
                              : 'border-white/[0.06] bg-nika-bg-tertiary'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedProblems.includes(p)}
                            onChange={() => toggleProblem(p)}
                            className="sr-only"
                          />
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                              selectedProblems.includes(p)
                                ? 'border-nika-accent bg-nika-accent'
                                : 'border-white/[0.12]'
                            }`}
                          >
                            {selectedProblems.includes(p) && (
                              <Check size={10} strokeWidth={3} className="text-nika-bg" />
                            )}
                          </div>
                          <span className="text-sm text-nika-text-secondary">{p}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* LINE ID or phone */}
                  <div>
                    <label className={labelClass}>LINE ID 或電話 *</label>
                    <input
                      type="text"
                      required
                      placeholder="方便聯繫你的方式"
                      className={inputClass}
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className={labelClass}>備註</label>
                    <textarea
                      placeholder="其他想告訴我們的事..."
                      rows={4}
                      className={inputClass + ' resize-none'}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 btn-shimmer"
                    style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
                  >
                    <Send size={16} strokeWidth={2} />
                    送出評估申請
                  </button>
                </form>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="md:col-span-2 space-y-6"
              >
                {/* LINE Contact */}
                <div className="bg-nika-bg-secondary rounded-2xl border border-white/[0.06] p-6">
                  <p className="text-sm text-nika-text-secondary mb-4">或直接加 LINE 聊聊</p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl font-semibold text-white no-underline transition-all duration-300 hover:opacity-90"
                    style={{ background: '#06C755' }}
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    加入 LINE
                  </a>
                </div>

                {/* Response Time */}
                <div className="bg-nika-bg-secondary rounded-2xl border border-white/[0.06] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock size={20} strokeWidth={1.5} className="text-nika-accent" />
                    <h3 className="text-base font-medium">回覆時間</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-nika-text-secondary">表單：48 小時內</li>
                    <li className="text-sm text-nika-text-secondary">LINE：營業時間內即時回覆</li>
                  </ul>
                </div>

                {/* What you'll get */}
                <div className="bg-nika-bg-secondary rounded-2xl border border-white/[0.06] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileBarChart size={20} strokeWidth={1.5} className="text-nika-accent" />
                    <h3 className="text-base font-medium">免費評估報告包含</h3>
                  </div>
                  <ul className="space-y-3">
                    {reportIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check size={16} strokeWidth={2} className="text-nika-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-nika-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
}
