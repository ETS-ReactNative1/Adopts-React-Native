import React from 'react'
import { View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import FavoriteCards from './FavoriteCards'

export default function Card() {
    return (
        <View>
           <Card>
           <Card.Divider/>   
           <FavoriteCards results={results[currIndex]}/>
           </Card>
        </View>
    )
}
