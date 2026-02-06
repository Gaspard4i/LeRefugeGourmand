import React from 'react';
import { cn } from '@/lib/utils';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TextAlign = 'left' | 'center' | 'right';

interface HeadingProps {
  as?: HeadingLevel;
  gradient?: boolean;
  shimmer?: boolean;
  align?: TextAlign;
  children: React.ReactNode;
  className?: string;
}

const headingSizes: Record<HeadingLevel, string> = {
  h1: 'text-6xl md:text-8xl',
  h2: 'text-5xl md:text-6xl',
  h3: 'text-4xl md:text-5xl',
  h4: 'text-3xl md:text-4xl',
  h5: 'text-2xl md:text-3xl',
  h6: 'text-xl md:text-2xl',
};

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  gradient = false,
  shimmer = false,
  align = 'left',
  children,
  className,
}) => {
  return (
    <Component
      className={cn(
        'font-serif font-bold',
        headingSizes[Component],
        `text-${align}`,
        gradient && 'luxury-gradient',
        shimmer && 'shimmer',
        !gradient && !shimmer && 'text-champagne-gold',
        className
      )}
    >
      {children}
    </Component>
  );
};

interface TextProps {
  size?: TextSize;
  muted?: boolean;
  align?: TextAlign;
  children: React.ReactNode;
  className?: string;
}

const textSizes: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

export const Text: React.FC<TextProps> = ({
  size = 'base',
  muted = false,
  align = 'left',
  children,
  className,
}) => {
  return (
    <p
      className={cn(
        textSizes[size],
        `text-${align}`,
        muted ? 'text-cream-light/70' : 'text-cream-light',
        className
      )}
    >
      {children}
    </p>
  );
};

interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  required,
  children,
  className,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        'block text-sm font-medium text-cream-light mb-2',
        className
      )}
    >
      {children}
      {required && <span className="text-champagne-gold ml-1">*</span>}
    </label>
  );
};

