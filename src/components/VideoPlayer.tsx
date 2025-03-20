
import React, { useState, useEffect } from 'react';
import { Video } from '@/lib/data';

interface VideoPlayerProps {
  videos: Video[];
  initialVideoId?: string;
}

const VideoPlayer = ({ videos, initialVideoId }: VideoPlayerProps) => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set the initial video when component mounts
    if (videos && videos.length > 0) {
      const initialVideo = initialVideoId 
        ? videos.find(v => v.id === initialVideoId) 
        : videos[0];
      
      setActiveVideo(initialVideo || videos[0]);
    }
  }, [videos, initialVideoId]);

  const handleVideoSelect = (video: Video) => {
    setIsLoading(true);
    setActiveVideo(video);
  };

  // Handle iframe load complete
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!videos || videos.length === 0 || !activeVideo) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted rounded-xl">
        <p className="text-muted-foreground">No videos available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="video-container">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10 animate-pulse">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={activeVideo.url}
            title={activeVideo.title}
            className="w-full aspect-video rounded-xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
          ></iframe>
        </div>
        
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">{activeVideo.title}</h2>
          <p className="mt-2 text-muted-foreground">{activeVideo.description}</p>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-secondary/50 rounded-xl p-4">
          <h3 className="font-medium mb-4">Course Content</h3>
          <div className="space-y-2 max-h-[500px] overflow-y-auto scrollbar-hide">
            {videos.map((video) => (
              <button
                key={video.id}
                onClick={() => handleVideoSelect(video)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  activeVideo.id === video.id
                    ? "bg-primary/10 border-l-4 border-primary"
                    : "hover:bg-secondary"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className={`font-medium ${
                      activeVideo.id === video.id ? "text-primary" : ""
                    }`}>
                      {video.title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {video.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
