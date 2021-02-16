import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import TimerScreen from '../screens/TimerScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="bell" type ="font-awesome" />,
      drawerLabel : "Notifications"
    }
  },
  MyReceivedBooks :{
    screen: TimerScreen,
    navigationOptions:{
      drawerIcon : <Icon name="clock-o" type ="font-awesome" />,
      drawerLabel : "Timer"
    }
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{
      drawerIcon : <Icon name="settings" type ="fontawesome5" />,
      drawerLabel : "Settings"
    }
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
