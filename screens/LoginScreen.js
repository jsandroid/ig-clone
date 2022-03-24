import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTA_LOGO = 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png'

const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTA_LOGO, height: 100, width: 100 }}/>
      </View>
      <LoginForm navigation={navigation}/>
    </View>
)


export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})