import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const topics = [
  'All', 'Music', 'Gaming', 'News', 'Movies',
  'Podcasts', 'Comedy', 'Learning', 'Sports', 'Tech',
];

const TopicScroll = () => {
  return (
    <View style={styles.topicScrollContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topics.map((topic, index) => (
          <View key={index} style={styles.topicButton}>
            <Text style={styles.topicText}>{topic}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopicScroll;

const styles = StyleSheet.create({
  topicScrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#383838', // subtle border to separate from header
    backgroundColor: '#282828', // matches header background
  },
  topicButton: {
    backgroundColor: '#383838', // slightly lighter gray for buttons
    borderWidth: 1,
    borderColor: '#505050', // subtle border around buttons
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  topicText: {
    color: '#ffffff', // white text for contrast
    fontWeight: '600',
    fontSize: 14,
  },
});
