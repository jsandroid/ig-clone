import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached character limit')
})

const PLACEHOLD_IMG = require('../../assets/newPostImg.png')

const FormikPostUploader = ({navigation}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLD_IMG)
  return (
   <Formik
    initialValues={{ caption: '', imageUrl: ''}}
    onSubmit={(values) => {
      console.log(values)
      console.log('Submitted!')
      navigation.goBack()
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
   >
    {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) =>(
      <>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', height: 100}}>
          <Image source={validUrl.isUri(thumbnailUrl?.uri) ? thumbnailUrl : PLACEHOLD_IMG} style={styles.thumbnail}/>
          <TextInput 
            placeholder='Write a caption...' 
            placeholderTextColor='grey' 
            style={{ paddingLeft: 10, width: '80%', color: '#FFF', fontSize: 20}}
            multiline={true}
            onChangeText={handleChange('caption')}
            onBlur={handleBlur('caption')}
            value={values.caption}
          />
        </View>
        <Divider width={0.2} orientation='vertical'/>
        <TextInput 
          placeholder='Enter Image Url' 
          placeholderTextColor='grey' 
          style={{ width: '100%', color: '#FFF', fontSize: 17}}
          onChangeText={handleChange('imageUrl')}
          onBlur={handleBlur('imageUrl')}
          value={values.imageUrl}
          onChange={e => setThumbnailUrl({uri: e.nativeEvent.text})}
        />
        {errors.imageUrl && (
          <Text style={{fontSize: 10, color: 'red'}}>
            {errors.imageUrl}
          </Text>
        )}

        <Button onPress={handleSubmit} title='Share' disabled={!isValid} />
      </>
    )}
   </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({
  thumbnail: {
    height: 80,
    width: 80,
    borderRadius: 5,
  }
})