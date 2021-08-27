import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FilterContext } from '../contexts/FilterContext';

export default function BottomBar({results, currIndex}) {

    const { setFavorites, favorites } = useContext(FilterContext);

    

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <FontAwesome name='search-plus' size={27} color='rgba(38, 64, 179, 0.842)' onPress={() => Linking.openURL(`${results[currIndex].url}`)}> Profile</FontAwesome>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { setFavorites([...favorites, results[currIndex]]); alert('Liked', 'Saved to your liked animals');}}>
                <FontAwesome name='heart' size={27} color='#ef32d9b2' > Like</FontAwesome>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        bottom: 110,
        width: 124,
        height: 80,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 0,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 0,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 6.46,
        elevation: 9,
    }
})
