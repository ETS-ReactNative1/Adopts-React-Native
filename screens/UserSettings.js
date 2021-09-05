import React, { useContext } from 'react'
import { SafeAreaView, Text, Switch, StyleSheet, View } from 'react-native';
import UserBar from '../components/UserBar';
import { FilterContext } from '../contexts/FilterContext';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function UserSettings() {

    const {darkModeOn, setDarkModeOn} = useContext(FilterContext);
    const toggleSwitch = () => setDarkModeOn(previousState => !previousState);
    return (
        <View style={darkModeOn ? styles.darkMode : styles.container}>
            <UserBar />
            <Text style={darkModeOn ? styles.darkModeText : styles.text}>{darkModeOn ? 'Disable Dark Mode' : 'Enable Dark Mode'}</Text>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={darkModeOn ? "dodgerblue" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={darkModeOn}
                style={{top: 15, right: 20}}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginTop: getStatusBarHeight(),
        backgroundColor: 'white'
    },
    darkMode: {
        flex: 1,
        marginTop: getStatusBarHeight(),
        backgroundColor: '#000'
    },
    text: {
        color: 'black',
        top: 40,
        marginLeft: 20, 
        fontWeight: '900',
        fontSize: 18
    },
    darkModeText: {
        color: 'white',
        top: 40,
        marginLeft: 20, 
        fontWeight: '900',
        fontSize: 18
    }
})


