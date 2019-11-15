import {createSwitchNavigator} from 'react-navigation';
import Routes from './routes/RootRoutes';

export default createSwitchNavigator(Routes, {initialRouteName: 'AuthLoading'});
