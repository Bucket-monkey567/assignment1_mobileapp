import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopicScroll from './TopicScroll'
import ShortsScroll from './ShortScroll'



const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text >video-page</Text>
      <Image 
          source={require('../assets/images/daft-punk.jpg')} 
          style={styles.video} 
      />
      <TopicScroll />
      <ShortsScroll />
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
  video:{
    height: 500,
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
  profileName: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#f1f1f1'
    },


});