import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import { Dimensions, Image } from 'react-native';
import Matter from 'matter-js';
import entities from './entities';
import Physics from './Physics';
import React, { useEffect, useState } from 'react';
import SpriteSheet from 'rn-sprite-sheet';
import Constants from './Constants';
import Images from './Images';
export default function App() {
  const [running, setRunning] = useState(false);
  useEffect(() => {
    setRunning(true);
  }, []);
  let mummy = null;
  let startAnimate = (type) => {
    mummy.play({
      type: type,
      fps: 24,
      loop: true,
      onFinish: () => {
        console.log('he');
      },
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={Images.Background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <GameEngine
        systems={[Physics]}
        entities={entities()}
        running={running}
        style={styles.gameContainer}
      >
        {<StatusBar style="auto" hidden={true} />}
      </GameEngine>
      <Text style={styles.topText}>Louis Philip Buenaflor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.SCREEN_WIDTH,
    height: Constants.SCREEN_HEIGHT,
  },
  topText: {
    position: 'absolute',
    top: 0, // Adjust this value if needed
    left: 0,
    right: 0,
    padding: 50,
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background for better readability
    color: '#fff', // White text color
    textAlign: 'center', // Center-align text
    fontSize: 20, // Adjust font size as needed
  },
});
