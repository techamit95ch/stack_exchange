import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Answer = ({ answer }) => {
  return (
    <View>
      <Text>{answer.answer_id}</Text>
    </View>
  );
};

export default Answer;

const styles = StyleSheet.create({});
