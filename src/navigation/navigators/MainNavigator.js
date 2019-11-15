import {createDrawerNavigator} from 'react-navigation-drawer';

import {HomeScreen, SettingsScreen} from '~/screens';
import {MenuDrawer} from '~/components';

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
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
