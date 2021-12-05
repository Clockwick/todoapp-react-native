import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'

const App = () => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen name="Main" component={MainScreen} ></Drawer.Screen>
      <Drawer.Screen name="About" component={AboutScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default App
