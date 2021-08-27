import React, { useContext } from 'react';
import { View, Text, Image, Linking, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { FilterContext } from '../contexts/FilterContext';

export default function FavoriteCards({results, currIndex}) {

    
const { favorites } = useContext(FilterContext);

    return (
        <View>
            {/* <Image source={{uri: favorites.photos[0].full}} style={{height: 60, width: 60}}/> */}
            <Text >{favorites.name}</Text>
            {/* <Text style={styles.age}>Age: {results.age}</Text> */}
            <Text>{favorites.gender}</Text>
        </View>
    )
}
