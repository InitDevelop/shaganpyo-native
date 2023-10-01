import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

type propType = {
  currentState: number,
  setCurrentState: (param: number) => void
}

const Footer = (props: propType) => {

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.iconBox, props.currentState === 0 ? styles.selectedBox : styles.unactiveBox]}
        onPress={() => { props.setCurrentState(0) }}>
        <Image source={
            require('../images/table.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.iconBox, props.currentState === 1 ? styles.selectedBox : styles.unactiveBox]}
        onPress={() => { props.setCurrentState(1) }}>
        <Image source={
            require('../images/search.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconBox, props.currentState === 2 ? styles.selectedBox : styles.unactiveBox]}
        onPress={() => { props.setCurrentState(2) }}>
        <Image source={
            require('../images/tray.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconBox, props.currentState === 3 ? styles.selectedBox : styles.unactiveBox]}
        onPress={() => { props.setCurrentState(3) }}>
        <Image source={
            require('../images/zap.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.iconBox, props.currentState === 4 ? styles.selectedBox : styles.unactiveBox]}
        onPress={() => { props.setCurrentState(4) }}>
        <Image source={
            require('../images/gear.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    height: "9%",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",

    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center'
  },
  footerShadow: {
    backgroundColor: "#fff",
    height: "7%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -7
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  iconBox: {
    height: "70%",
    width: "15%",
    justifyContent: 'center'
  },
  icon: {
    height: "55%",
    width: "55%",
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  selectedBox: {
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  unactiveBox: {
    
  },
})

export default Footer;
