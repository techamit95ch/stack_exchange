import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuestionScreen from './screens/QuestionScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useDispatch } from 'react-redux';
import { fetchData } from './actions/questions';
const Stack = createNativeStackNavigator();

export default () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{
            headerTitle: 'Details',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: '#005EB8',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
