import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from 'react-native'
import Favourite from '../../screen/Favourite';
import ProductDetails from '../../screen/ProductDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Tab = createBottomTabNavigator();

const Bottom_Nav = () => {
  return (
    <Tab.Navigator   >
      <Tab.Screen name="fav" component={Favourite} options={{ tabBarActiveBackgroundColor:'#F08080',
        headerShown: false, 
        tabBarLabel: 'Favrouites',
        tabBarIcon: (tabInfo) => (
          <MaterialCommunityIcons name="cards-heart-outline"size={30} color="#900" 
          />
        ),
      }} />
      <Tab.Screen name="Product_details" component={ProductDetails} options={{ headerShown: false,
      tabBarActiveBackgroundColor:'#F08080',
      // tabBarIcon:(tabInfo)=>{
      //   return <Image source={require('../../assest/mobile.jpg')} style={{width:20,height:20,tintColor:tabInfo.focused?'green':'black'}} />
      // }

      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="details" size={30} color="#900" />
      ),
      }}  />
    </Tab.Navigator>
  );
}
export default Bottom_Nav;
