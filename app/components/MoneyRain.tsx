'use client';

import { useEffect, useState } from 'react';

interface MoneyEmoji {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
}

export default function MoneyRain() {
  const [moneyEmojis, setMoneyEmojis] = useState<MoneyEmoji[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate random raining money emojis (10% of flying count = 3)
    const emojis: MoneyEmoji[] = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position from 0-100%
      animationDuration: 3 + Math.random() * 4, // 3-7 seconds
      animationDelay: Math.random() * 5, // 0-5 seconds delay
      fontSize: 24 + Math.random() * 32, // 24-56px
    }));
    setMoneyEmojis(emojis);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {moneyEmojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-rain-down"
          style={{
            left: `${emoji.left}%`,
            top: '-100px',
            animationDuration: `${emoji.animationDuration}s`,
            animationDelay: `${emoji.animationDelay}s`,
            fontSize: `${emoji.fontSize}px`,
          }}
        >
          💵
        </div>
      ))}
    </>
  );
}
