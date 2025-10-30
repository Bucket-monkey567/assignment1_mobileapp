import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const HistoryScroll = () => {
  return (
    <View style={styles.container}>
      {/* Header Text above the scroll */}
      <Text style={styles.headerText}>Watch History</Text>

      {/* Horizontal Scroll of videos */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.feed}>
          {/* Video #1 */}
          <View style={styles.videoCard}>
            <Image 
              source={require('../assets/images/daft-punk.jpg')} 
              style={styles.thumbnail} 
            />
            <View style={styles.videoInfo}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle}>Daft Punk is BACK?!</Text>
                <Text style={styles.videoSubtitle}>daftclub</Text>
              </View>
            </View>
          </View>

          {/* Video #2 */}
          <View style={styles.videoCard}>
            <Image 
              source={require('../assets/images/pugs.jpg')} 
              style={styles.thumbnail} 
            />
            <View style={styles.videoInfo}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle}>Cute Pug Moments</Text>
                <Text style={styles.videoSubtitle}>Puglover101</Text>
              </View>
            </View>
          </View>

          {/* Video #3 */}
          <View style={styles.videoCard}>
            <Image 
              source={require('../assets/images/shrek.jpg')} 
              style={styles.thumbnail} 
            />
            <View style={styles.videoInfo}>
              <View style={styles.videoText}>
                <Text style={styles.videoTitle}>The Amazing Journey of Shrek</Text>
                <Text style={styles.videoSubtitle}>MoreThanAnOgre</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryScroll;

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
    flexDirection: 'row', // horizontal layout
    paddingHorizontal: 10,
  },
  videoCard: {
    width: 250,
    marginRight: 12,
    backgroundColor: '#1c1c1c',
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 140,
  },
  videoInfo: {
    flexDirection: 'row',
    padding: 8,
  },
  channelPic: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 8,
  },
  videoText: {
    flex: 1,
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#f1f1f1',
  },
  videoSubtitle: {
    fontSize: 12,
    color: '#a0a0a0',
    marginTop: 2,
  },
});
