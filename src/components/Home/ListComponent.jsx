import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Question from './Question';
import {
  Spinner,
  HStack,
  useColorModeValue,
  Center,
  NativeBaseProvider,
  Divider,
} from 'native-base';
const ListComponent = ({
  data,
  nextPageQuestion,
  searchQuestion,
  navigation,
}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <>
          <TouchableOpacity
            onPress={() => {
              try {
                // if (item.answer_count) {
                navigation.navigate(`Question`, {
                  question: item,
                });
                // }
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <Question question={item} navigation={navigation} />
          </TouchableOpacity>
        </>
      )}
      onEndReached={nextPageQuestion}
      onEndReachedThreshold={0.01}
      ItemSeparatorComponent={() => <Divider />}
      ListFooterComponent={() =>
        data.length ? <Spinner color="blue.500" size="sm" /> : <></>
      }
    />
  );
};

export default ListComponent;

const styles = StyleSheet.create({});
