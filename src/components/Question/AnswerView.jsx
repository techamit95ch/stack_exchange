import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import {
  Text,
  VStack,
  HStack,
  Heading,
  Avatar,
  Spinner,
  Divider,
} from 'native-base';
import Answer from './Answer';

const AnswerView = ({ data }) => {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Answer answer={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider />}
        ListFooterComponent={() => <Divider />}
        ListHeaderComponent={() => (
          <Heading size="sm" style={styles.heading}>
            Answers
          </Heading>
        )}
        ListEmptyComponent={
          <Spinner
            size="lg"
            color="danger.400"
            accessibilityLabel="Empty Answers"
          />
        }
      />
    </>
  );
};

export default AnswerView;

const styles = StyleSheet.create({
  heading: {
    marginLeft: 15,
    color: '#2e3236',
    flex: 1,
    // fontSize: 16,
    fontWeight: 'normal',
  },
});
