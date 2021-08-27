import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


export default function TopBar() {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <Feather name="bookmark" size={30} color="#ef32d9b2" />
            </TouchableOpacity>

            <Image source={require('../assets/adoptsLogo2.png')} style={styles.logo}></Image>
           
            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
                <Feather name="settings" size={30} color="rgba(38, 64, 179, 0.842)" />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 65, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 5.46,
        elevation: 9
    },
    name: {
        fontSize: 35,
        fontWeight: '900',
        color: 'dodgerblue'
    },
    logo: {
        height: 100,
        width: 230,
        resizeMode: 'contain',
        borderRadius: 60,
    }
})