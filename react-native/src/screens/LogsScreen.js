import * as React from 'react'
import { View, Text } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function LogsScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome !</Header>
      <Paragraph>LogIn or SignUp if you don’t have an account.</Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}
