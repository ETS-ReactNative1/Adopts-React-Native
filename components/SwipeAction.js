import React from 'react'
import { StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Swipes from './Swipes';

export default function SwipeAction({results, currIndex, handleLike}) {

    const renderLeftActions = () => {
        return (
        <RectButton style={styles.container}>
            <Swipes results={results[currIndex + 1]}/>
        </RectButton>
        )
    }
    
    const renderRightActions = () => {
        return (
        <RectButton style={styles.container}>
            <Swipes results={results[currIndex + 1]}/>
        </RectButton>
        )
    }

    return (
        <Swipeable
           friction={2}
           leftThreshold={40}
           rightThreshold={40}
           renderLeftActions={renderLeftActions}
           renderRightActions={renderRightActions}
           onSwipeableLeftOpen={handleLike}
        >
           <Swipes results={results[currIndex]}/>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
