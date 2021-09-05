import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Swipes from './Swipes';

export default function SwipeAction({results, currIndex, handleLike, handlePass}) {

    const [willLike, setWillLike] = useState(false);
    const [willPass, setWillPass] = useState(false);

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
           onSwipeableLeftOpen={() => {
               setWillLike(false)
               handleLike(results[currIndex].id)
           }}
           onSwipeableRightOpen={() => {
               setWillPass(false)
               handlePass()
           }}
           onSwipeableLeftWillOpen={() => setWillLike(true)}
           onSwipeableRightWillOpen={() => setWillPass(true)}
        >
           <Swipes results={results[currIndex]} willLike={willLike} willPass={willPass}/>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
