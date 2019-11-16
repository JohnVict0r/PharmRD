import React, {Component} from 'react';
import {Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Button, Block, Text, Input} from '~/components';

class SignInScreen extends Component {
  state = {
    email: '',
    password: '',
  };

  saveUser = async (user, token) => {
    await AsyncStorage.multiSet([
      ['@PharmRDAPI:token', token],
      ['@PharmRDAPI:user', JSON.stringify(user)],
    ]);
  };

  signIn = async () => {
    const {navigation} = this.props;

    const email = `${this.state.email}`;
    const token = `${this.state.password}`;
    try {
      await this.saveUser(email, token);

      navigation.navigate('App');
    } catch {}
  };

  handleRegister = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  handleInputEmailChange = email => {
    this.setState({email});
  };

  handleInputPasswordChange = password => {
    this.setState({password});
  };

  render() {
    const {email, password} = this.state;

    return (
      <Block center middle>
        <Block middle>
          <Image
            source={require('~/assets/images/Base/pharmrdlateral.png')}
            style={{height: 28, width: 102}}
          />
        </Block>
        <Block flex={2.5} center>
          <Text h3 style={{marginBottom: 6}}>
            Sign in to PharmRD
          </Text>
          <Text paragraph color="black3">
            Please enter your credentials to proceed.
          </Text>
          <Block center style={{marginTop: 44}}>
            <Input
              full
              email
              label="Email address"
              style={{marginBottom: 25}}
              value={email}
              onChangeText={() => this.handleInputEmailChange()}
            />
            <Input
              full
              password
              label="Password"
              style={{marginBottom: 25}}
              rightLabel={
                <Text
                  paragraph
                  color="gray"
                  onPress={() => this.handleForgotPassword()}>
                  Forgot password?
                </Text>
              }
              value={password}
              onChangeText={() => this.handleInputPasswordChange()}
            />

            <Button
              full
              style={{marginBottom: 12}}
              onPress={() => this.signIn()}>
              <Text button>Sign in</Text>
            </Button>
            <Text paragraph color="gray">
              Don't have an account?{' '}
              <Text
                height={18}
                color="blue"
                onPress={() => this.handleRegister()}>
                Sign up
              </Text>
            </Text>
          </Block>
        </Block>
      </Block>
    );
  }
}

export default SignInScreen;
