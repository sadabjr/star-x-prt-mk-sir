import React from "react";

const YoutubeCard = ({ videoId, playlistId, title }) => {
  const handleVideoClick = () => {
    if (playlistId) {
      window.open(`https://www.youtube.com/playlist?list=${playlistId}`, '_blank');
    } else {
      window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
    }
  };

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105">
    <div className="relative">
      <img
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        alt="YouTube Video Thumbnail"
        className="w-full"
      />
      <div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
        onClick={handleVideoClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      </div>
      <div className="py-2 px-3">
        <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
      </div>
    </div>

  );
};

export default YoutubeCard;
