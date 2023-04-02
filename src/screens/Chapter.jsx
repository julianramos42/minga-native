import React from 'react'
import { View, Text, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import axios from 'axios';
import comment from '../../images/iconcomment.png'
import flecha from '../../images/flecha-correcta.png'
import flecha_izquierda from '../../images/flecha-izquierda.png'
import { ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Chapter() {
  const route = useRoute();
  const chapterId = route.params.chapterId;
  const [chapter, setChapter] = useState({});
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios
      .get('https://minga-pjxq.onrender.com/api/chapters/' + chapterId)
      .then((response) => {
        setChapter(response.data.chapter)
      })

      .catch((error) => console.error(error));
  }, [chapterId]);

  let handlePrev = () => {
    // setPage(page - 1);
  };

  let handleNext = () => {
    // setPage(page + 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.mover}>
      <View style={styles.divChapter2}>
        <Text style={styles.parrafoChapter2}> Cap N° {chapter.order} - {chapter.title} </Text>
      </View>
      <View>
        <ScrollView contentContainerStyle={styles.contenedorCapitulos}>
          <TouchableOpacity style={styles.boton} onPress={handlePrev}>
            <Image style={styles.flecha} source={flecha_izquierda} />
          </TouchableOpacity>

          <View style={styles.posi}>
            <Image style={styles.mangaa} source={{ uri: chapter?.pages?.[page] }} />
          </View>

          <TouchableOpacity style={styles.boton} onPress={handleNext}>
            <Image style={styles.flecha} source={flecha} />
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.divChapter3}>
        <View style={styles.chapter3}>
          <Image style={styles.comment} source={comment} />
          <Text>9</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mover: {
    height: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingTop: 50,
    marginTop: 50
  },
  divChapter2: {
    backgroundColor: '#F9A8D4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    height: 30,
  },
  parrafoChapter2: {
    color: 'white',
  },
  contenedorCapitulos: {
    height: 400,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boton: {
    width: 50,
    height: 400,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
  },
  posi: {
    height: 400,
    paddingTop: 10,
    width: '70%',
    display: 'flex',
    justifyContent: 'center'
  },
  divChapter3: {
    background: '#dbd9d9',
    height: 50,
  },
  chapter3: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    gap: 8,
  },
  parrafoChapter3: {
    display: 'flex',
    alignItems: 'center',
    color: 'black',
  },
  comment: {
    width: 20,
    height: 20,
  },
  iconoFlecha: {
    fontSize: 20,
    color: '#000',
    position: 'relative',
    top: 5,
    left: 5,
  },
  flecha: {
    width: 20,
    height: 20
  },
  mangaa: {
    height: '100%',
    width: '100%',
  },
});

export default Chapter