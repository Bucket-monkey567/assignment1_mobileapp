import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const shorts = [
  { id: 1, image: require('../assets/images/pugs.jpg'), title: 'Pug Goes Viral!' },
  { id: 2, image: require('../assets/images/daft-punk.jpg'), title: 'Daft Punk Rehearsal 😱' },
  { id: 3, image: require('../assets/images/shrek.jpg'), title: 'Shrek Dancing Compilation' },
  { id: 4, image: require('../assets/images/coder.jpg'), title: 'Quick Coding Tips' },
];

const ShortsScroll = () => {
  return (
    <View style={styles.shortsContainer}>
      <Text style={styles.shortsTitle}>Shorts</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {shorts.map((short) => (
          <View key={short.id} style={styles.shortCard}>
            <Image source={short.image} style={styles.shortThumbnail} />
            <Text style={styles.shortText}>{short.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ShortsScroll;

const styles = StyleSheet.create({
  shortsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  shortsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    marginBottom: 10,
  },
  shortCard: {
    width: 120,
    marginHorizontal: 6,
    alignItems: 'center',
  },
  shortThumbnail: {
    width: 120,
    height: 200,
    borderRadius: 10,
  },
  shortText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});
