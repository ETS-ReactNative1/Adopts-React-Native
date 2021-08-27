import React, { useContext, useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import AltTopBar from '../components/AltTopBar';
import { FontAwesome } from '@expo/vector-icons';
import { FilterContext } from '../contexts/FilterContext';

export default function Favorites() {

    const { favorites } = useContext(FilterContext);

    const nameFilter = (name) => {
        var str = name;
        if (str.length > 10) {
            str = str.substring(0, 25)
        }
  
        if (/\d/.test(str)) {
          return 'No name yet!'
        }
        return str
    }


    const favoritesList = () => {
        return favorites.map((fav) => {
          return (
            <View key={fav.id} style={styles.animal}>
            <TouchableOpacity onPress={() => Linking.openURL(`${fav.url}`)}>

            <Image source={{uri: fav.photos[0].full}} style={{height: 100, width: 100, borderRadius: 15, borderWidth: 1, borderColor: 'gray', marginLeft: 10, marginTop: 10}}/>
              <Text style={fav.gender === 'Male' ? styles.textPrimary : styles.textSecondary}>{nameFilter(fav.name)}</Text>
              <Text style={fav.gender === 'Male' ? styles.textBoy : styles.textGirl}>{fav.gender}</Text>
            </TouchableOpacity>
            </View>
          );
        });
      };

    return (
        <SafeAreaView style={styles.container}>
            <AltTopBar/>
            <ScrollView>
                <Text style={{marginLeft: 10, marginTop: 10, marginBottom: 5, fontWeight: 'bold', fontSize: 18, color: 'gray'}}> <FontAwesome name='heart' size={20} color='#ef32d9b2' / >  Favorites</Text>
                {favoritesList()}
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28,
    },
    animal: {
        margin: 8,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        height: 120,
    },
    textPrimary: {
        fontWeight: 'bold',
        color: 'rgba(38, 64, 179, 0.842)',
        fontSize: 18,
        textAlign: 'center',
        bottom: 80,
        left: 50
    },
    textSecondary: {
        fontWeight: 'bold',
        color: '#ef32d9b2',
        fontSize: 18,
        textAlign: 'center',
        bottom: 75,
        left: 50
    },
    textBoy: {
        fontWeight: 'bold',
        color: 'dodgerblue',
        textAlign: 'center',
        bottom: 75,
        left: 50
    },
    textGirl: {
        fontWeight: 'bold',
        color: '#c471ed',
        textAlign: 'center',
        bottom: 70,
        left: 50
    }
})
