import React, { useRef, useEffect, useState } from "react";
import './photos.css';

let numPhotos = 11;
const photoList = [];
for(let i = 0; i < numPhotos; i++) {
  photoList.push(`/photos/${i + 1}.jpg`);
}

function Photos() {
  const [imgWidths, setImgWidths] = useState([]);
  const scrollingRef = useRef(true);
  const rowRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const currImgRef = useRef(null);
  const imgRefs = useRef([]);

  // Update refs for each image
  const setImgRef = (el, idx) => {
    imgRefs.current[idx] = el;
  };

  // Function to update widths
  const updateWidths = () => {
    let temp = imgRefs.current.map(img => img ? img.offsetWidth : 0);
    for(let i = 1; i < imgRefs.current.length; i++) {
        temp[i] = temp[i - 1] + window.innerWidth / 50 + imgRefs.current[i].offsetWidth;
    };
    for (let i = 0; i < imgRefs.current.length; i++) {
        temp[i] -= imgRefs.current[i].offsetWidth / 2;
    }
    setImgWidths(temp);
  };

  useEffect(() => {
    updateWidths();
    window.addEventListener('resize', updateWidths);

    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, []);

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

      for (let i = 0; i < imgWidths.length; i++) {
        if (row.scrollLeft + singleListWidth >= imgWidths[i] && row.scrollLeft < imgWidths[i + 1]) {
          // If the scroll position is within the bounds of an image, adjust it
          currImgRef.current = i;
          break;
        }
      }
      // Use a small buffer to avoid flicker
      if (row.scrollLeft < singleListWidth) {
        isJumping = true;
        row.scrollLeft += singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      } else if (row.scrollLeft > singleListWidth * 2) {
        isJumping = true;
        row.scrollLeft -= singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      }
    };

    row.addEventListener('scroll', handleScroll);

    // Auto-scroll interval
    const autoScroll = setInterval(() => {
      if (scrollingRef.current) row.scrollLeft += 1; // Adjust speed by changing this value
    }, 16); // ~60fps

    return () => {
      row.removeEventListener('scroll', handleScroll);
      clearInterval(autoScroll);
    };
  }, []);

  const leftClick = () => {
    scrollingRef.current = false;
    const row = rowRef.current;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    if (currImgRef.current === null) {
      currImgRef.current = 0;
    }
    if(row.scrollLeft === imgWidths[currImgRef.current] + row.scrollWidth / 3) {
        currImgRef.current = (currImgRef.current - 1) % imgWidths.length;
    }
    while (row.scrollLeft !== imgWidths[currImgRef.current]+ row.scrollWidth / 3) {
      row.scrollLeft -= 1; // Adjust speed by changing this value
    }
    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = true;
    }, 5000);
  };

  const rightClick = () => {
    scrollingRef.current = false;
    const row = rowRef.current;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    currImgRef.current = (currImgRef.current + 1) % imgWidths.length;
    while (row.scrollLeft !== imgWidths[currImgRef.current]+ row.scrollWidth / 3) {
      row.scrollLeft += 1; // Adjust speed by changing this value
    }
    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = true;
    }, 5000);
  };

  return (
    <div className="photos">
        <div className="arrow-buttons">
            <button className="left-button" onClick={leftClick}>
                <span className="arrow">&lt;</span>
            </button>
            <button className="right-button" onClick={rightClick}>
                <span className="arrow">&gt;</span>
            </button>
        </div>
      <div className="photo-row" ref={rowRef}>
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
      {/* For debugging: */}
      {/* <pre>{JSON.stringify(imgWidths, null, 2)}</pre> */}
    </div>
  );
}

export default Photos;