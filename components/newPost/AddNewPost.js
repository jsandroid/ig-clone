import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader navigation={navigation} />
    </View>
  )
}

const Header = ({navigation}) => (
  <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/leftArrow.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <Text style={styles.headerText}>NEW POST</Text>
      <View></View>
    </View>
)
export default AddNewPost

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  headerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 25,
  }
})