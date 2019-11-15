import {StyleSheet} from 'react-native';
import {colors} from '~/styles';

const Styles = StyleSheet.create({
  activeItemCard: {
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    backgroundColor: colors.lightGray,
    height: 60,
  },
  activeIcon: {
    flex: 1,
  },
  activeLink: {
    flex: 3,
    fontFamily: 'Raleway',
    fontSize: 14,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
  },
  profile: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    backgroundColor: '#fff',
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: 'white',
    textAlign: 'left',
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  img: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  topLinks: {
    height: 140,
    backgroundColor: 'black',
  },
  itemCard: {
    height: 60,
    backgroundColor: 'white',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 0.5,
  },
  icon: {
    flex: 1,
  },
  link: {
    flex: 3,
    fontFamily: 'Raleway',
    fontSize: 14,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left',
    color: colors.gray,
  },
  touch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 450,
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'gray',
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white',
  },
  drawerImage: {
    height: 90,
    width: 90,
    //marginLeft: 20,
    marginBottom: 5,
  },
});

export default Styles;
