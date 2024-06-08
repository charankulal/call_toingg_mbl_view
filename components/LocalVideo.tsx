import React from "react";

const LocalVideo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Local Video Example</h1>
      <div className="relative w-full max-w-screen-md">
        <video controls className="w-full h-auto rounded-lg shadow-lg">
          <source src="/icons/smple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LocalVideo;
