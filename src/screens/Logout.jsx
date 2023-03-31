import React from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import bottomTabsActions from '../store/ReloadBottomTabs/actions';
import { StyleSheet } from 'react-native';

const { reloadBottomTabs } = bottomTabsActions

function Logout() {
  const navigation = useNavigation()

  let state = useSelector(store => store)
  let dispatch = useDispatch()

  useEffect(() => {
    async function handleLogout() {
      try {
        const token = await AsyncStorage.getItem('token');
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let url = 'https://minga-pjxq.onrender.com/api/auth/signout'
        await axios.post(url, "", headers)
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('user')
        console.log('Logout')
        dispatch(reloadBottomTabs({ state: !state }))
        setTimeout(() => navigation.navigate('Home'), 1000)
      } catch (error) {
        console.log(error);
      }
    }
    handleLogout();
  }, []);

  return (
    <View style={styles.logout}>
      <Text>You are beeing logged out, please wait</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  logout: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Logout