import React, { useState, useEffect, useRef } from 'react';

interface ThreeDCarouselProps {
  images: string[];
  altTexts: string[];
  className?: string;
}

const ThreeDCarousel: React.FC<ThreeDCarouselProps> = ({
  images,
  altTexts,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mouse/touch event handlers for dragging
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX - translateX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setTranslateX(clientX - startX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    // Determine if we should move to next/previous slide based on drag distance
    const threshold = window.innerWidth * 0.25; // 25% of screen width

    if (Math.abs(translateX) > threshold) {
      if (translateX > 0) {
        // Swiped right - go to previous
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      } else {
        // Swiped left - go to next
        setCurrentIndex(prev => (prev + 1) % images.length);
      }
    }

    setTranslateX(0); // Reset translate after drag ends
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  // Handle click on dots
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Calculate position for each slide in the 3D carousel
  const getSlidePosition = (index: number) => {
    const totalItems = images.length;
    if (totalItems === 0) return { x: 0, z: 0, opacity: 0, scale: 0 };

    // Calculate the angle for this slide in the 3D circle
    const angle = (index - currentIndex) * (2 * Math.PI) / totalItems;

    // Calculate the position in 3D space
    const radius = 300;
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;

    // Calculate scale and opacity based on position (closer items appear larger and more opaque)
    const maxScale = 1;
    const minScale = 0.7;
    const maxOpacity = 1;
    const minOpacity = 0.4;

    const scale = minScale + (maxScale - minScale) * ((z + radius) / (2 * radius));
    const opacity = minOpacity + (maxOpacity - minOpacity) * ((z + radius) / (2 * radius));

    return { x, z, opacity, scale };
  };

  // Handle image click to open preview
  const handleImageClick = (image: string) => {
    setPreviewImage(image);
  };

  // Close preview
  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <>
      <div className={`relative w-full h-96 overflow-hidden ${className}`}>
        <div
          ref={carouselRef}
          className="relative w-full h-full"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {/* 3D Carousel Container */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              perspective: '1000px',
            }}
          >
            {images.map((image, index) => {
              const { x, z, opacity, scale } = getSlidePosition(index);

              return (
                <div
                  key={index}
                  className="absolute w-64 h-96 transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round((z + 300) * 10), // Higher z-index for items closer to the front
                  }}
                  onClick={() => handleImageClick(image)}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#4747d7]">
                    <img
                      src={image}
                      alt={altTexts[index] || `Event image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-50">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#4747d7] w-6' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
            setIsAutoPlaying(false);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4747d7] bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all z-50"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
            setIsAutoPlaying(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4747d7] bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all z-50"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closePreview}
        >
          <div
            className="relative max-w-4xl max-h-4xl p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the preview
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 z-10"
              onClick={closePreview}
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ThreeDCarousel;