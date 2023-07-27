import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'
import Favourite from '../../screen/Favourite';
import ProductDetails from '../../screen/ProductDetails';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Dashboard from '../../screen/Dashboard';
import ProductList from '../../screen/ProductList';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RootStackParamList from '../stacknavigation/stack_nav'

;
const Tab = createBottomTabNavigator();

const Bottom_Nav = () => {
  return (
    <Tab.Navigator initialRouteName='Dshbaord'   >
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
        tabBarActiveBackgroundColor: '#F08080',
        headerShown: false,
        tabBarLabel: 'Dashboard',
        tabBarIcon: (tabInfo) => (
    
          <MaterialIcons name="space-dashboard" size={30} color="#900" />
        ),
      }} />
      <Tab.Screen name="Product_list" component={ProductList}
        options={{
          headerShown: false, 
          tabBarLabel: 'Product List',
          headerTitleStyle:{
            fontSize:30
          },
          tabBarActiveBackgroundColor: '#F08080',
          // tabBarIcon:(tabInfo)=>{
          //   return <Image source={require('../../assest/mobile.jpg')} style={{width:20,height:20,tintColor:tabInfo.focused?'green':'black'}} />
          // }
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" size={30} color="#900" />
          ),
        }} />
      <Tab.Screen name="Favourite" component={Favourite} options={{tabBarStyle: { display: 'none', },
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
