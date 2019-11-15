import React, {Component} from 'react';
import {Text, View, AsyncStorage} from 'react-native';

import styles from './styles';

class AuthLoading extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let userToken = null;
    try {
      userToken = await AsyncStorage.getItem('@PharmRDAPI:token');
      console.log(userToken);

      this.props.navigation.navigate(userToken ? 'App' : 'AuthRoot');
    } catch {}

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'AuthRoot');
  };
  render() {
    return (
      <View style={styles.loading}>
        <Text> Loading </Text>
      </View>
    );
  }
}

export default AuthLoading;
