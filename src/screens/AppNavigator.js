// import React from "react";
// import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import AccountScreen from "./src/screens/AccountScreen";
// import SigninScreen from "./src/screens/SigninScreen";
// import SignupScreen from "./src/screens/SignupScreen";
// import TrackCreateScreen from "./src/screens/TrackCreateScreen";
// import TrackDetailScreen from "./src/screens/TrackDetailScreen";
// import TrackListScreen from "./src/screens/TrackListScreen";

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Signin" component={SigninScreen} />
//       <Stack.Screen name="Signup" component={SignupScreen} />
//     </Stack.Navigator>
//   );
// };
// const Tab = createMaterialBottomTabNavigator();

// return (
//     <Tab.Navigator>
//       <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );

// export default AppNavigator;


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccountScreen from './AccountScreen';
import TrackCreateScreen from './TrackCreateScreen';
import TrackListScreen from './TrackListScreen';
import TrackDetailScreen from './TrackDetailScreen';
import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

// Create navigation stacks and tabs
const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();




// Define your navigation structure
function LoginFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signin" component={SigninScreen} />
    </Stack.Navigator>
  );
}

function TrackListFlow() {
  return (
    <Stack.Navigator>   
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="trackListFlow" component={TrackListScreen} />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />      
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

// Finally, create the main navigation container
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loginFlow" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginFlow" component={LoginFlow} />
        <Stack.Screen name="mainFlow" component={MainFlow} />
        <Stack.Screen name="tracklistflow" component={TrackListFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Ha Code Kasa Lihu Varti 

// const App = createAppContainer(switchNavigator);

// export default () => {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   )
// }