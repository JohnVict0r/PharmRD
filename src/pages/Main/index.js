import React from 'react';

import {Text, View, StatusBar, TouchableOpacity} from 'react-native';

import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="darkblue" />
    <View style={styles.content}>
      <Text style={styles.welcome}>PharmRD</Text>
      <Text style={[styles.instructions, styles.fileName]}>
        Receituário Digital
      </Text>
    </View>
    <TouchableOpacity>
      <Text style={styles.instructions}>Ler QRCode</Text>
    </TouchableOpacity>
  </View>
);

export default Main;
