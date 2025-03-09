import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screen/HomeScreen';
import CartScreen from '../../screen/CartScreen';
import OrderHistoryScreen from '../../screen/OrderHistoryScreen';

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      headerMode="none"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen name='cart' component={CartScreen}/>
      <Stack.Screen name='order_history' component={OrderHistoryScreen}/>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
