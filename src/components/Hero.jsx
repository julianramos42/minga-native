import React from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, ImageBackground } from "react-native";
import bg from '../../images/hero-background.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Hero() {
    return (
        <View style={styles.hero}>
            <ImageBackground
                source={bg}
                style={styles.backgroundHeroImage}
            >
                <View style={styles.exploreSection}>
                    <Text style={styles.exploreTitle}>Live the emotion of the manga</Text>
                    <Text style={{color: '#FFF'}}>Find the perfect manga for you</Text>
                    <View style={styles.exploreBtn}><Text style={styles.textBtn}>Explore</Text></View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    hero:{
        width: windowWidth,
        height: windowHeight,
    },
    backgroundHeroImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        backgroundColor: '#000',
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    exploreSection: {
        width: 300,
        height: 204,
        gap: 25,
        margin: 0,
        alignItems: 'center',  
    },
    exploreTitle: {
        fontWeight: 'bold',
        fontSize: 35,
        textShadowColor: 'rgba(255, 255, 255, 0.25)',
        textShadowOffset: {width: 1, height: 8},
        textShadowRadius: 50,
        color: '#FFF',
        textAlign: 'center'
    },
    exploreBtn: {
        width: 240,
        height: 55,
        backgroundColor: '#F9A8D4',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        color: '#FFF',
        fontWeight: '500',
        fontSize: 24,
        textDecorationLine: 'none',
    }
});

export default Hero