import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourite from '../../screen/Favourite';
import ProductDetails from '../../screen/ProductDetails';

const Tab = createBottomTabNavigator();

const Bottom_Nav=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="fav" component={Favourite} options={{headerShown:false}} />
      <Tab.Screen name="Product_details" component={ProductDetails} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}
export default Bottom_Nav;
