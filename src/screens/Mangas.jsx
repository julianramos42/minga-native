import React from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import MangasTitle from '../components/MangasTitle';
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import MangasType from '../components/MangasType';
import MangasCards from '../components/MangasCards';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Mangas() {
  let search = useSelector(store => store.text)

  return (
    <ScrollView style={styles.mangas}>
      <MangasTitle />
      <ScrollView style={styles.mangasDisplayed}>
        <Text style={{marginBottom: 12, fontWeight: 'bold'}}>Explore</Text>
        <MangasType/>
        <MangasCards/>
      </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mangas: {
    height: '100%',
  },
  mangasDisplayed: {
    display: 'flex',
    padding: 10,
    width: '100%',
    height: windowHeight,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  }
})

export default Mangas