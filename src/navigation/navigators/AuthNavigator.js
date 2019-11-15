import {createSwitchNavigator} from 'react-navigation';

import {SignIn, SignUp, ForgotPassword} from '~/screens';

const AuthNavigator = createSwitchNavigator(
  {
    SignIn,
    // implementar futuramente o stackNavigator
    SignUp,
    ForgotPassword,
  },
  {
    initialRouteName: 'SignIn',
  },
);

export default AuthNavigator;
