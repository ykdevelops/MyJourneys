import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from './screens/Dashboard'
import Journey from './screens/Journey'
import JourneysProvider from './context/JourneysContext'

const Stack = createStackNavigator()
const headerOpts = {
  headerStyle: { backgroundColor: 'white' },
  headerTintColor: 'black'
}

export default function App () {
  return (
    <NavigationContainer>
      <JourneysProvider>
        <Stack.Navigator initialRouteName='Dashboard'>
          <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{
              ...headerOpts,
              title: 'Dashboard'
            }}
          />
          <Stack.Screen
            name='Journey'
            component={Journey}
            options={{
              ...headerOpts,
              title: 'Journey'
            }}
          />
        </Stack.Navigator>
      </JourneysProvider>
    </NavigationContainer>
  )
}
