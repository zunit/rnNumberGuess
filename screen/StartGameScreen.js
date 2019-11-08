import React, {useState} from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Button, 
    TouchableWithoutFeedback, 
    Keyboard 
} from 'react-native';

// custom import Component
import Card from './../components/Card';
import Input from './../components/Input';

// custom import Constant 
import Color from './../constants/color';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g,''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        // convert text to a number
        setSelectedNumber(parseInt(enteredValue));
    }

    let content;

    if (confirmed){
        content = <Card><View><Text>{selectedNumber}</Text></View></Card>
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}>Select a number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText = {numberInputHandler}
                        value = {enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button color={Color.primary} title="Reset" onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button color={Color.primary} title="Confirm" onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {content}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,

    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    button: {
        width: 100,
        backgroundColor: '#f7287b',
        borderRadius: 5
    },

    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    input: {
        width: 50,
        alignItems: 'center',
        textAlign: 'center'
    }
});

export default StartGameScreen;