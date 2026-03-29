import {
  Globe,
  Clock,
  HelpCircle,
  TrendingDown,
  UserX,
  Loader,
  Zap,
  FileText,
  Bot,
  TrendingUp,
  Factory,
  Briefcase,
  ShoppingCart,
  Truck,
  PenTool,
  Calculator,
  Star,
  Rss,
  CalendarDays,
  Handshake,
  UserCheck,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

// Centralized icon mapping — replaces all emoji usage
export const iconMap: Record<string, LucideIcon> = {
  // Pain section
  globe: Globe,
  clock: Clock,
  help: HelpCircle,
  'trending-down': TrendingDown,
  'user-x': UserX,
  loader: Loader,

  // Counter section
  zap: Zap,
  'file-text': FileText,
  bot: Bot,
  'trending-up': TrendingUp,

  // Quiz — industries
  factory: Factory,
  briefcase: Briefcase,
  'shopping-cart': ShoppingCart,
  truck: Truck,

  // Quiz — modules
  'pen-tool': PenTool,
  calculator: Calculator,
  star: Star,
  rss: Rss,
  calendar: CalendarDays,

  // About stats
  handshake: Handshake,
  'user-check': UserCheck,

  // Generic
  message: MessageCircle,
};

interface IconBoxProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

// Renders an icon inside a styled container with amber accent
export function IconBox({ name, size = 20, className = '', color = '#E8944C' }: IconBoxProps) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return (
    <div
      className={`flex items-center justify-center rounded-lg ${className}`}
      style={{
        width: size * 2.2,
        height: size * 2.2,
        background: 'rgba(232,148,76,0.08)',
        border: '1px solid rgba(232,148,76,0.12)',
      }}
    >
      <Comp size={size} color={color} strokeWidth={1.5} />
    </div>
  );
}

// Renders a bare icon
export function IconInline({ name, size = 20, color = '#E8944C' }: { name: string; size?: number; color?: string }) {
  const Comp = iconMap[name];
  if (!Comp) return null;
  return <Comp size={size} color={color} strokeWidth={1.5} />;
}
