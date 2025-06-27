import React, { useRef, useEffect, useState } from "react";
import './photos.css';

let numPhotos = 11;
// tests
const photoList = [];
for (let i = 0; i < numPhotos; i++) {
  photoList.push(`/photos/${i + 1}.JPG`);
}

function Photos() {
  const [imgWidths, setImgWidths] = useState([]);
  const rowRef = useRef(null);
  const imgRefs = useRef([]);

  // Update refs for each image
  const setImgRef = (el, idx) => {
    imgRefs.current[idx] = el;
  };

  // Update widths on load/resize
  const updateWidths = () => {
    setImgWidths(imgRefs.current.map(img => img ? img.offsetWidth : 0));
  };

  useEffect(() => {
    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // Duplicate the photoList 3 times for seamless looping
  const displayList = [...photoList, ...photoList, ...photoList];

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    // Center on the middle list after images load
    const handleImagesLoaded = () => {
      const singleListWidth = row.scrollWidth / 3;
      row.scrollLeft = singleListWidth;
    };

    if ([...row.querySelectorAll('img')].every(img => img.complete)) {
      handleImagesLoaded();
    } else {
      let loaded = 0;
      const imgs = row.querySelectorAll('img');
      imgs.forEach(img => {
        img.addEventListener('load', () => {
          loaded++;
          if (loaded === imgs.length) handleImagesLoaded();
        });
      });
    }

    // Infinite auto-scroll
    let isJumping = false;
    const handleScroll = () => {
      const singleListWidth = row.scrollWidth / 3;
      const half = window.innerWidth / 2;
      if (isJumping) return;
      if (row.scrollLeft < singleListWidth - half) {
        isJumping = true;
        row.scrollLeft += singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      } else if (row.scrollLeft >= singleListWidth * 2 - half) {
        isJumping = true;
        row.scrollLeft -= singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      }
    };

    row.addEventListener('scroll', handleScroll);

    const autoScroll = setInterval(() => {
      row.scrollLeft += 1; // Adjust speed here
    }, 16);

    return () => {
      row.removeEventListener('scroll', handleScroll);
      clearInterval(autoScroll);
    };
  }, [imgWidths]);

  return (
    <div className="photos">
      <h1 className="photo-title">Previous Hackathons</h1>
      {/* <hr className="photo-break" /> */}
      <div
        className="photo-row no-pointer"
        ref={rowRef}
      >
        {displayList.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Photo ${idx % photoList.length + 1}`}
            className="photo-img"
            draggable={false}
            ref={el => setImgRef(el, idx)}
            onLoad={updateWidths}
          />
        ))}
      </div>
    </div>
  );
}

export default Photos;