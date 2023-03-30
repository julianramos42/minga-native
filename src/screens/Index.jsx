import { Text, View, ScrollView, StyleSheet } from "react-native";
import Hero from '../components/Hero';
import AuthForm from '../components/AuthForm'

function Index() {

    return (
        <ScrollView>
            <Hero />
            <AuthForm/>
        </ScrollView>
    );
}

export default Index