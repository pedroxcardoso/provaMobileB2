import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './src/Pages/LoginPage';
import RegisterPage from './src/Pages/RegisterPage';
import ForgotPasswordPage from './src/Pages/ForgotPasswordPage';
import DashboardPage from './src/Pages/DashboardPage';

const Stack = createNativeStackNavigator();

export default function App() {
   return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
        <Stack.Screen name="Registro" component={RegisterPage} options={{headerShown: false}}/>
        <Stack.Screen name="Dashboard" component={DashboardPage} options={{headerShown: false}}/>
        <Stack.Screen name="Recuperar" component={ForgotPasswordPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}