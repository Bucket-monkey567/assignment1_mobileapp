import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

// TO DO: 
// - find new notification icon, cuz that one sucks
// - Fix layout of icons and 'YubTub' text
// - fix general layout of page, matching it to YouTube page
// - implement filters and scrollable functionality (including for feed)
// - add alert button thingy

const MainPage = () => {
  return (
    <View style={styles.container}>
        {/* Here is the header olong with the icons that should be in it */}
        <View style={styles.header}>
            <Image 
            source={require('../assets/images/youtube-logo.png')} 
            style={styles.logo} 
            />
            <Text style={styles.yubTub}>YubTub</Text>
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

        {/* Here is where the main video feed starts */}
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
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: 'gray',
            width: '100%'
        },
        header: {
            backgroundColor: '#585858ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            marginBottom: 20
        },
        logo: {
            height: 50,
            width: 50
        },
        yubTub:{
            
        },
        headerIcons: {
            flexDirection: 'row',
        },
        icon: {
            height: 50,
            width: 50,
            marginHorizontal: 4
        },
        feed: {
            flex: 1
        },
        thumbnail: {
            height: 200,
            width: '100%'
        },
        videoInfo: {
            flexDirection: 'row',
            padding: 10
        },
        channelPic: {
            height: 50,
            width: 50,
            borderRadius: 30,
            marginRight: 10
        },
        videoText: {
            flex: 1
        },
        videoTitle: {
            fontWeight: 'bold',
            fontSize: 16
        },
        videoSubtitle: {
            fontSize: 14,
            marginTop: 4
        }
    }
)
