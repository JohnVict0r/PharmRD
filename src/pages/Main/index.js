import React from 'react';

import {Text, Image, ImageBackground, StatusBar} from 'react-native';

import styles from './styles';

const Main = () => (
  <ImageBackground
    source={{
      uri: 'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/background.png',
    }}
    style={styles.container}
    resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    {/* <Image
      source={{
        uri:
          'https://s3-sa-east-1.amazonaws.com/rocketseat-cdn/rocketseat_logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    /> */}
    <Text style={styles.welcome}>PharmRD</Text>
    <Text style={[styles.instructions, styles.fileName]}>
      Receituário Digital
    </Text>
  </ImageBackground>
);

export default Main;
