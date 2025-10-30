import VideoPage from '@/components/video-page';
import React from 'react';
import { View } from 'react-native';

export default function Video() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <VideoPage />
    </View>
  );
}