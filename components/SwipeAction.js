import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { RectButton } from "react-native-gesture-handler";
import Swipes from "./Swipes";

export default function SwipeAction({
  results,
  currIndex,
  handleLike,
  handlePass,
  setType,
}) {
  const [willLike, setWillLike] = useState(false);
  const [willPass, setWillPass] = useState(false);

  const renderLeftActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipes results={results[currIndex + 1]} setType={setType} />
      </RectButton>
    );
  };

  const renderRightActions = () => {
    return (
      <RectButton style={styles.container}>
        <Swipes results={results[currIndex + 1]} setType={setType} />
      </RectButton>
    );
  };

  return (
    <Swipeable
      friction={2}
      leftThreshold={40}
      rightThreshold={40}
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
      onSwipeableLeftOpen={() => {
        setWillLike(false);
        handleLike(results[currIndex].id);
      }}
      onSwipeableRightOpen={() => {
        setWillPass(false);
        handlePass();
      }}
      onSwipeableLeftWillOpen={() => setWillLike(true)}
      onSwipeableRightWillOpen={() => setWillPass(true)}
    >
      <Swipes
        results={results[currIndex]}
        willLike={willLike}
        willPass={willPass}
        setType={setType}
      />
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
