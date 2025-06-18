import React, { useRef, useEffect, useState, use } from "react";
import './photos.css';

// TODO: really important the whole thing is referencing the image to the far left and everything is referencing the far left rather than the middle. I need to rememet that and fix it!

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
  const imgWidthRef = useRef([]);

  // Update refs for each image
  const setImgRef = (el, idx) => {
    imgRefs.current[idx] = el;
  };

  // Function to update widths
  const updateWidths = () => {
    let temp = imgRefs.current.map(img => img ? img.offsetWidth : 0);
    temp[0] += window.innerWidth / 25; // Adjust the first image to be centered
    for(let i = 1; i < imgRefs.current.length; i++) {
        temp[i] = temp[i - 1] + window.innerWidth / 50 + imgRefs.current[i].offsetWidth;
    };
    for (let i = 0; i < imgRefs.current.length; i++) {
        temp[i] -= imgRefs.current[i].offsetWidth / 2;
        temp[i] = Math.round(temp[i]);
    }
    setImgWidths(temp);
    console.log(imgWidths)
  };

  useEffect(() => {
    imgWidthRef.current = imgWidths;
  }, [imgWidths]);

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

    let half = window.innerWidth / 2;

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
      // console.log(imgWidthRef.current, "hi");
      for (let i = 0; i < imgWidthRef.current.length; i++) {
        if (row.scrollLeft - singleListWidth+half >= imgWidthRef.current[i] && row.scrollLeft - singleListWidth+half < imgWidthRef.current[i + 1]) {
          // If the scroll position is within the bounds of an image, adjust it
          currImgRef.current = i;
          break;
        }
      }
      // Use a small buffer to avoid flicker
      if (row.scrollLeft < singleListWidth-half) {
        isJumping = true;
        row.scrollLeft += singleListWidth;
        setTimeout(() => { isJumping = false; }, 0);
      } else if (row.scrollLeft > singleListWidth * 2-half) {
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
    if (currImgRef.current === null) currImgRef.current = 0;
    if (Math.abs(row.scrollLeft - (imgWidths[currImgRef.current] + row.scrollWidth / 3 - window.innerWidth / 2)) < 1) {
      currImgRef.current = (currImgRef.current - 1 + imgWidths.length) % imgWidths.length;
    }
    const target = imgWidths[currImgRef.current] + row.scrollWidth / 3 - window.innerWidth / 2;
    smoothScrollTo(target);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = true;
    }, 5000);
  };

  const rightClick = () => {
    scrollingRef.current = false;
    const row = rowRef.current;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    currImgRef.current = (currImgRef.current + 1) % imgWidths.length;
    const target = imgWidths[currImgRef.current] + row.scrollWidth / 3 - window.innerWidth / 2;
    smoothScrollTo(target);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = true;
    }, 5000);
  };

  function smoothScrollTo(target) {
    const row = rowRef.current;
    if (!row) return;
    const speed = 40; // pixels per frame, adjust for smoothness/speed

    function step() {
      clearTimeout(scrollTimeoutRef.current);
      const diff = target - row.scrollLeft;
      if (Math.abs(diff) < speed) {
        row.scrollLeft = target;
        scrollTimeoutRef.current = setTimeout(() => {
          scrollingRef.current = true;
        }
        , 5000);
        return;
      }
      row.scrollLeft += diff > 0 ? speed : -speed;
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

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