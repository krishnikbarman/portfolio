'use client';

import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);

    const unmountTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0f1e] flex flex-col items-center justify-center transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Animated Monogram */}
      <div className="animate-splashFadeIn">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          KB
        </h1>
      </div>

      {/* Loading Bar */}
      <div className="w-32 h-[2px] bg-gray-800 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 w-0 animate-splashProgress" />
      </div>

      {/* Loading Text */}
      <p className="text-gray-500 text-sm mt-3">Loading...</p>
    </div>
  );
}
