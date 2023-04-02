import React from 'react'
import { Text, View, Image } from 'react-native'
import IconoManga from '../../images/icono-manga.png'
import IconoMang from '../../images/iconomanga-.png'
import IconoEmoji from '../../images/mangacoment.png'
import IconoCorazon from '../../images/iconocorazon.png'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import actions from '../store/Reactions/actions.js'
import { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native'

function Reaction() {
    const route = useRoute();
    const mangaId = route.params.mangaId;
    let [reload, setReload] = useState(false)
    const { captureReactions } = actions
    let dispatch = useDispatch()
    let [token, setToken] = useState('')
    let [reactions, setReactions] = useState('')
    let [like, setLike] = useState('null')
    let [dislike, setDislike] = useState('null')
    let [surprise, setSurprise] = useState('null')
    let [love, setLove] = useState('null')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    
    useFocusEffect(React.useCallback(() => {
        setLike('null')
        setDislike('null')
        setSurprise('null')
        setLove('null')
    }, [mangaId]));

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
    }, []));

    useFocusEffect(React.useCallback(() => {
        function getReactions() {
            let headers = { headers: { 'Authorization': `Bearer ${token}` } }
            setTimeout(() => {
                dispatch(captureReactions({ mangaId, headers }))
            }, 1500)
        }
        getReactions()
    }, [token,reload,mangaId]));

    let mangaReactions = useSelector(store => store.reactions.reactions)
   
    function handleLike() {
        if(like==='like'){
            setTimeout( () => {
                setLike('null')
            }, 1500)
        }
        let url = 'https://minga-pjxq.onrender.com/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "like"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleDislike() {
        if (dislike === 'dislike') {
            setTimeout( () => {
                setDislike('null')
            }, 500)
        }
        let url = 'https://minga-pjxq.onrender.com/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "dislike"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleSurprise() {
        if (surprise === 'surprise') {
            setTimeout( () => {
                setSurprise('null')
            }, 1500)
        }
        let url = 'https://minga-pjxq.onrender.com/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "surprise"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }
    function handleLove() {
        if (love === 'love') {
            setTimeout( () => {
                setLove('null')
            }, 1500)
        }
        let url = 'https://minga-pjxq.onrender.com/api/reactions'
        let data = {
            manga_id: mangaId,
            name: "love"
        }
        axios.post(url, data, headers)
        setReload(!reload)
    }

    function getUserReactions(token,id) {
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = "https://minga-pjxq.onrender.com/api/reactions?me=1&manga_id=" + id
        setTimeout(() => {
            axios.get(url, headers)
                .then(res => {
                    setReactions(res.data.message)
                    userReactions(res.data.message)
                })
                .catch(err => console.log(err))
        }, 500)
    }

    let [cantChapters, setCantChapters] = useState('')
    useEffect(() => {
        axios.get("https://minga-pjxq.onrender.com/api/chapters/all/" + mangaId)
            .then(res => setCantChapters(res.data.chapters.length))
            .catch(err => console.log(err))
    }, [mangaId])

    function userReactions(reactions) {
        reactions.forEach(reaction => {
            if (reaction.name === 'like') {
                setLike('like')
                setDislike("null")
            }
            if (reaction.name === 'dislike') {
                setDislike("dislike")
                setLike('null')
            }
            if (reaction.name === 'surprise') {
                setSurprise("surprise")
                setLove("null")
            }
            if (reaction.name === 'love') {
                setLove("love")
                setSurprise("null")
            }
        })
    }

    useEffect(() => {
        if (token && mangaId) {
            getUserReactions(token,mangaId)
        }
    }, [reload, mangaId, token])

    return (
        <View style={{ height: 100 }}>
            {
                mangaReactions ?
                    <View style={styles.section3}>
                        <TouchableOpacity style={styles.emojisContainer} onPress={handleLike}>
                            <Image style={[styles.emojis, like==='like' && styles.check]} source={IconoManga} alt="emoji1" />
                            <Text>{mangaReactions.likes}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojisContainer} onPress={handleDislike}>
                            <Image style={[styles.emojis, dislike==='dislike' && styles.check]} source={IconoMang} alt="emoji2" />
                            <Text>{mangaReactions.dislike}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojisContainer} onPress={handleSurprise}>
                            <Image style={[styles.emojis, surprise==='surprise' && styles.check]} source={IconoEmoji} alt="emoji3" />
                            <Text>{mangaReactions.surprise}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emojisContainer} onPress={handleLove}>
                            <Image style={[styles.emojis, love==='love' && styles.check]} source={IconoCorazon} alt="emoji4" />
                            <Text>{mangaReactions.love}</Text>
                        </TouchableOpacity>
                    </View> : <></>
            }
            <View style={styles.section4}>
                <View style={styles.rectangleManga}>
                    <View style={styles.rectangleText}>
                        <Text style={styles.text1}>4.5/5</Text>
                        <Text style={styles.text2}>Rating</Text>
                    </View>
                    <Text style={styles.text3}> | </Text>
                    <View style={styles.rectangleText}>
                        {cantChapters ? <Text style={styles.text1}>{cantChapters}</Text> : <></>}
                        <Text style={styles.text2}>Chapters</Text>
                    </View>
                    <Text style={styles.text3}> | </Text>
                    <View style={styles.rectangleText}>
                        <Text style={styles.text1}>Eng</Text>
                        <Text style={styles.text2}>Lenguaje</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section3: {
        marginTop: '5%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: 45,
        gap: 10
    },
    emojisContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 45,
    },
    check: {
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 50,
    },
    emojis: {
        width: 45,
        height: 45,
    },
    section4: {
        marginTop: '7%',
        height: 45,
    },
    rectangleManga: {
        width: '100%',
        height: 40,
        marginTop: '7%',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
        gap: 15,
    },
    rectangleText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text1: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        color: '#424242',
    },
    text2: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        color: '#9D9D9D',
    },
    text3: {
        color: '#9D9D9D',
    },
})

export default Reaction