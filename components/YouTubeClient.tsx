// components/YouTubeClient.tsx
'use client';

import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeClientProps {
  videoId: string;
}

const YouTubeClient: React.FC<YouTubeClientProps> = ({ videoId }) => {
  return <YouTube videoId={videoId} opts={{ height: '315', width: '560' }} />;
};

export default YouTubeClient;
