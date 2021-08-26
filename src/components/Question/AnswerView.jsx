import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, VStack, HStack, Heading, Avatar, Spinner } from 'native-base';
import Answer from './Answer';

const AnswerView = ({ data, moreView }) => {
  return (
    <>
      <Heading size="md" style={styles.heading}>
        {' '}
        Answers
      </Heading>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Answer answer={item} />
          </>
        )}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.01}
      />
    </>
  );
};

export default AnswerView;

const styles = StyleSheet.create({
  heading: {
    // marginLeft: 15,
    color: '#2e3236',
    flex: 1,
    // fontSize: 16,
    fontWeight: 'normal',
  },
});
