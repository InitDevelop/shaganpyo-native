import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image, SafeAreaView, StatusBar } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Body from './src/components/Body';

export default function App() {

  const [currentState, setCurrentState] = useState<number>(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='dark-content'
        showHideTransition='slide'
      />
      <Header/>
      <Body
        currentState={currentState}
      />
      <Footer
        currentState={currentState}
        setCurrentState={setCurrentState}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});