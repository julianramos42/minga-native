import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import mangasActions from '../store/Mangas/actions'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native'
import { useEffect } from 'react'

const { read_mangas } = mangasActions

function MangasCards() {
    let mangas = useSelector(store => store.mangas.mangas)
    let text = useSelector(store => store.text.text) // TEXTO DEL BUSCADOR
    let categories = useSelector(store => store.categories.categories)
    let order = useSelector(store => store.order.order)
    const dispatch = useDispatch()

    useFocusEffect(React.useCallback(() => {
        async function getData() {
            try {
                const value = await AsyncStorage.getItem('token');
                getMangas(value)
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []));
    
    useEffect(() => {
            getMangas()
    }, [text, categories, order])

    function getMangas(token){
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        dispatch(read_mangas({ inputText: text, categories: categories, order: order, headers }))
    }

    function handleRead(e,id){
        console.log(id)
    }

    return (
        <View style={styles.mangasCards}>
            {
                mangas.length ? mangas.map((manga, i) => {
                    let card =
                        <View style={styles.card} key={i}>
                            <View style={styles.cardText}>
                                <View style={[styles[`card-color-${manga.category_id.name}`]]}></View>
                                <View className='text'>
                                    <View style={{ marginBottom: 25 }}>
                                        <Text style={styles.cardTitle}>{manga.title}</Text>
                                        <Text style={[styles[`span-${manga.category_id.name}`]]}>{manga.category_id.name}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.cardBtn} onPress={(event) => handleRead(event, manga._id)}>
                                        <Text style={styles.btnText}>Read</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View>
                                <Image style={styles.cardImg} source={{ uri: manga.cover_photo }} alt='manga-image' />
                            </View>
                        </View>
                    return card
                }) : <Text>No mangas founded</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    mangasCards: {
        width: '100%',
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 150,
        backgroundColor: '#FFF',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    cardText: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        height: '100%',
        gap: 15,
    },
    cardTitle: {
        fontSize: 15,
        color: '#222222',
    },
    'card-color-shonen': {
        height: 145,
        borderRadius: 10,
        borderWidth: 6,
        borderColor: '#EF8481'
    },
    'card-color-comic': {
        height: 145,
        borderRadius: 10,
        borderWidth: 6,
        borderColor: '#8883F0'
    },
    'card-color-shojo': {
        height: 145,
        borderRadius: 10,
        borderWidth: 6,
        borderColor: '#00BA88'
    },
    'card-color-seinen': {
        height: 145,
        borderRadius: 10,
        borderWidth: 6,
        borderColor: '#FC9C57'
    },
    'span-shonen': {
        color: '#EF8481'
    },
    'span-comic': {
        color: '#8883F0'
    },
    'span-shojo': {
        color: '#00BA88'
    },
    'span-seinen': {
        color: '#FC9C57'
    },
    cardBtn: {
        textDecorationLine: 'none',
        backgroundColor: 'rgba(209, 251, 240, 1)',
        width: 92,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    btnText: {
        color: '#00BA88',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        textTransform: 'uppercase',
    },
    cardImg: {
        width: 125,
        height: 148,
        borderRadius: 10
    }
})

export default MangasCards