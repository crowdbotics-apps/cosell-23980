import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings195213Navigator from '../features/Settings195213/navigator';
import UserProfile195206Navigator from '../features/UserProfile195206/navigator';
import Settings195205Navigator from '../features/Settings195205/navigator';
import Settings195203Navigator from '../features/Settings195203/navigator';
import SignIn2195201Navigator from '../features/SignIn2195201/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings195213: { screen: Settings195213Navigator },
UserProfile195206: { screen: UserProfile195206Navigator },
Settings195205: { screen: Settings195205Navigator },
Settings195203: { screen: Settings195203Navigator },
SignIn2195201: { screen: SignIn2195201Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
