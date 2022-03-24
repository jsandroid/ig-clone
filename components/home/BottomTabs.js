import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: require('../../assets/home-on.png'),
    inactive: require('../../assets/home-off.png')
  },
  {
    name: 'Search',
    active: require('../../assets/search-on.png'),
    inactive: require('../../assets/search-off.png')
  },
  {
    name: 'Reel',
    active: require('../../assets/reel-on.png'),
    inactive: require('../../assets/reel-off.png')
  },
  {
    name: 'Shopping',
    active: require('../../assets/shopping-on.png'),
    inactive: require('../../assets/shopping-off.png')
  },
  {
    name: 'Profile',
    active: require('../../assets/profile-on.png'),
    inactive: require('../../assets/profile-off.png')
  }
]

const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const Icon = ({ icon }) => {
    var currIcon = (activeTab === icon.name) ? icon.active : icon.inactive
    return (
      <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={currIcon} style={styles.icon} />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical'/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 999,
    backgroundColor: '#000'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'cover'
  }
})

export default BottomTabs