import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPage from '@/components/video-page';

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