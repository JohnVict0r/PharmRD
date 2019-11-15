import React from 'react';
import {Icon} from 'react-native-elements';
import {View, Text, Image, TouchableOpacity, AsyncStorage} from 'react-native';
import {colors} from '~/styles';

import styles from './styles';

class MenuDrawer extends React.Component {
  state = {
    navActive: 'Home',
  };

  navigateTo = nav => {
    const {navigation} = this.props;
    navigation.navigate(nav);

    /* coloca no estado o link ativo */
    this.setState({
      navActive: nav,
    });

    navigation.closeDrawer();
  };

  navLink = (nav, text, icon, iconType) => {
    const {navActive} = this.state;

    return (
      <View style={navActive === nav ? styles.activeItemCard : styles.itemCard}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => this.navigateTo(nav)}>
          <View style={navActive === nav ? styles.activeIcon : styles.icon}>
            <Icon
              name={icon}
              // type={iconType}
              color={navActive === nav ? colors.primary : colors.gray}
            />
          </View>
          <Text style={navActive === nav ? styles.activeLink : styles.link}>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  _signOutAsync = async () => {
    const {navigation} = this.props;
    await AsyncStorage.clear();
    navigation.navigate('SignIn');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <View style={styles.profile}>
            {/* <Image
              style={styles.drawerImage}
              source={require('../../../assets/img/phoenix.png')}
            /> */}
            <Text>Logo</Text>
          </View>
        </View>
        <View style={styles.bottomLinks}>
          {this.navLink('Home', 'Home', 'home', 'antdesign')}
          {/* this.navLink('Settings', 'Configurações', 'setting', 'antdesign') */}
          <View style={styles.itemCard}>
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                this._signOutAsync();
              }}>
              <View style={styles.icon}>
                <Icon name="logout" type="antdesign" color={colors.gray} />
              </View>
              <Text style={styles.link}>Sair</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default MenuDrawer;
