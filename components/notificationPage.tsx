import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Notification = () => {
  const notifications = [
    { 
      id: 1, 
      channel: 'TechNova', 
      text: 'uploaded a new video: “Top 10 React Native Tips for 2025”', 
      time: '5m ago',
      image: require('../assets/images/thumbnail1.png'),
    },
    { 
      id: 2, 
      channel: 'LunarVibes', 
      text: 'uploaded a new video: “Midnight Coding Chill Lo-Fi Mix”', 
      time: '15m ago',
      image: require('../assets/images/thumbnail2.jpg'),
    },
    { 
      id: 3, 
      channel: 'Nova Edits', 
      text: 'uploaded a new video: “Daft Punk Vibes in 10 Seconds”', 
      time: '1h ago',
      image: require('../assets/images/thumbnail3.jpg'),
    },
    { 
      id: 4, 
      channel: 'FutureWave', 
      text: 'uploaded a new video: “AI Music Needs to be STOPPED”', 
      time: '2h ago',
      image: require('../assets/images/thumbnail4.jpg'),
    },
    { 
      id: 5, 
      channel: 'The Coding Owl', 
      text: 'uploaded a new video: “Building a Full App in Expo”', 
      time: '4h ago',
      image: require('../assets/images/thumbnail5.jpg'),
    },
    { 
      id: 6, 
      channel: 'Midnight Studios', 
      text: 'uploaded a new video: “Night Aesthetic in Motion”', 
      time: '1d ago',
      image: require('../assets/images/thumbnail6.jpg'),
    },
  ]

  return (
    <View style={styles.container}>
      {/* Notification Header */}
      <View style={styles.notificationHeader}>
        <Image 
        source={require('../assets/images/back-arrow.jpg')}
        style={styles.back} 
        />
        <Text style={styles.notification}>Notifications</Text>
        <View style={styles.icons}> 
          <Image 
          source={require('../assets/images/share-screen-icon.png')} 
          style={styles.icon} 
          />
          <Image 
          source={require('../assets/images/search-icon.png')} 
          style={styles.icon} 
          />
          <Image 
          source={require('../assets/images/more-icon.png')} 
          style={styles.icon} 
          />
        </View> 
      </View>

      {/* Filter buttons */}
      <View style={styles.filterContainer}>
        <View style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </View>
        <View style={styles.filterButton}>
          <Text style={styles.filterText}>Mentions</Text>
        </View>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationList}>
        {notifications.map((item) => (
          <View key={item.id} style={styles.notificationItem}>
            <Image 
              source={item.image} 
              style={styles.thumbnail}
            />
            <View style={styles.textContainer}>
              <Text style={styles.channelText}>{item.channel}</Text>
              <Text style={styles.description}>{item.text}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

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
          <Image
            source={require('../assets/images/lib-icon.png')}
            style={styles.footerIcon}
          />
          <Image
            source={require('../assets/images/prof-icon.png')}
            style={styles.footerIcon}
          />
        </View>
      </View>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    width: '100%',
  },
  notificationHeader: {
    backgroundColor: '#1c1c1c',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 0,
  },
  back: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  notification: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    flex: 1,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 28,
    width: 28,
    marginLeft: 12,
    resizeMode: 'contain',
  },
  filterContainer: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    flexDirection: 'row',
  },
  filterButton: {
    backgroundColor: '#383838',
    borderWidth: 1,
    borderColor: '#505050',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  filterText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  notificationList: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  thumbnail: {
    height: 55,
    width: 55,
    borderRadius: 10,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  channelText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  description: {
    color: '#cccccc',
    fontSize: 13,
    marginTop: 2,
  },
  time: {
    color: '#777777',
    fontSize: 11,
    marginTop: 3,
  },
  footer: {
    backgroundColor: '#282828',
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
    flex: 1,
  },
  footerIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
    marginHorizontal: 30,
  },
})