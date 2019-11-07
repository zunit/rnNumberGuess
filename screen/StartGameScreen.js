import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

// custom import Component
import Card from './../components/Card';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a number</Text>
                <TextInput style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <Button title="Reset" onPress={() => {}}/>
                    <Button title="Confirm" onPress={() => {}}/>
                </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center', 
    }, 
    title:{
        fontSize: 20, 
        marginVertical: 10,
        
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }, 
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        textAlign: 'center'
    }
});

export default StartGameScreen;