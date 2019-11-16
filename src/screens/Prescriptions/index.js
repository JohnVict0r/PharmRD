import React, {Component} from 'react';
import {TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {Block, Card, Text, Label, CustomHeader} from '~/components';
import styles from './styles';

class PrescriptionsScreen extends Component {
  static navigationOptions = {
    headerLeftContainerStyle: {
      paddingLeft: 24,
    },
    headerRightContainerStyle: {
      paddingRight: 24,
    },
    headerLeft: (
      <TouchableOpacity>
        <Icon menu />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity>
        <Icon notification />
      </TouchableOpacity>
    ),
    headerTitle: (
      <Block row middle>
        <Text h4>Overview</Text>
      </Block>
    ),
  };

  readerPrescription = () => {
    const {navigation} = this.props;

    navigation.navigate('Reader');
  };

  render() {
    return (
      <SafeAreaView style={styles.overview}>
        <CustomHeader
          title="Receitas"
          drawerOpen={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <ScrollView contentContainerStyle={{paddingVertical: 25}}>
          <Card title="Ações" style={[styles.margin, {marginTop: 18}]}>
            <Block style={styles.driver}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.readerPrescription()}>
                <Block row center>
                  <Block>
                    <Icon
                      raised
                      name="qrcode"
                      type="font-awesome"
                      color="#f50"
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Receber Receita</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default PrescriptionsScreen;
