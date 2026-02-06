import React from 'react';
import { Badge } from '@/components/atoms/Badge';
import { formatPrice } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  vegetarian?: boolean;
  vegan?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  image?: string;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  vegetarian,
  vegan,
  isNew,
  isPopular,
  image,
  className,
}) => {
  return (
    <div
      className={cn(
        'group glass p-6 rounded-xl hover:shadow-xl hover:shadow-champagne-gold/10 transition-all hover-lift',
        className
      )}
    >
      <div className="flex gap-6">
        {image && (
          <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div className="flex-1">
              <h4 className="text-cream-light font-bold text-xl group-hover:text-champagne-gold transition-colors mb-2">
                {name}
              </h4>

              <div className="flex flex-wrap gap-2 mb-2">
                {vegan && (
                  <Badge variant="vegan" size="sm">
                    Vegan
                  </Badge>
                )}
                {vegetarian && !vegan && (
                  <Badge variant="vegetarian" size="sm">
                    Végétarien
                  </Badge>
                )}
                {isNew && (
                  <Badge variant="new" size="sm">
                    Nouveau
                  </Badge>
                )}
                {isPopular && (
                  <Badge variant="popular" size="sm">
                    Populaire
                  </Badge>
                )}
              </div>
            </div>

            {price > 0 && (
              <div className="flex flex-col items-end flex-shrink-0">
                <span className="text-champagne-gold font-bold text-2xl whitespace-nowrap">
                  {formatPrice(price)}
                </span>
              </div>
            )}
          </div>

          <p className="text-cream-light/70 leading-relaxed italic text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
