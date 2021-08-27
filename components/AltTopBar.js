import React from 'react'
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';






export default function AltTopBar({screen}) {

    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                <Feather name="bookmark" size={30} color="#ef32d9b2" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                <Ionicons name="home-outline" size={32} color="#c471ed" style={{marginLeft: 5}} />
        
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
                <Feather name="settings" size={30} color="rgba(38, 64, 179, 0.842)" />
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 65, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: getStatusBarHeight() -27,
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