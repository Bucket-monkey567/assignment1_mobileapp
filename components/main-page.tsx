import React from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import ShortsScroll from './ShortScroll';
import TopicScroll from './TopicScroll';

const MainPage = () => {
  const showAlert = () => {
    Alert.alert('Alert Button pressed');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require('../assets/images/youtube-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.yubTub}>YubTub</Text>
        </View>
        <View style={styles.headerIcons}>
          <Image
            source={require('../assets/images/share-screen-icon.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/images/notification-icon.png')}
            style={styles.icon}
          />
          <Image
            source={require('../assets/images/search-icon.png')}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Topic Scroll */}
      <TopicScroll />

      {/* Shorts Section */}
      <ShortsScroll />

      {/* Feed */}
      <View style={styles.feed}>
        {/* #1 */}
        <Image
          source={require('../assets/images/daft-punk.jpg')}
          style={styles.thumbnail}
        />
        <View style={styles.videoInfo}>
          <Image
            source={require('../assets/images/daft-punk-channel.jpg')}
            style={styles.channelPic}
          />
          <View style={styles.videoText}>
            <Text style={styles.videoTitle}>Daft Punk is BACK?!</Text>
            <Text style={styles.videoSubtitle}>daftclub • 22.1K views • 3 days ago</Text>
          </View>
        </View>

        {/* #2 */}
        <Image
          source={require('../assets/images/pugs.jpg')}
          style={styles.thumbnail}
        />
        <View style={styles.videoInfo}>
          <Image
            source={require('../assets/images/pugs-channel.jpg')}
            style={styles.channelPic}
          />
          <View style={styles.videoText}>
            <Text style={styles.videoTitle}>Cute Pug Moments That Will Make Your Heart Melt</Text>
            <Text style={styles.videoSubtitle}>Puglover101 • 6.7M views • 3 weeks ago</Text>
          </View>
        </View>

        {/* #3 */}
        <Image
          source={require('../assets/images/shrek.jpg')}
          style={styles.thumbnail}
        />
        <View style={styles.videoInfo}>
          <Image
            source={require('../assets/images/shrek-channel.jpg')}
            style={styles.channelPic}
          />
          <View style={styles.videoText}>
            <Text style={styles.videoTitle}>The Amazing Journey of Shrek</Text>
            <Text style={styles.videoSubtitle}>MoreThanAnOgre • 30.5K views • 4 days ago</Text>
          </View>
        </View>
      </View>

      {/* Alert Button */}
      <View style={styles.alertButton}>
        <Button title="Alert" color="#d32f2f" onPress={showAlert} />
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#707070', // lighter gray theme
    width: '100%',
  },
  header: {
    backgroundColor: '#8a8a8a', // slightly lighter header for contrast
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 45,
    width: 45,
    marginRight: 8,
  },
  yubTub: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f5f5f5',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    height: 40,
    width: 40,
    marginHorizontal: 4,
    tintColor: '#f5f5f5',
  },
  feed: {
    flex: 1,
    paddingBottom: 20,
  },
  thumbnail: {
    height: 220,
    width: '100%',
    borderRadius: 10,
  },
  videoInfo: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#808080',
    borderBottomWidth: 1,
    borderBottomColor: '#9e9e9e',
  },
  channelPic: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  videoText: {
    flex: 1,
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#f0f0f0',
  },
  videoSubtitle: {
    fontSize: 14,
    marginTop: 4,
    color: '#e0e0e0',
  },
  alertButton: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
});
