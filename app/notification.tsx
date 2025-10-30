import NotificationPage from '@/components/notificationPage';
import React from 'react';
import { View } from 'react-native';

export default function Notification() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <NotificationPage />
    </View>
  );
}