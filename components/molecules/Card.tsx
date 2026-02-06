import React from 'react';
import { cn } from '@/lib/utils';

export type CardVariant = 'default' | 'glass' | 'gradient-border' | 'hover-lift';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-slate-night/50 border-2 border-champagne-gold/30',
  glass: 'glass',
  'gradient-border': 'gradient-border',
  'hover-lift': 'hover-lift card-hover',
};

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-10 md:p-16',
};

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hoverable = false,
  onClick,
  children,
  className,
  ...restProps
}) => {
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-xl transition-all',
        variantStyles[variant],
        paddingStyles[padding],
        hoverable && 'hover:scale-102 cursor-pointer',
        isClickable && 'cursor-pointer',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
};
