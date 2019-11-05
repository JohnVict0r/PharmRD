import React, {Component} from 'react';
import {Image, Dimensions, ScrollView} from 'react-native';

import {Button, Block, Text, Input} from '../components';

class Register extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <ScrollView contentContainerStyle={{paddingVertical: 25}}>
        <Block center middle>
          <Block middle>
            {/* <Image
            source={require('../assets/images/Base/Logo.png')}
            style={{height: 28, width: 102}}
          /> */}
            <Text>PharmRD</Text>
          </Block>
          <Block flex={2.5} center>
            <Text h3 style={{marginBottom: 6}}>
              Sign Up to PharmRD
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
              />
              <Input full cpf label="Cpf" style={{marginBottom: 25}} />
              <Input full crf label="CRF" style={{marginBottom: 25}} />
              <Input full name label="Name" style={{marginBottom: 25}} />
              <Input
                full
                password
                label="Password"
                style={{marginBottom: 25}}
              />
              <Input
                full
                checkpassword
                label="Check Password"
                style={{marginBottom: 25}}
              />
              <Button
                full
                style={{marginBottom: 12}}
                onPress={() => navigation.navigate('Overview')}>
                <Text button>Sign un</Text>
              </Button>
              <Text paragraph color="gray">
                Do have an account?{' '}
                <Text
                  height={18}
                  color="blue"
                  onPress={() => navigation.navigate('Login')}>
                  Sign in
                </Text>
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

export default Register;
