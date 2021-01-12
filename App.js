import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'

export default function App() {
  return (
    <View>
      <SignUpLoginScreen />
    </View>
  );
}