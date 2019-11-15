import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.settings}>
        <Text> Settings </Text>
      </View>
    );
  }
}

export default SettingsScreen;
