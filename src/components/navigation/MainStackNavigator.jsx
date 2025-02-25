import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen';
import ManuScreen from '../../screen/ManuScreen';
import OrderScrenn from '../../screen/OrderScrenn';
import ProfileScreen from '../../screen/ProfileScreen';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="menu"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="menu"
        component={ManuScreen}
      />
      <Stack.Screen
        name="order"
        component={OrderScrenn}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
      />
      
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
