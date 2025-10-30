import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const playlists = [
  { id: 1, image: require('../assets/images/daft-punk.jpg'), title: 'Daft Punk News' },
  { id: 2, image: require('../assets/images/pugs.jpg'), title: 'Cute Pug Moments' },
  { id: 3, image: require('../assets/images/shrek.jpg'), title: 'Shrek Adventures' },
  { id: 4, image: require('../assets/images/coder.jpg'), title: 'Quick Coding Tips' },
];

const PlaylistScroll = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Playlists</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.feed}>
          {playlists.map((playlist) => (
            <View key={playlist.id} style={styles.playlistCard}>
              <Image source={playlist.image} style={styles.thumbnail} />
              <Text style={styles.playlistTitle}>{playlist.title}</Text>
              <Text style={styles.playlistCount}>10 videos</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaylistScroll;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  feed: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  playlistCard: {
    width: 140,          // smaller square card
    marginRight: 12,
    alignItems: 'center',
  },
  thumbnail: {
    width: 140,
    height: 140,         // square thumbnail
    borderRadius: 8,
  },
  playlistTitle: {
    marginTop: 6,
    color: '#f1f1f1',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  playlistCount: {
    color: '#a0a0a0',
    fontSize: 12,
    textAlign: 'center',
  },
});
