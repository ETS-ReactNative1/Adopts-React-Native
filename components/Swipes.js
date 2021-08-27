import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

export default function Swipes({ results }) {

    const nameFilter = (name) => {
        var str = name;
        if (str.length > 10) {
            str = str.substring(0, 18)
        }
  
        if (/\d/.test(str)) {
          return 'No name yet!'
        }
        return str
    }


    return (
        <View style={styles.container}>
           
            <Image source={{uri: results.photos[0].full}} style={styles.photo}/>

            
            <Text style={[styles.name, styles.textShadow]}>{nameFilter(results.name)}</Text>
            {/* <Text style={styles.age}>Age: {results.age}</Text> */}
            <View style={{position: 'absolute'}}>

            <Text style={results.gender === 'Female' ? [styles.female, styles.textShadow] : [styles.male, styles.textShadow]}>{results.gender}</Text>
            </View>
          
        
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
        height: '95%',
    },
    photo: {
        height: '80%',
        resizeMode: 'cover',
        borderRadius: 60,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderColor: '#5c5c5c',
        borderWidth: 2,
        marginTop: 30,
    },
    name: {
        color: 'white',
        fontSize: 33,
        left: 15,
        bottom: 50,
        fontWeight: 'bold'
    },
    age: {
        color: 'white',
        fontSize: 24,
        bottom: 130,
        left: 235,
        fontWeight: 'bold'
    }, 
    female: {
        color: 'white',
        fontSize: 30,
        top: 35,
        left: 265,
        fontWeight: 'bold'
    },
    male: {
        color: 'white',
        fontSize: 30,
        top: 35,
        left: 295, 
        fontWeight: 'bold'
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    }
})