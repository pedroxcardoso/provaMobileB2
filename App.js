import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './src/Pages/DashboardPage';
import ForgotPassword from './src/Pages/ForgotPassword';
import Login from './src/Pages/LoginPage';
import Register from './src/Pages/RegisterPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
        <Stack.Screen name="Password" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
