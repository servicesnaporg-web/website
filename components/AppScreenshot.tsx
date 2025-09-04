'use client';

interface AppScreenshotProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  fallbackSvg: string;
}

export default function AppScreenshot({ src, alt, title, description, fallbackSvg }: AppScreenshotProps) {
  return (
    <div className="text-center">
      <div className="rounded-3xl p-8 mb-6 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
        <img 
          src={src}
          alt={alt}
          className="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
          onError={(e) => {
            const target = e.currentTarget;
            target.src = fallbackSvg;
          }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary)'}}>{title}</h3>
      <p style={{color: 'var(--soft-brown)'}}>{description}</p>
    </div>
  );
}
