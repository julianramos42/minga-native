import { Text, View, ScrollView, StyleSheet } from "react-native";
import Hero from '../components/Hero';
import AuthForm from './AuthForm'
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Index() {
    let state = 'register'

    let [token, setToken] = useState('')

    useEffect(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('token');
                setToken(value)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    return (
        <ScrollView>
            <Hero />
            {token ? '' : <AuthForm state={state} />}
        </ScrollView>
    );
}

export default Index