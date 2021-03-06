import React, {Component} from 'react';
import {TouchableOpacity, Image, SafeAreaView, ScrollView} from 'react-native';

import {Block, Card, Text, Icon, Label, CustomHeader} from '~/components';
import styles from './styles';

class HomeScreen extends Component {
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
          title="Home"
          drawerOpen={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <ScrollView contentContainerStyle={{paddingVertical: 25}}>
          {/* <Card row middle style={styles.margin}>
            <Block flex={1.2} center middle style={{marginRight: 20}}>
              <Text light height={43} size={36} spacing={-0.45}>
                86
              </Text>
              <Text
                ligth
                caption
                center
                style={{paddingHorizontal: 16, marginTop: 3}}>
                OPERATING SCORE
              </Text>
            </Block>
            <Block>
              <Text paragraph color="black3">
                All cars are operating well. There were 1,233 trips since your
                last login.
              </Text>
            </Block>
          </Card> */}
          <Card title="Receitas" style={[styles.margin, {marginTop: 18}]}>
            <Block style={styles.driver}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.readerPrescription()}>
                <Block row center>
                  <Block flex={2}>
                    <Text h4>Receber</Text>
                    <Text paragraph color="gray">
                      Apresente o QRCode ou nº do sus para receber a receita
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>

          {/* <Card title="TODAY'S TRIPS" style={[styles.margin, {marginTop: 18}]}>
            <Block row right>
              <Block flex={2} row center right>
                <Label blue />
                <Text paragraph color="gray">
                  Today
                </Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">
                  Yesterday
                </Text>
              </Block>
            </Block>
            <Block>
              <Text>Chart</Text>
            </Block>
          </Card> */}
          {/*
          <Card title="TOP DRIVERS" style={[styles.margin, {marginTop: 18}]}>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1506244856291-8910ea843e81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                      }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Grand Tesoro</Text>
                    <Text paragraph color="gray">
                      Chevrolet Bolt
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      $6,432
                    </Text>
                    <Text paragraph right color="gray">
                      1,232 miles
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1521657249896-063c0c611fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                      }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>Invision App</Text>
                    <Text paragraph color="gray">
                      Tesla Model X
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      $6,432
                    </Text>
                    <Text paragraph right color="gray">
                      1,232 miles
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri:
                          'https://images.unsplash.com/photo-1536700503339-1e4b06520771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                      }}
                    />
                  </Block>
                  <Block flex={2}>
                    <Text h4>React UI Kit</Text>
                    <Text paragraph color="gray">
                      Volvo Intellisafe
                    </Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">
                      $6,432
                    </Text>
                    <Text paragraph right color="gray">
                      1,232 miles
                    </Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card> */}

          {/* <Card title="TRIPS BY TYPE" style={[styles.margin, {marginTop: 18}]}>
            <Block>
              <Text>Chart</Text>
            </Block>
            <Block row space="between" style={{marginTop: 25}}>
              <Block>
                <Text h2 light>
                  1,744
                </Text>
                <Block row center>
                  <Label blue />
                  <Text paragraph color="gray">
                    Confort
                  </Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>
                  2,312
                </Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">
                    Premium
                  </Text>
                </Block>
              </Block>
            </Block>
          </Card> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
