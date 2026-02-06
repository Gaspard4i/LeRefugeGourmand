import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'vegetarian' | 'vegan' | 'new' | 'popular' | 'default';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  vegetarian: 'bg-gradient-to-r from-green-600/30 to-green-700/30 text-green-300 border-green-500/30',
  vegan: 'bg-gradient-to-r from-green-700/30 to-green-800/30 text-green-200 border-green-600/30',
  new: 'bg-gradient-to-r from-champagne-gold/30 to-[#C4A463]/30 text-champagne-gold border-champagne-gold/50',
  popular: 'bg-gradient-to-r from-orange-600/30 to-orange-700/30 text-orange-300 border-orange-500/30',
  default: 'glass text-cream-light border-champagne-gold/30',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  icon,
  children,
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full font-semibold border transition-all',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

