import {Text, View, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Score = () => {
  const [score, setScore] = React.useState(0);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setScore(score - 1)} style={styles.scoreButton}>
        <Text style={styles.scoreButtonText}>-</Text>
      </Pressable>
      <View style={styles.score}>
        <Text style={styles.scoreText}>{score}</Text>
      </View>
      <Pressable onPress={() => setScore(score + 1)} style={styles.scoreButton}>
        <Text style={styles.scoreButtonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  scoreButton: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  scoreButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  score: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 40,
    width: 60,
  },
  scoreText: {
    fontSize: 40,
  },
});

export default Score;
