import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import QRCodeScanner from 'react-native-qrcode-scanner';

import api from '~/services/api';

import {Block, Card, Text, Icon} from '~/components';
import styles from './styles';

class ReaderScreen extends Component {
  state = {
    success: null,
    patient: {},
  };

  onSuccess = e => {
    AsyncStorage.setItem('@PharmRDAPI:patientsus', e.data);
    this.getPatient();
    this.setState({success: true});
  };

  getPatient = async () => {
    const patientsus = await AsyncStorage.getItem('@PharmRDAPI:patientsus');
    api.get(`/pacientes/${patientsus}`).then(response => {
      this.setState({patient: response.data[0]});
    });
  };

  arquivarReceita = receita => {
    const patientsus = AsyncStorage.getItem('@PharmRDAPI:patientsus');

    api.put(`/receitas/arquivar/${receita.id}`, {hash: receita.hash});
    this.getPatient();
  };

  navigateToPrescriptions = () => {
    const {navigation} = this.props;

    navigation.navigate('PrescriptionActivates');
  };

  render() {
    const {patient} = this.state;

    return (
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{paddingVertical: 25}}>
          {!this.state.success ? (
            <QRCodeScanner
              onRead={this.onSuccess}
              showMarker={true}
              checkAndroid6Permissions={true}
            />
          ) : (
            <>
              <Card style={[styles.margin, {marginTop: 18}]}>
                <Block title="Paciente" style={styles.driver}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => this.navigateToPrescriptions()}>
                    <Block row center>
                      <Block flex={2}>
                        <Text h4>Nome: {patient && patient.nome}</Text>
                      </Block>
                    </Block>
                  </TouchableOpacity>
                </Block>
              </Card>
              <Card title="Receitas" style={[styles.margin, {marginTop: 18}]}>
                <Block style={styles.driver}>
                  {patient &&
                    patient.receitas_ativas &&
                    patient.receitas_ativas.map(receita => (
                      <TouchableOpacity
                        onPress={() => this.arquivarReceita(receita)}
                        onactiveOpacity={0.8}>
                        <Block row center>
                          <Block flex={2}>
                            <Text h4>Receita {receita.id}</Text>
                            <Text paragraph color="gray">
                              {receita.prescricao}
                            </Text>
                          </Block>
                        </Block>
                      </TouchableOpacity>
                    ))}
                </Block>
              </Card>
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ReaderScreen;
