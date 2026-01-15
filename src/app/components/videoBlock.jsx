'use client';

import { useState } from 'react';

const extractYouTubeID = (url) => {
  if (!url) return '';
  const regex = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/))([A-Za-z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : '';
};

const VideoBlock = ({ youTubeUrl, thumbnailUrl, playIconUrl, isReversed }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = extractYouTubeID(youTubeUrl);
  const defaultThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (!videoId) return null;

  return (
    <div className="video-block">
      <div className={`row ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        {isPlaying ? (
          <div className="video-wrapper relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
              frameBorder="0"
            ></iframe>
          </div>
        ) : (
          <button
            className="video-poster relative p-0 border-0 bg-transparent cursor-pointer w-full"
            onClick={() => setIsPlaying(true)}
          >
            <div className="poster-wrapper relative w-full">
              <img
                src={thumbnailUrl || defaultThumbnail}
                alt="Video thumbnail"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="play-overlay absolute inset-0 flex items-center justify-center pointer-events-none">
                {playIconUrl ? (
                  <img src={playIconUrl} alt="Play icon" className="w-16 h-16" />
                ) : (
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '16px solid white',
                        borderTop: '10px solid transparent',
                        borderBottom: '10px solid transparent',
                        marginLeft: 4,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoBlock;
