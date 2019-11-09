import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from './screen/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRounds] = useState(0);

  const restartGameHandler = () =>{
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0); 
  };

  const gameOverHandler = (round) => {
    setGuessRounds(round);
  }

  let content = <StartGameScreen onStartGame = {startGameHandler}/>;

  if (userNumber && guessRound <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver = {gameOverHandler}/>
  } else if (guessRound > 0){
    content = <GameOverScreen round={guessRound} selectNumber={userNumber} replayGame = {restartGameHandler} />;
  }



  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" />
      {/* <StartGameScreen />
      <GameScreen /> */}
      {/* <GameOverScreen/> */}
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
