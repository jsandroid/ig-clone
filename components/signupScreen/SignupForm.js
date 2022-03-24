import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import { firebase, db } from '../../firebase'


const SignupForm = ({ navigation }) => {
  //shcema for form validation
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().required('An email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
    password: Yup.string()
      .required()
      .min(6, 'Passwords must be at least 8 characters long'),
  })

  const onSignup = async(email, password, username) => {
    try{
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      console.log('Firebase User created successfully', email, password)
      // db.collection('users').add({
      //   owner_uid: authUser.user.uid,
      //   username: username,
      //   email: authUser.user.email,
      //   profile_picture: await getRandomProfilePicture(),
      // })
    } catch(error) {
      Alert.alert(
        'Account Creation Fail',
        error.message
      )
    }
  }

  const getRandomProfilePicture = async () => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }


  return (
    <Formik
      initialValues={{ email: '', username: '', password: '' }}
      onSubmit={(values) => {
        onSignup(values.email, values.password, values.username)
      }}
      validationSchema={SignupFormSchema}
      validateOnMount={true}
    >
      {/* anon fn that can wrap around one child */}
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <View>
          <View style={styles.wrapper}>
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Username'
              autoCapitalize='none'
              autoCorrect={false}
              textContentType='username'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: 1 > values.username.length || values.username.length >= 2 ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Password'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={true}
              textContentType='password'
              autoFocus={true}
              style={[styles.inputField,
              { borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red' }
              ]}
              //formik stuff
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />

          </View>
          <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </Pressable>
          <View style={styles.signupContainer}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ color: '#0096F6' }}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
    paddingBottom: 40,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  // turning into a dynamic style
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 20,
  },
  signupContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
  },
})

export default SignupForm