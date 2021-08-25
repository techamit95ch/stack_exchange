import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const QuestionScreen = ({ route, navigation }) => {
  const { question_id } = route.params;

  return (
    <View>
      <Text>{question_id}</Text>
    </View>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({});
