import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth';

console.disableYellowBox = true;

export default function Financas() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#131313" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}