import React from 'react'
import { 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'

import TopicScroll from './TopicScroll'
import ShortsScroll from './ShortScroll'
import { useRouter } from 'expo-router'

const MainPage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      
      {/* App Title */}
      <TouchableOpacity onPress={() => router.push("/")}>
        <Text style={styles.yubTub}>Back</Text>
      </TouchableOpacity>
      

      {/* Featured Video */}
      <Image 
        source={require('../assets/images/daft-punk.jpg')} 
        style={styles.video} 
      />

      {/* Scrollable Feed */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.featuredVideoTitle}>
        Daft Punk is BACK?!
      </Text>
      <Text style={styles.videoSubtitle}>
          5.4M views • 1 day ago
        </Text>
      <View style={styles.videoInfo}>
        <Image 
          source={require('../assets/images/daft-punk-channel.jpg')} 
          style={styles.channelPic} 
        />
        <Text style={styles.yubTub}>
          daftclub
        </Text>
        
      </View>
        <TopicScroll />
        <ShortsScroll />

        <View style={styles.feed}>
          
          {/* === VIDEO #1 === */}
          <Image 
            source={require('../assets/images/coder.jpg')} 
            style={styles.thumbnail} 
          />
          <View style={styles.videoInfo}>
            <Image 
              source={require('../assets/images/daft-punk-channel.jpg')} 
              style={styles.channelPic} 
            />
            <View style={styles.videoText}>
              <Text style={styles.videoTitle}>Daft Punk can CODE?!</Text>
              <Text style={styles.videoSubtitle}>
                daftclub • 2.1M views • 3 days ago
              </Text>
            </View>
          </View>

          {/* === VIDEO #2 === */}
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
              <Text style={styles.videoTitle}>
                Cute Pug Moments That Will Make Your Heart Melt
              </Text>
              <Text style={styles.videoSubtitle}>
                Puglover101 • 6.7M views • 3 weeks ago
              </Text>
            </View>
          </View>

          {/* === VIDEO #3 === */}
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
              <Text style={styles.videoSubtitle}>
                MoreThanAnOgre • 30.5K views • 4 days ago
              </Text>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}

export default MainPage

// =============================
// STYLES
// =============================
const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // dark gray background
    width: '100%',
  },

  // Header
  header: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  yubTub: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
  },

  // Feed
  feed: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },

  thumbnail: {
    height: 200,
    width: '100%',
  },

  video: {
    height: 500,
    width: '100%',
  },
  featuredVideoTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#f1f1f1',
    marginTop: 8,
    marginHorizontal: 10,
  },

  videoInfo: {
    flexDirection: 'row',
    padding: 10,
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
    color: '#f1f1f1',
  },

  videoSubtitle: {
    fontSize: 14,
    marginTop: 5,
    color: '#a0a0a0',
    marginLeft: 10,
  },

  // Topic Scroll
  topicScrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#383838',
    backgroundColor: '#282828',
  },

  topicButton: {
    backgroundColor: '#383838',
    borderWidth: 1,
    borderColor: '#505050',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },

  topicText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },

  // Shorts
  shortsContainer: {
    backgroundColor: '#1c1c1c',
    marginTop: 8,
    marginBottom: 10,
  },

  shortsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 10,
    marginBottom: 8,
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
    color: '#f1f1f1',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },

  // Footer
  footer: {
    backgroundColor: '#282828',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  footerItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  footerIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
    marginHorizontal: 30,
  },

  profileName: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#f1f1f1',
  },
})
