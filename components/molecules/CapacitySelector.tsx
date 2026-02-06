'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface CapacitySelectorProps {
  selected: number;
  capacities?: number[];
  onChange: (capacity: number) => void;
  className?: string;
}

const DEFAULT_CAPACITIES = [1, 2, 4, 8, 12, 20, 30];

export const CapacitySelector: React.FC<CapacitySelectorProps> = ({
  selected,
  capacities = DEFAULT_CAPACITIES,
  onChange,
  className,
}) => {
  return (
    <div className={cn('grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4', className)}>
      {capacities.map((capacity) => {
        const isSelected = selected === capacity;
        const isLarge = capacity >= 30;

        return (
          <button
            key={capacity}
            onClick={() => onChange(capacity)}
            className={cn(
              'relative p-6 rounded-xl border-2 transition-all transform hover:scale-105',
              isSelected
                ? 'border-champagne-gold bg-champagne-gold/20 scale-105 shadow-lg shadow-champagne-gold/30'
                : 'border-champagne-gold/30 hover:border-champagne-gold/60 glass'
            )}
          >
            <div className="text-center">
              <div
                className={cn(
                  'text-3xl font-bold mb-2 transition-colors',
                  isSelected ? 'text-champagne-gold' : 'text-cream-light'
                )}
              >
                {isLarge ? '30+' : capacity}
              </div>
              <div className="text-sm text-cream-light/70">
                {capacity === 1 ? 'personne' : 'personnes'}
              </div>
            </div>

            {isSelected && (
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-champagne-gold rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-slate-night" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
