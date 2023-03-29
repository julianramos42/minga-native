import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useState } from "react";

function SettingsScreen() {
    const [usuario, setUsuario] = useState({})

    useFocusEffect(
        useCallback( () => {
            AsyncStorage.getItem('user')
            .then(user => setUsuario(JSON.parse(user)))
            .catch(err => console.log(err))
        },[])
    )

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
            <Text>{usuario.name}</Text>
            <Text>{usuario.lastName}</Text>
        </View>
    );
}

export default SettingsScreen