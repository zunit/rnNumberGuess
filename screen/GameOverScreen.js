import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game Over: {props.round} rounds to figure out the number</Text>
            <Text>The Number was {props.selectNumber}</Text>
            <Button title="Replay" onPress={props.replayGame}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen; 