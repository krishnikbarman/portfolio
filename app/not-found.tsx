'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a0f1e]">
      {/* 404 Text */}
      <div className="text-8xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        404
      </div>

      {/* Heading */}
      <h1 className="text-white text-2xl font-semibold mt-4">
        Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 text-sm mt-2">
        Looks like this page doesn&apos;t exist.
      </p>

      {/* Button */}
      <button
        onClick={() => router.push('/')}
        className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
      >
        Back to Home
      </button>
    </div>
  );
}
