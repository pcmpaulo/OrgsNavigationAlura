import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/Home';
import BestEmployersPage from '../pages/BestEmployers';
import EmployerDetailPage from '../pages/EmployerDetail';
import BasketPage from '../pages/Basket';

const Stack = createStackNavigator();

function StackRouter({mainComponent = 'Home'}) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={mainComponent}>
      <Stack.Screen name={'Home'} component={HomePage} />
      <Stack.Screen name={'BestEmployers'} component={BestEmployersPage} />
      <Stack.Screen name={'EmployerDetail'} component={EmployerDetailPage} />
      <Stack.Screen name={'Basket'} component={BasketPage} />
    </Stack.Navigator>
  );
}

export default StackRouter;
