import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Home'
import SettingsScreen from '../screens/Settings'

const Tab = createBottomTabNavigator()

function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation