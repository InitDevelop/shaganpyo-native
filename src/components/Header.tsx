import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoBox}>
        <Image source={
            require('../images/logo.png')
          }
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    height: "9%",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoBox: {
    marginLeft: "5%",
    height: "70%",
    width: "25%",
  },
  logo: {
    height: "100%",
    width: "auto",
    resizeMode: 'contain',
  },
})

export default Header;
