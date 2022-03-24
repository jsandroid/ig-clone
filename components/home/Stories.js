import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { USERS } from '../../data/users'


const Stories = () => {
  return (
    <View style={ {marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        { USERS.map((story, index) => (
          <TouchableOpacity key={index} style={{ alignItems: 'center'}}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={{color: 'white'}}>{(story.user.length > 10 ? `${story.user.slice(0,10).toLowerCase()}...` : story.user )}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: 'limegreen'
  }
})