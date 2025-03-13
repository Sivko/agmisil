import { store } from "@/store";
import { useStore } from "@tanstack/react-store";
import React, { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  placeholderSrc: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [, setIsVideoLoaded] = useState(false);
  const { isPlayVideo } = useStore(store, (state) => state);


  useEffect(() => {
    if (videoRef.current) {
      if (isPlayVideo) {
        videoRef.current.play().catch((error) => console.error("Video play error:", error));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlayVideo]);

  return (
    <div
      className="fixed inset-0 overflow-hidden z-[-1]"
    >
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${true ? "block" : "hidden"}`}
        src={videoSrc}
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      />
      {/* {!isVideoLoaded && (
        <Image src={placeholderSrc} alt="Video Placeholder" className="w-full h-full object-cover" width={1200} height={1200} />
      )} */}
    </div>
  );
};

export default VideoBackground;
