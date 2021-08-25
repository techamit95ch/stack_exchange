import React from 'react';
import { StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import Question from './Question';
import {
  Spinner,
  HStack,
  useColorModeValue,
  Center,
  NativeBaseProvider,
  Divider,
} from 'native-base';
const ListComponent = ({ data, nextPageQuestion, searchQuestion }) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <Question question={item} />}
      onEndReached={nextPageQuestion}
      onEndReachedThreshold={0.01}
      ListFooterComponent={() =>
        data.length ? <Spinner color="blue.500" size="sm" /> : <></>
      }
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({});
