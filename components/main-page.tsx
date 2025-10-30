import { useRouter } from "expo-router"
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AlertButton from './AlertButton'
import ShortsScroll from './ShortScroll'
import TopicScroll from './TopicScroll'

const MainPage = () => {
  const router = useRouter(); // put this inside MainPage
  return (
    <View style={styles.container}>
        {/* Here is the header olong with the icons that should be in it */}
        <View style={styles.header}>
            <Image 
            source={require('../assets/images/youtube-logo.png')} 
            style={styles.logo} 
            />
            <Text style={styles.yubTub}>YubTub</Text>
            <View style={styles.Icons}> 
                <Image 
                source={require('../assets/images/share-screen-icon.png')} 
                style={styles.icon} 
                />
                <TouchableOpacity onPress={() => router.push("../notification")}>
                  <Image 
                  source={require('../assets/images/notification-icon.png')} 
                  style={styles.icon} 
                  />
                </TouchableOpacity>
                <Image 
                source={require('../assets/images/search-icon.png')} 
                style={styles.icon} 
                />
            </View> 
        </View>
        {/* Topic Scroll Section */}
      <TopicScroll />

      <ScrollView showsVerticalScrollIndicator={false}>
      {/* Shorts Section */}
      <ShortsScroll />

        {/* Feed */}
        <View style={styles.feed}>
          {/* #1 */}
          <TouchableOpacity onPress={() => router.push("../video")}>
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
          </TouchableOpacity>
          

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
      </ScrollView>
      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image 
            source={require('../assets/images/home_icon.png')} 
            style={styles.footerIcon}
          />
          <Image 
            source={require('../assets/images/shorts_icon.png')} 
            style={styles.footerIcon}
          />
          <AlertButton />
          <Image
            source={require('../assets/images/lib-icon.png')}
            style={styles.footerIcon}
          />
          <TouchableOpacity onPress={() => router.push("../profile")}>
            <Image
              source={require('../assets/images/prof-icon.png')}
              style={styles.footerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c', // dark gray for main background
    width: '100%',
  },

  // Header
  header: {
    backgroundColor: '#282828', // matches topic scroll
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 0,
  },
  logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  yubTub: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  Icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 28,
    width: 28,
    marginLeft: 12,
    resizeMode: 'contain',
  },

  // Topic Scroll to Added darker youtube theme
  topicScrollContainer: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
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

  // Feed & videos to fit the theme 
  feed: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  thumbnail: {
    height: 200,
    width: '100%',
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
    marginTop: 4,
    color: '#a0a0a0',
  },

  // Shorts Scroll to fit the theme
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
    backgroundColor: '#282828', // matches topic scroll
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 0,
  },
  footerItem: {
  flexDirection: 'row',
  paddingHorizontal: 20,
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1, // evenly distribute space across 5 icons
  },
  footerIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
    marginHorizontal: 30,
  },


});

