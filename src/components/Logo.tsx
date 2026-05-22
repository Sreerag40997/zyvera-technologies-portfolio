import React from 'react';

export function LogoSymbol({ className = "h-10 w-10", color = "currentColor" }: { className?: string, color?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Upper part of Z/Z-like structure with smooth rounded terminals */}
      <path 
        d="M50 70C50 64.4772 54.4772 60 60 60H130C135.523 60 140 64.4772 140 70C140 75.5228 135.523 80 130 80H100L55.8579 124.142C51.9526 128.047 51.9526 134.379 55.8579 138.284L60 142.426C63.9052 146.332 70.2369 146.332 74.1421 142.426L110 106.569" 
        stroke={color} 
        strokeWidth="20" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Right companion slash / i-bar with matching slant and dot */}
      <path 
        d="M102 128L138 92C141.905 88.0948 148.237 88.0948 152.142 92L156.284 96.1421C160.19 100.047 160.19 106.379 156.284 110.284L120.284 146.284C116.379 150.19 110.047 150.19 106.142 146.284L102 142.142C98.0948 138.237 98.0948 131.905 102 128Z" 
        fill={color} 
      />
      {/* Top circular dot corresponding to "i" inside the emblem */}
      <circle cx="152" cy="55" r="13" fill={color} />
    </svg>
  );
}

export function LogoFull() {
  return (
    <div className="flex items-center gap-3">
      <LogoSymbol className="h-9 w-9 text-brand-accent animate-pulse" />
      <div className="flex flex-col">
        <span className="font-display text-xl font-bold tracking-wider text-brand-text leading-none">
          zyvera
        </span>
        <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-muted font-semibold leading-none mt-1">
          technologies
        </span>
      </div>
    </div>
  );
}
