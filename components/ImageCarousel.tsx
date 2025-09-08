'use client';

import { useState, useEffect } from 'react';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
  autoSwitchInterval?: number;
  fallbackSvg?: string;
}

export default function ImageCarousel({ 
  images, 
  autoSwitchInterval = 3000,
  fallbackSvg = "/file.svg"
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSwitchInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSwitchInterval]);

  const currentImage = images[currentIndex];

  return (
    <div className="text-center">
      <div className="rounded-3xl p-8 mb-6 border" style={{backgroundColor: 'var(--cream)', borderColor: 'var(--border-color)'}}>
        <div className="relative">
          <img 
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full max-w-xs mx-auto rounded-2xl shadow-lg transition-opacity duration-500"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = fallbackSvg;
            }}
          />
          
          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6' 
                      : 'opacity-50 hover:opacity-75'
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? 'var(--primary)' : 'var(--soft-brown)'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2" style={{color: 'var(--primary)'}}>
        {currentImage.title}
      </h3>
      <p style={{color: 'var(--soft-brown)'}}>
        {currentImage.description}
      </p>
    </div>
  );
}
