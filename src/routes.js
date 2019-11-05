import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '~/screens/Login';

const Routes = createAppContainer(createSwitchNavigator({Login}));

export default Routes;
