import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from '../screens/Index'
import AuthForm from "../screens/AuthForm";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Logout from "../screens/Logout";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import Mangas from '../screens/Mangas';

const Tab = createBottomTabNavigator()

function BottomTabsNavigation() {
    let [token, setToken] = useState('')

    let state = useSelector(store => store)

    useFocusEffect(React.useCallback(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('token');
                setToken(value)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [state]));

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' options={{ headerShown: false }} component={Index} initialParams={{ state: 'register' }} />
            {token ? <></>
                :
                <>
                    <Tab.Screen name='Register' options={{ headerShown: false }} component={AuthForm} initialParams={{ state: 'register' }} />
                    <Tab.Screen name='Login' options={{ headerShown: false }} component={AuthForm} initialParams={{ state: 'login' }} />
                </>
            }
            {token ? <Tab.Screen options={{ headerShown: false }} name='Mangas' component={Mangas} /> : <></>}
            {token ? <Tab.Screen options={{ headerShown: false }} name='Logout' component={Logout} /> : <></>}
        </Tab.Navigator>
    )
}

export default BottomTabsNavigation