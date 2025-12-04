'use client';

import { useEffect, useState } from 'react';

interface MoneyEmoji {
  id: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
}

export default function MoneyPops() {
  const [moneyEmojis, setMoneyEmojis] = useState<MoneyEmoji[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure page is fully loaded
    const timer = setTimeout(() => {
      // Generate random popping money emojis with better spacing to avoid overlap
      const positions: { left: number; top: number }[] = [];
      const minDistance = 15; // Minimum distance between emojis (%)

      const emojis: MoneyEmoji[] = Array.from({ length: 5 }, (_, i) => {
        let left = 25 + Math.random() * 50;
        let top = 35 + Math.random() * 30;
        let attempts = 0;
        
        // Try to find a position that doesn't overlap with existing ones
        while (
          attempts < 50 &&
          positions.some(pos => 
            Math.abs(pos.left - left) < minDistance && 
            Math.abs(pos.top - top) < minDistance
          )
        ) {
          left = 25 + Math.random() * 50; // Center area: 25-75%
          top = 35 + Math.random() * 30; // Center area: 35-65%
          attempts++;
        }

        positions.push({ left, top });

        return {
          id: i,
          left,
          top,
          animationDuration: 3 + Math.random() * 2, // 3-5 seconds
          animationDelay: i * 1.2 + Math.random() * 2, // Staggered delays to avoid simultaneous pops
          fontSize: 32 + Math.random() * 24, // 32-56px
        };
      });
      
      setMoneyEmojis(emojis);
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady || moneyEmojis.length === 0) {
    return null;
  }

  return (
    <>
      {moneyEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-pop-bounce"
          style={{
            left: `${emoji.left}%`,
            top: `${emoji.top}%`,
            animationDuration: `${emoji.animationDuration}s`,
            animationDelay: `${emoji.animationDelay}s`,
            fontSize: `${emoji.fontSize}px`,
          }}
        >
          🤑
        </div>
      ))}
    </>
  );
}
