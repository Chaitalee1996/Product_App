import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Favourite from '../../screen/Favourite';
import ProductDetails from '../../screen/ProductDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Dashboard from '../../screen/Dashboard';
import ProductList from '../../screen/ProductList';


const Tab = createBottomTabNavigator();

const Bottom_Nav = () => {
  return (
    <Tab.Navigator initialRouteName='dashbaord'   >
      <Tab.Screen name="dashbaord" component={Dashboard} options={{
        tabBarActiveBackgroundColor: '#F08080',
        headerShown: false,
        tabBarLabel: 'Favrouites',
        tabBarIcon: (tabInfo) => (
        
          <MaterialIcons name="space-dashboard" size={30} color="#900" />
        ),
      }} />
      <Tab.Screen name="Product_list" component={ProductList}
        options={{
          headerShown: false, 
          tabBarLabel: 'Product List',
          tabBarActiveBackgroundColor: '#F08080',
          // tabBarIcon:(tabInfo)=>{
          //   return <Image source={require('../../assest/mobile.jpg')} style={{width:20,height:20,tintColor:tabInfo.focused?'green':'black'}} />
          // }

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" size={30} color="#900" />
          ),
        }} />
      <Tab.Screen name="Fav" component={Favourite} options={{tabBarStyle: { display: 'none' },
        headerShown: false,
        tabBarActiveBackgroundColor: '#F08080',
        tabBarIcon: () => (
          <MaterialCommunityIcons name="cards-heart-outline" size={30} color="#900"
          />
        ),
      }} />
    </Tab.Navigator>
  );
}
export default Bottom_Nav;
