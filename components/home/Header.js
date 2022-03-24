import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/instagram-logo.png')}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={require('../../assets/plus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../assets/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>21</Text>
          </View>
          <Image
            style={styles.icon}
            source={require('../../assets/messenger.png')}
          />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}
//<a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Pixel perfect - Flaticon</a>

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: 100
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  heart: {
    width: 23,
    height: 23,
    resizeMode: 'contain',
    paddingHorizontal: 25,
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 10,
    bottom: 15,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadText: {
    color: 'white',
    fontWeight: '600'
  }
})
export default Header