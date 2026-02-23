import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {

  const dispatch = useDispatch();
  const videoRef = useRef(null);

  const addToCollection = () => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  // ✅ Only visible videos play
  useEffect(() => {
    if (item.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.6 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [item.type]);

  return (
    <div
      className="
      relative 
      h-72 sm:h-80 lg:h-80
      w-full 
      sm:w-[45vw] 
      md:w-[30vw] 
      lg:w-[18vw]   /* 👈 laptop EXACT same */
      rounded-xl overflow-hidden mt-1"
    >
      <a target="_blank" rel="noreferrer" href={item.url}>

        {item.type === "photo" && (
          <img
            loading="lazy"
            className="object-cover object-center h-full w-full"
            src={item.src}
            alt={item.title}
          />
        )}

        {item.type === "video" && (
          <video
            ref={videoRef}
            className="object-cover object-center h-full w-full"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            src={item.src}
          />
        )}

      </a>

      <div className="flex items-center justify-between absolute bottom-0 px-2 w-full py-2">
        <h2 className="text-[15px] sm:text-[16px] lg:text-[17px] tracking-tight h-11 overflow-hidden leading-tight font-light capitalize">
          {item.title}
        </h2>

        <button
          onClick={addToCollection}
          className="px-3 py-1 bg-green-600 ml-2 cursor-pointer active:scale-95 rounded transition-transform duration-150"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default React.memo(ResultCard);