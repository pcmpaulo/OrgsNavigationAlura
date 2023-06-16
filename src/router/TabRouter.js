import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeRouter from './HomeRouter';
import BestEmployersRouter from './BestEmployersRouter';

import Heart from '../assets/heart.svg';
import Home from '../assets/home.svg';

const Tab = createBottomTabNavigator();

function TabRouter() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: {fontSize: 16},
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => {
            let Icon = Home;
            if (route.name === 'BestEmployersRouter') {
              Icon = Heart;
            }
            return <Icon color={color} width={32} height={32} />;
          },
        })}>
        <Tab.Screen name={'HomeRouter'} component={HomeRouter} />
        <Tab.Screen
          name={'BestEmployersRouter'}
          component={BestEmployersRouter}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabRouter;
