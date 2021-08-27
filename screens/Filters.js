import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import AltTopBar from '../components/AltTopBar';
import { useNavigation } from '@react-navigation/core';
import { FilterContext } from '../contexts/FilterContext';
import { Picker } from '@react-native-picker/picker';
import Button from 'react-native-button';


export default function Filters() {


  const {fetchAnimals, setAnimalType, setLocation, setAge, animalType, age, gender, setGender } = useContext(FilterContext);

  const navigation = useNavigation();

  const handleSubmit = () => {
      fetchAnimals()
      navigation.navigate('Main');
  }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <AltTopBar />
            <Text style={{fontWeight: 'bold', marginTop: 25, marginLeft: 20, fontSize: 16, color: 'gray'}}>Search Filters</Text>
            <View style={styles.form}>
                <Text style={{marginLeft: 7, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: 'rgba(38, 64, 179, 0.842)'}}>Animal Type</Text>
                <Picker selectedValue={animalType} onValueChange={current => setAnimalType(current)} style={{marginBottom: 30}}>
                    <Picker.Item label='All' value='' />
                    <Picker.Item label='Dogs' value='Dog' />
                    <Picker.Item label='Cats' value='Cat' />
                    <Picker.Item label='Rabbits' value='Rabbit' />
                </Picker>

                <Text style={{marginLeft: 8, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#ef32d9b2'}}>Age</Text>
                <Picker selectedValue={age} onValueChange={currentAge => setAge(currentAge)} style={{marginBottom: 30}}>
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Adult' value='Adult' />
                    <Picker.Item label='Baby' value='Baby' />
                </Picker>

                <Text style={{marginLeft: 7, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: '#c471ed'}}>Gender</Text>
                <Picker selectedValue={gender} onValueChange={currentGender => setGender(currentGender)} style={{marginBottom: 35}}>
                    <Picker.Item label='Any' value='' />
                    <Picker.Item label='Male' value='Male' />
                    <Picker.Item label='Female' value='Female' />
                </Picker>
                
                <Text style={{marginLeft: 5, marginBottom: 10, fontSize: 16, fontWeight: 'bold', color: 'rgba(38, 64, 179, 0.842)'}}>Location</Text>
             

                <TextInput
                    style={styles.input}
                    name='location'
                    onChangeText={(text) => setLocation(text)}
                    placeholder='Zip Code'
                />
                
                
                <View style={{marginVertical: 150}}>

                <Button title='Save' onPress={handleSubmit}
                style={{ fontSize: 20, color: 'white' }}
                containerStyle={{padding: 10, height: 50, borderRadius: 15, overflow: 'hidden', backgroundColor: 'rgba(38, 64, 179, 0.842)' }}> Save</Button>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 28,
        
    },
    form: {
        flex: 1,
        marginTop: 20,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'dodgerblue',
        margin: 0,
        borderRadius: 10, 
        padding: 7,
        
    }
})