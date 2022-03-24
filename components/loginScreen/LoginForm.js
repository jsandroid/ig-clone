import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import React from 'react'
import {firebase} from '../../firebase'

const LoginForm = ({navigation}) => {
  //shcema for form validation
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().required('An email is required'),
    password: Yup.string()
      .required()
      .min(6, 'Passwords must be at least 8 characters long')
  })

  const onLogin = async(email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log('Firebase login Successful', email, password)
      navigation.push('HomeScreen')
    } catch(error) {
      Alert.alert(
        'Login Error',
        `${error.message}\n\nTry to login again or create a new account`,
        [
          {
            text: 'OK',
            onPress: ()=> console.log('OK pressed'),
            style: 'cancel',
          },
          {
            text: 'Sign Up',
            onPress: ()=> navigation.push('SignupScreen')
          }
        ]
      )
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        onLogin(values.email, values.password)        
      }}
      validationSchema={LoginFormSchema}
      validateOnMount={true}
    >
      {/* anon fn that can wrap around one child */}
      {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
        <View>
          <View style={styles.wrapper}>
            <TextInput
              placeholderTextColor={'#444'}
              placeholder='Phone number, username, or email'
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
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'flex-end', marginBottom: 30 }}>
              <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <Pressable
            titleSize={20}
            style={styles.button(isValid)}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>

          <View style={styles.signupContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
              <Text style={{ color: '#0096F6' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
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