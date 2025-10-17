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
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    backgroundColor: '#585858ff',
  },
  topicButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  topicText: {
    color: 'black',
    fontWeight: '600',
  },
});
