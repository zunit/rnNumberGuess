import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

// Custom Component 
import NumberSummary from '../components/NumberSummary';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [numRounds, setNumRounds] = useState(0);
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const {userChoice, onGameOver} = props;
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    useEffect(() =>{
        if (currentGuess === userChoice){
            onGameOver(numRounds)
        } 
    }, [currentGuess, userChoice, onGameOver]); 
        
    const nextGuessHandler = direction => {
        // validate direction 
        if ((direction === 'lower' && currentGuess < props.userChoice) || 
        (direction === 'greater'&& currentGuess > props.userChoice)){
             Alert.alert("Don't lie!", "You know that this is wrong...", [
                 {text: 'Sorry!', style: 'cancel' }
             ]);
             return; 
        } if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setNumRounds(currRounds => currRounds + 1);
    }

    return (
        <View style={styles.screen}> 
            <Text>Opponent's Guess</Text>
            <NumberSummary>{currentGuess}</NumberSummary>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, "greater")}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1, 
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20, 
        width: 300, 
        maxWidth: '80%'
    }
});

export default GameScreen;