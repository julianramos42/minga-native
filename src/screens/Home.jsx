import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen() {

    const user = {
        name: 'Julian',
        lastName: 'Ramos'
    }

    AsyncStorage.setItem('user', JSON.stringify(user))

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

export default HomeScreen