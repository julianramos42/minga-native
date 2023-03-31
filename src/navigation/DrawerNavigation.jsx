import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Index from '../screens/Index';
import AuthForm from "../screens/AuthForm";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Index} />
      <Drawer.Screen name="Register" component={AuthForm} initialParams={{state:'register'}}/>
      <Drawer.Screen name="Login" component={AuthForm} initialParams={{state:'login'}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigation