import React from 'react';
import {StyleSheet, View, YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

import Navigator from '~/navigation/navigatorContainer';

import '~/config/ReactotronConfig';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
