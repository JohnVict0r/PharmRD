import React, {Component} from 'react';
import {Image, Text} from 'react-native';
import {Header, Body, Title, Left, Icon, Right} from 'native-base';
import s from './styles';

class CustomHeader extends Component {
  render() {
    return (
      <Header style={s.container}>
        <Left>
          <Icon
            name="menu"
            onPress={() => {
              this.props.drawerOpen();
            }}
            style={s.icon}
          />
        </Left>
        <Body>
          <Title style={s.text}>{this.props.title}</Title>
        </Body>
        <Right style={s.logoContainer}>
          {/* <Image
            style={s.logo}
            source={require('~/assets/img/phoenix-symbol-1024.png')}
          /> */}
          <Text>Logo</Text>
        </Right>
      </Header>
    );
  }
}
export default CustomHeader;
