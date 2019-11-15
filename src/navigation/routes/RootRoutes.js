import screens from '~/constants/screens';

import {AuthNavigator, MainNavigator} from '../navigators';
import {AuthLoading} from '~/screens';

const routes = {
  [screens.AuthLoading]: {
    screen: AuthLoading,
  },
  [screens.AuthRoot]: {
    screen: AuthNavigator,
  },
  [screens.App]: {
    screen: MainNavigator,
  },
};

export default routes;
