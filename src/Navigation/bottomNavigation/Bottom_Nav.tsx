import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import Favourite from '../../screen/Favourite';
import ProductDetails from '../../screen/ProductDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const Bottom_Nav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="fav" component={Favourite} options={{
        headerShown: false, tabBarLabel: 'Favrouites',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cards-heart-outline" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Product_details" component={ProductDetails} options={{ headerShown: false,
      // tabBarIcon:(tabInfo)=>{
      //   return <Image source={require('../../assest/mobile.jpg')} style={{width:20,height:20,tintColor:tabInfo.focused?'green':'black'}} />
      // }

      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="details" color={color} size={size} />
      ),
      }}  />
    </Tab.Navigator>
  );
}
export default Bottom_Nav;
