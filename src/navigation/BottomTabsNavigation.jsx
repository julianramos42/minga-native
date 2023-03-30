import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from '../screens/Index'

const Tab = createBottomTabNavigator()

function BottomTabsNavigation(){
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Index} />
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation