import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Score from './Score';
import courseData from '../courseData.json';

const Hole = () => {
  return (
    <View flexDirection="row">
      <Text style={styles.holeText}>
        Hole {courseData.course.holes[0].hole}
      </Text>
      <Score />
    </View>
  );
};

const styles = StyleSheet.create({
  holeText: {
    fontSize: 40,
    paddingTop: 5,
    color: 'red',
  },
});

export default Hole;
