'use client';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg" }: LogoProps) {
  return (
    <div className={className}>
      <img 
        src="/logo.png" 
        alt="ServiceSnap Logo" 
        className="w-full h-full object-contain rounded-xl"
        onError={(e) => {
          // Fallback to gradient background if logo doesn't load
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = 'none';
            parent.className += ' bg-gradient-to-r from-green-600 to-emerald-600';
            parent.innerHTML = '<span class="text-white font-bold text-lg">S</span>';
          }
        }}
      />
    </div>
  );
}
