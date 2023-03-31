import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigation from "./src/navigation/BottomTabsNavigation";
// import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { Provider } from 'react-redux';
import { store } from './src/store/store.js'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabsNavigation />
      </NavigationContainer>
    </Provider>
  );
}