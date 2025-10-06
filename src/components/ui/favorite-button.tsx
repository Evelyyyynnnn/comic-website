import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: React.ReactNode;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  className,
  variant = 'outline',
  size = 'sm',
  children = 'Favorite'
}) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFavorited(!isFavorited);
      
      // 重置动画状态
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'gap-2 transition-all duration-300',
        isFavorited && 'text-red-500 border-red-500 hover:bg-red-50',
        isAnimating && 'animate-pulse',
        className
      )}
      onClick={handleClick}
    >
      <Heart
        className={cn(
          'w-4 h-4 transition-all duration-300',
          isFavorited && 'fill-red-500 text-red-500',
          isAnimating && (isFavorited ? 'favorite-heart-beat' : 'favorite-heart-shake')
        )}
      />
      {children}
    </Button>
  );
};
