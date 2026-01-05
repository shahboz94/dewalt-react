import React from "react";
export default function Advertisement() {
  return (
    <div className="advertisement-frame">
      <video
        className={"advertisement-video"}
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source type="video/mp4" src="/video/DW_ATOMIC.mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
