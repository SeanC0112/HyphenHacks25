import React, { useRef, useEffect } from "react";
import './photos.css';

let numPhotos = 11;
const photoList = [];
for(let i = 0; i < numPhotos; i++) {
  photoList.push(`/photos/${i + 1}.jpg`);
}

function Photos() {
  const rowRef = useRef(null);

  // Duplicate the photoList 3 times for seamless looping
  const displayList = [...photoList, ...photoList, ...photoList];

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // Wait for images to load before setting scroll position
    const handleImagesLoaded = () => {
      const singleListWidth = row.scrollWidth / 3;
      row.scrollLeft = singleListWidth;
    };

    // If images are already loaded, set scroll position
    if ([...row.querySelectorAll('img')].every(img => img.complete)) {
      handleImagesLoaded();
    } else {
      // Otherwise, wait for all images to load
      let loaded = 0;
      const imgs = row.querySelectorAll('img');
      imgs.forEach(img => {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === imgs.length) handleImagesLoaded();
        });
      });
    }

    let isJumping = false;
    const handleScroll = () => {
      if (isJumping) return;
      const singleListWidth = row.scrollWidth / 3;
      // Use a small buffer to avoid flicker
      if (row.scrollLeft < singleListWidth * 0.05) {
        isJumping = true;
        row.scrollLeft += singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      } else if (row.scrollLeft > singleListWidth * 1.95) {
        isJumping = true;
        row.scrollLeft -= singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      }
    };

    row.addEventListener('scroll', handleScroll);

    // Auto-scroll interval
    const autoScroll = setInterval(() => {
      row.scrollLeft += 1; // Adjust speed by changing this value
    }, 16); // ~60fps

    return () => {
      row.removeEventListener('scroll', handleScroll);
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <div className="photos">
      <div className="photo-row" ref={rowRef}>
        {displayList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Photo ${idx % photoList.length + 1}`}
            className="photo-img"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;