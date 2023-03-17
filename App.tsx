import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SignUp } from './src/screens/SignUp';
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
     <SignUp />
    </NativeBaseProvider>
    
  );
}

