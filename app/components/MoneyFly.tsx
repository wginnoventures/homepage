'use client';

import { useEffect, useState } from 'react';

interface MoneyEmoji {
  id: number;
  left: number;
  bottom: number;
  animationDuration: number;
  animationDelay: number;
  fontSize: number;
}

export default function MoneyFly() {
  const [moneyEmojis, setMoneyEmojis] = useState<MoneyEmoji[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Generate random flying money emojis spread across the screen
    const emojis: MoneyEmoji[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position from 0-100%
      bottom: -Math.random() * 100, // Random starting position from -100vh to 0
      animationDuration: 5 + Math.random() * 5, // 5-10 seconds
      animationDelay: Math.random() * 10, // 0-10 seconds delay
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
          className="absolute animate-fly-up"
          style={{
            left: `${emoji.left}%`,
            bottom: `${emoji.bottom}vh`,
            animationDuration: `${emoji.animationDuration}s`,
            animationDelay: `${emoji.animationDelay}s`,
            fontSize: `${emoji.fontSize}px`,
          }}
        >
          💸
        </div>
      ))}
    </>
  );
}
