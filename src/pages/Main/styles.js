import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'darkblue',
  },
  content: {
    marginTop: 10,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#fff',
  },
  fileName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  instructions: {
    color: 'orange',
    fontSize: 14,
    marginTop: 20,
    textAlign: 'center',
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    color: 'orange',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
