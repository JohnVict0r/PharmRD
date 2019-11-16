import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {
  HomeScreen,
  SettingsScreen,
  PrescriptionsScreen,
  ReaderScreen,
  PrescriptionsByPatientScreen,
} from '~/screens';
import {MenuDrawer} from '~/components';

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Prescriptions: createStackNavigator(
      {
        Prescriptions: {
          screen: PrescriptionsScreen,
        },
        Reader: {
          screen: ReaderScreen,
        },
        PrescriptionActivates: {
          screen: PrescriptionsByPatientScreen,
        },
      },
      {
        initialRouteName: 'Prescriptions',
        headerMode: 'none',
      },
    ),
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: MenuDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);

export default MainNavigator;
